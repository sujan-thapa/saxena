import { usePomodoroTimer } from '../hooks/usePomodoroTimer';

const Timer = () => {
  const {
    minutes,
    seconds,
    isActive,
    mode,
    startTimer,
    pauseTimer,
    resetTimer
  } = usePomodoroTimer();

  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
    .toString()
    .padStart(2, '0')}`;

  return (
    <div className={`timer ${mode}`}>
      <h3>{mode === 'work' ? 'Work Time' : 'Break Time'}</h3>
      <div className="time-display">{formattedTime}</div>
      <div className="timer-controls">
        {!isActive ? (
          <button onClick={startTimer}>Start</button>
        ) : (
          <button onClick={pauseTimer}>Pause</button>
        )}
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;