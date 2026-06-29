import { useGame } from "../context/GameContext";

export default function StatsCards() {
  const { xp, coins, level } = useGame();

  return (
    <div className="card">
      <h2>Stats 📊</h2>

      <p>⭐ Level: {level}</p>
      <p>✨ XP: {xp}</p>
      <p>🪙 Coins: {coins}</p>
    </div>
  );
}