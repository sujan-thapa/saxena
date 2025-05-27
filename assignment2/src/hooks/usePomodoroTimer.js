import { useState, useEffect } from 'react';

export const usePomodoroTimer = (initialMinutes = 25) => {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('work'); // 'work' or 'break'

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            // Timer completed, switch mode
            const nextMode = mode === 'work' ? 'break' : 'work';
            const nextMinutes = nextMode === 'work' ? initialMinutes : 5;
            setMode(nextMode);
            setMinutes(nextMinutes);
            setSeconds(0);
            setIsActive(false);
            // Play sound or show notification
            new Audio('/notification.mp3').play().catch(e => console.log('Audio error:', e));
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds, mode, initialMinutes]);

  const startTimer = () => setIsActive(true);
  const pauseTimer = () => setIsActive(false);
  const resetTimer = () => {
    setIsActive(false);
    setMinutes(initialMinutes);
    setSeconds(0);
    setMode('work');
  };

  return {
    minutes,
    seconds,
    isActive,
    mode,
    startTimer,
    pauseTimer,
    resetTimer
  };
};