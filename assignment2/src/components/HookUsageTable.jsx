// components/HookUsageTable.jsx
import { useTasks, useTheme } from '../context';

const HookUsageTable = () => {
  const { taskStats } = useTasks();
  const { isDarkMode } = useTheme();

  const hookData = [
    {
      hook: 'useState',
      useCase1: 'Store task list',
      useCase2: 'Toggle task completion'
    },
    {
      hook: 'useEffect',
      useCase1: 'Sync tasks to localStorage',
      useCase2: 'Load tasks on mount'
    },
    {
      hook: 'useReducer',
      useCase1: 'Manage task list',
      useCase2: 'Handle timer logic'
    },
    {
      hook: 'useRef',
      useCase1: 'Focus input',
      useCase2: 'Track timer interval ID'
    },
    {
      hook: 'useContext',
      useCase1: 'Theme context',
      useCase2: 'Task stats context'
    },
    {
      hook: 'useMemo',
      useCase1: 'Memoize filtered tasks',
      useCase2: 'Memoize completion stats'
    },
    {
      hook: 'useCallback',
      useCase1: 'Add/remove tasks',
      useCase2: 'Control timer'
    },
    {
      hook: 'useLayoutEffect',
      useCase1: 'Scroll to latest task',
      useCase2: 'Layout adjustment'
    },
    {
      hook: 'Custom Hook',
      useCase1: 'useLocalStorage',
      useCase2: 'usePomodoroTimer'
    }
  ];

  return (
    <div className={`hook-table ${isDarkMode ? 'dark' : 'light'}`}>
      <h2>Hook Usage in This App</h2>
      <table>
        <thead>
          <tr>
            <th>Hook</th>
            <th>Use Case 1</th>
            <th>Use Case 2</th>
          </tr>
        </thead>
        <tbody>
          {hookData.map((row, index) => (
            <tr key={index}>
              <td><code>{row.hook}</code></td>
              <td>{row.useCase1}</td>
              <td>{row.useCase2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HookUsageTable;