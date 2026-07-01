import CircularTimer from "./CircularTimer";
import TimerControls from "./TimerControls";
import SessionInfo from "./SessionInfo";
import { formatTime } from "../utils/formatTime";

export default function PomodoroTimer({
  timeLeft,
  isRunning,
  isBreak,
  completedSessions,
  startTimer,
  pauseTimer,
  resetTimer,
  workTime,
  breakTime,
}) {
  const maxValue = isBreak ? breakTime : workTime;

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