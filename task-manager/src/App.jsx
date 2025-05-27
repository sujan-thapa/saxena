import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState(() => {
    // Initialize with some sample tasks or load from localStorage
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [
      { id: 1, title: 'Sample Task 1', description: 'This is a sample task', is_completed: false },
      { id: 2, title: 'Sample Task 2', description: 'Another sample task', is_completed: true }
    ];
  });
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingTask, setEditingTask] = useState(null);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    const taskTitle = String(title || '').trim();
    const taskDescription = description ? String(description).trim() : null;

    if (!taskTitle) {
      setError('Task title is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const newTask = {
        id: Date.now(), // Use timestamp as unique ID
        title: taskTitle,
        description: taskDescription,
        is_completed: false
      };

      setTasks([newTask, ...tasks]);
      setTitle('');
      setDescription('');
    } catch (err) {
      console.error('Error adding task:', err);
      setError('Failed to add task');
    } finally {
      setLoading(false);
    }
  };

  const updateTask = (taskId) => {
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      setTasks(tasks.map(task => 
        task.id === taskId 
          ? { 
              ...task, 
              title: title.trim(), 
              description: description.trim() || null 
            } 
          : task
      ));

      setTitle('');
      setDescription('');
      setEditingTask(null);
    } catch (err) {
      console.error('Error updating task:', err);
      setError('Failed to update task');
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = (taskId) => {
    if (!window.confirm('Are you sure you want to delete this task?')) return;

    setLoading(true);
    try {
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (err) {
      console.error('Error deleting task:', err);
      setError('Failed to delete task');
    } finally {
      setLoading(false);
    }
  };

  const toggleTaskStatus = (taskId) => {
    try {
      setTasks(tasks.map(task => 
        task.id === taskId 
          ? { ...task, is_completed: !task.is_completed }
          : task
      ));
    } catch (err) {
      console.error('Error toggling task status:', err);
      setError('Failed to update task status');
    }
  };

  const editTask = (task) => {
    setEditingTask(task.id);
    setTitle(task.title);
    setDescription(task.description || '');
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>

      {error && <div className="error-message">{error}</div>}

      <div className="task-form">
        <input
          type="text"
          placeholder="Task title*"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          disabled={loading}
        />
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={loading}
        />
        
        {editingTask ? (
          <>
            <button
              onClick={() => updateTask(editingTask)}
              disabled={loading || !title.trim()}
            >
              {loading ? 'Updating...' : 'Update Task'}
            </button>
            <button onClick={cancelEdit} disabled={loading}>
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={addTask}
            disabled={loading || !title.trim()}
          >
            {loading ? 'Adding...' : 'Add Task'}
          </button>
        )}
      </div>

      {loading && <p>Loading tasks...</p>}

      <div className="task-list">
        {tasks.length === 0 && !loading ? (
          <p>No tasks found. Add a task to get started!</p>
        ) : (
          tasks.map(task => (
            <div key={task.id} className={`task ${task.is_completed ? 'completed' : ''}`}>
              <div className="task-content">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
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
                  onClick={() => editTask(task)}
                  className="edit-btn"
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  className='delete-btn'
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;