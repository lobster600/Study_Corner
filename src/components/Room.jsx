import { useGame } from "../context/GameContext";
import styles from "./Room.module.css";

export default function Room({ isBreak, isRunning }) {
    const { ownedItems, level } = useGame();

    // 🐱 cat state system
    let catSprite = "/sprites/cat/cat-idle.png";

    if (isRunning && !isBreak) {
        catSprite = "/sprites/cat/cat-work.png";
    }

    if (isBreak) {
        catSprite = "/sprites/cat/cat-sleep.png";
    }

    return (
        <div className="card">
            <h2>🏡 My Study Room (Level {level})</h2>

            <div className={styles.scene}>
                {/* ROOM */}
                <img
                    src="/sprites/room/room.png"
                    alt="room"
                    className={styles.background}
                    draggable={false}
                />

                {/* LIGHT */}
                <div
                    className={styles.light}
                    style={{
                        opacity: isRunning ? 1 : 0.5,
                        background:
                            isRunning && !isBreak
                                ? "radial-gradient(circle at center, rgba(99,102,241,0.15), transparent 60%)"
                                : isBreak
                                    ? "radial-gradient(circle at center, rgba(52,211,153,0.12), transparent 60%)"
                                    : "transparent",
                    }}
                />

                {/* ITEMS */}
                {ownedItems.map((item, i) => {
                    const cols = 4;
                    const spacing = 90;

                    const row = Math.floor(i / cols);
                    const col = i % cols;

                    return (
                        <img
                            key={i}
                            src={`/sprites/items/${item.name}.png`}
                            alt={item.name}
                            className={styles.item}
                            style={{
                                bottom: 80 + row * spacing,
                                left: 120 + col * spacing,
                            }}
                            draggable={false}
                        />
                    );
                })}

                {/* CAT */}
                <div
                    className={styles.cat}
                    style={{
                        transform:
                            !isRunning && !isBreak
                                ? "translateX(-50%) scale(0.65)" // 👈 35% smaller idle
                                : "translateX(-50%) scale(1)",
                        transformOrigin: "center",
                        transition: "all 0.3s ease",
                    }}
                >
                    <img src={catSprite} alt="cat" draggable={false} />
                </div>
            </div>
        </div>
    );
}