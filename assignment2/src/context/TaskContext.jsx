import { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage'; // Add this import

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', [
    { id: 1, title: 'Sample Task 1', description: 'This is a sample task', is_completed: false },
    { id: 2, title: 'Sample Task 2', description: 'Another sample task', is_completed: true }
  ]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description?.trim() || null,
      is_completed: false
    };
    setTasks(prev => [newTask, ...prev]);
  };

  const updateTask = (taskId, title, description) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId
          ? { ...task, title: title.trim(), description: description?.trim() || null }
          : task
      )
    );
  };

  const deleteTask = taskId => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const toggleTaskStatus = taskId => {
    setTasks(prev =>
      prev.map(task =>
        task.id === taskId ? { ...task, is_completed: !task.is_completed } : task
      )
    );
  };

  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.is_completed).length;
    const pending = total - completed;
    return { total, completed, pending };
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTaskStatus,
        getTaskStats
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
};