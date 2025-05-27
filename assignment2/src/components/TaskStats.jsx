import { useTasks } from '../context/TaskContext';

const TaskStats = () => {
  const { getTaskStats } = useTasks();
  const { total, completed, pending } = getTaskStats();

  return (
    <div className="task-stats">
      <div className="stat-item">
        <span className="stat-number">{total}</span>
        <span className="stat-label">Total Tasks</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{completed}</span>
        <span className="stat-label">Completed</span>
      </div>
      <div className="stat-item">
        <span className="stat-number">{pending}</span>
        <span className="stat-label">Pending</span>
      </div>
    </div>
  );
};

export default TaskStats;