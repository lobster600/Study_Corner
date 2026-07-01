import { useEffect, useRef, useState } from "react";

export default function usePomodoro(
  workMinutes = 25,
  breakMinutes = 5,
  longBreakMinutes = 15
) {
  const WORK_TIME = workMinutes * 60;
  const BREAK_TIME = breakMinutes * 60;
  const LONG_BREAK = longBreakMinutes * 60;

  const [timeLeft, setTimeLeft] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  const sessionRef = useRef(0);
  const isBreakRef = useRef(false);

  // sync break state
  useEffect(() => {
    isBreakRef.current = isBreak;
  }, [isBreak]);

  // 🔥 CRITICAL FIX: reset timer when preset changes
  useEffect(() => {
    setTimeLeft(WORK_TIME);
    setIsBreak(false);
    setIsRunning(false);
  }, [WORK_TIME, BREAK_TIME, LONG_BREAK]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev > 1) return prev - 1;

        // BREAK FINISHED
        if (isBreakRef.current) {
          setIsBreak(false);
          return WORK_TIME;
        }

        // WORK FINISHED
        const newSession = sessionRef.current + 1;
        sessionRef.current = newSession;

        setCompletedSessions(newSession);

        const longBreak = newSession % 4 === 0;

        setIsBreak(true);

        return longBreak ? LONG_BREAK : BREAK_TIME;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, WORK_TIME, BREAK_TIME, LONG_BREAK]);

  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(WORK_TIME);
    setCompletedSessions(0);
    sessionRef.current = 0;
  };

  return {
    timeLeft,
    isRunning,
    isBreak,
    completedSessions,
    startTimer,
    pauseTimer,
    resetTimer,
  };
}