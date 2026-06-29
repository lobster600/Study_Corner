import styles from "./StudyCat.module.css";

export default function StudyCat({ isBreak, isRunning }) {
  let state = "idle";

  if (!isRunning) state = "idle";
  else if (isBreak) state = "sleep";
  else state = "work";

  return (
    <div className={styles.cat}>
      <img
        src={`/sprites/cat-${state}.png`}
        className={styles.sprite}
        alt="cat"
      />
    </div>
  );
}