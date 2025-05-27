import { useState, useContext } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskInput = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const { addTask, updateTask, tasks, getTaskStats } = useTasks();
  const [editingTask, setEditingTask] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }
    setError(null);

    if (editingTask) {
      updateTask(editingTask, title, description);
    } else {
      addTask(title, description);
    }

    setTitle('');
    setDescription('');
    setEditingTask(null);
  };

  const handleCancel = () => {
    setEditingTask(null);
    setTitle('');
    setDescription('');
    setError(null);
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      {error && <div className="error-message">{error}</div>}
      <input
        type="text"
        placeholder="Task title*"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <div className="form-actions">
        {editingTask ? (
          <>
            <button type="submit">Update Task</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </>
        ) : (
          <button type="submit">Add Task</button>
        )}
      </div>
    </form>
  );
};

export default TaskInput;