import React, {
  useState,
  useMemo,
  useReducer,
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
} from 'react';
import { useTasks } from '../context/TaskContext';

// Timer reducer for per-task timers (if needed)
const initialState = {
  timers: {},
  runningTimers: {},
};

function reducer(state, action) {
  switch (action.type) {
    case 'START_TIMER':
      return {
        ...state,
        runningTimers: { ...state.runningTimers, [action.payload]: true },
      };
    case 'STOP_TIMER':
      return {
        ...state,
        runningTimers: { ...state.runningTimers, [action.payload]: false },
      };
    case 'TICK_TIMER':
      return {
        ...state,
        timers: {
          ...state.timers,
          [action.payload]: (state.timers[action.payload] || 0) + 1,
        },
      };
    case 'RESET_TIMER':
      return {
        ...state,
        timers: { ...state.timers, [action.payload]: 0 },
      };
    default:
      return state;
  }
}

const TaskList = () => {
  const { tasks, deleteTask, toggleTaskStatus, reorderTasks, updateTask } = useTasks();

  // Filtering and sorting state
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('asc');

  // Edit state
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  // Timer reducer (optional, for per-task timers)
  const [state, dispatch] = useReducer(reducer, initialState);
  const timerRefs = useRef({});

  // Timer side effects (optional, for per-task timers)
  useEffect(() => {
    tasks.forEach(task => {
      const taskId = task.id;
      if (state.runningTimers[taskId]) {
        if (!timerRefs.current[taskId]) {
          timerRefs.current[taskId] = setInterval(() => {
            dispatch({ type: 'TICK_TIMER', payload: taskId });
          }, 1000);
        }
      } else if (timerRefs.current[taskId]) {
        clearInterval(timerRefs.current[taskId]);
        timerRefs.current[taskId] = null;
      }
    });
    return () => {
      Object.values(timerRefs.current).forEach(interval => clearInterval(interval));
    };
  }, [state.runningTimers, tasks]);

  // Filtering and sorting logic
  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks;
    if (filter === 'completed') {
      filtered = tasks.filter(task => task.is_completed);
    } else if (filter === 'pending') {
      filtered = tasks.filter(task => !task.is_completed);
    }
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'title') {
        return sortOrder === 'asc'
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title);
      } else if (sortBy === 'created_at') {
        return sortOrder === 'asc'
          ? new Date(a.created_at) - new Date(b.created_at)
          : new Date(b.created_at) - new Date(a.created_at);
      }
      return 0;
    });
    return sorted;
  }, [tasks, filter, sortBy, sortOrder]);

  // Scroll to latest task when tasks change
  const taskListRef = useRef(null);
  useLayoutEffect(() => {
    const taskList = taskListRef.current;
    if (taskList && taskList.lastElementChild) {
      taskList.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [filteredAndSortedTasks]);

  // Drag-and-drop logic
  const [draggedTaskId, setDraggedTaskId] = useState(null);

  const handleDragStart = useCallback((taskId) => {
    setDraggedTaskId(taskId);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback(
    (targetTaskId) => {
      if (draggedTaskId === null || draggedTaskId === targetTaskId) return;
      const draggedIdx = tasks.findIndex(t => t.id === draggedTaskId);
      const targetIdx = tasks.findIndex(t => t.id === targetTaskId);
      if (draggedIdx === -1 || targetIdx === -1) return;
      const newTasks = [...tasks];
      const [removed] = newTasks.splice(draggedIdx, 1);
      newTasks.splice(targetIdx, 0, removed);
      reorderTasks(newTasks);
      setDraggedTaskId(null);
    },
    [draggedTaskId, tasks, reorderTasks]
  );

  // Handlers
  const handleDelete = taskId => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId);
    }
  };

  const handleToggleStatus = taskId => {
    toggleTaskStatus(taskId);
  };

  // Edit handlers
  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditTitle(task.title);
    setEditDescription(task.description || '');
  };

  const handleEditCancel = () => {
    setEditingTaskId(null);
    setEditTitle('');
    setEditDescription('');
  };

  const handleEditSave = (taskId) => {
    if (editTitle.trim() === '') {
      alert('Title cannot be empty');
      return;
    }
    updateTask(taskId, editTitle, editDescription);
    setEditingTaskId(null);
    setEditTitle('');
    setEditDescription('');
  };

  return (
    <div>
      <div className="task-controls">
        <label>
          Filter:
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </label>
        <label>
          Sort by:
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="created_at">Created At</option>
            <option value="title">Title</option>
          </select>
        </label>
        <label>
          Order:
          <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
            <option value="asc">Asc</option>
            <option value="desc">Desc</option>
          </select>
        </label>
      </div>
      <div className="task-list" ref={taskListRef}>
        {filteredAndSortedTasks.length === 0 ? (
          <p>No tasks found. Add a task to get started!</p>
        ) : (
          filteredAndSortedTasks.map(task => (
            <div
              key={task.id}
              className={`task ${task.is_completed ? 'completed' : ''}`}
              draggable
              onDragStart={() => handleDragStart(task.id)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(task.id)}
            >
              {editingTaskId === task.id ? (
                <div className="task-edit-form">
                  <input
                    type="text"
                    value={editTitle}
                    onChange={e => setEditTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <textarea
                    value={editDescription}
                    onChange={e => setEditDescription(e.target.value)}
                    placeholder="Description"
                  />
                  <button onClick={() => handleEditSave(task.id)}>Save</button>
                  <button onClick={handleEditCancel}>Cancel</button>
                </div>
              ) : (
                <>
                  <div className="task-content">
                    <h3>{task.title}</h3>
                    {task.description && <p>{task.description}</p>}
                    <div className="task-status">
                      Status: {task.is_completed ? 'Completed' : 'Pending'}
                    </div>
                  </div>
                  <div className="task-actions">
                    <button
                      onClick={() => handleToggleStatus(task.id)}
                      className="status-btn"
                    >
                      {task.is_completed ? 'Mark Pending' : 'Mark Complete'}
                    </button>
                    <button
                      onClick={() => handleEditClick(task)}
                      className="edit-btn"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskList;