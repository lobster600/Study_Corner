import CircularTimer from "./CircularTimer";
import TimerControls from "./TimerControls";
import SessionInfo from "./SessionInfo";
import { formatTime } from "../utils/formatTime";

const WORK_TIME = 25 * 60;
const BREAK_TIME = 5 * 60;

export default function PomodoroTimer({
  timeLeft,
  isRunning,
  isBreak,
  completedSessions,
  startTimer,
  pauseTimer,
  resetTimer,
}) {
  const maxValue = isBreak ? BREAK_TIME : WORK_TIME;

  return (
    <section className="card">
      <SessionInfo
        completedSessions={completedSessions}
        isBreak={isBreak}
      />

      <CircularTimer
        value={timeLeft}
        maxValue={maxValue}
        time={formatTime(timeLeft)}
        isBreak={isBreak}
      />

      <TimerControls
        isRunning={isRunning}
        onStart={startTimer}
        onPause={pauseTimer}
        onReset={resetTimer}
      />
    </section>
  );
}