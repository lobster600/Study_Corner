import styles from "./PomodoroTimer.module.css";

export default function TimerControls({
  isRunning,
  onStart,
  onPause,
  onReset,
}) {
  return (
    <div className={styles.controls}>
      {isRunning ? (
        <button className={styles.button} onClick={onPause}>
          Pause
        </button>
      ) : (
        <button className={styles.button} onClick={onStart}>
          Start
        </button>
      )}

      <button className={styles.button} onClick={onReset}>
        Reset
      </button>
    </div>
  );
}