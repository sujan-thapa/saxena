import { TaskProvider } from './context/TaskContext';
import { ThemeProvider } from './context/ThemeContext';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TaskStats from './components/TaskStats';
import Timer from './components/Timer';
import './App.css';

function App() {
  return (
    <main>
      <ThemeProvider>
        <TaskProvider>
          <div className="App">
            <h1>Task Manager</h1>
            <div className="app-container">
              <div className="left-panel">
                <Timer />
                <TaskStats />
              </div>
              <div className="right-panel">
                <TaskInput />
                <TaskList />
              </div>
            </div>
          </div>
        </TaskProvider>
      </ThemeProvider>
    </main>

  );
}

export default App;