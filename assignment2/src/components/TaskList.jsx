import { useContext, useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskList = () => {
  const { tasks, deleteTask, toggleTaskStatus, updateTask } = useTasks();
  const [editingTask, setEditingTask] = useState(null);

  const handleDelete = taskId => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(taskId);
    }
  };

  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks found. Add a task to get started!</p>
      ) : (
        tasks.map(task => (
          <div key={task.id} className={`task ${task.is_completed ? 'completed' : ''}`}>
            <div className="task-content">
              <h3>{task.title}</h3>
              {task.description && <p>{task.description}</p>}
              <div className="task-status">
                Status: {task.is_completed ? 'Completed' : 'Pending'}
              </div>
            </div>
            <div className="task-actions">
              <button
                onClick={() => toggleTaskStatus(task.id)}
                className="status-btn"
              >
                {task.is_completed ? 'Mark Pending' : 'Mark Complete'}
              </button>
              <button
                onClick={() => handleDelete(task.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;