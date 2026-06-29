import { useGame } from "../context/GameContext";

const items = [
  { id: 1, name: "plant", price: 20 },
  { id: 2, name: "lamp", price: 40 },
  { id: 3, name: "bookshelf", price: 60 },
];

export default function Shop() {
  const { coins, buyItem } = useGame();

  return (
    <div className="card">
      <h2>🛒 Shop</h2>

      <p>🪙 Coins: {coins}</p>

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "10px 0",
            padding: "10px",
            background: "#1e293b",
            borderRadius: "10px",
            alignItems: "center",
          }}
        >
          {/* ITEM NAME */}
          <span style={{ textTransform: "capitalize" }}>
            {item.name}
          </span>

          {/* BUY BUTTON */}
          <button
            onClick={() => buyItem(item)}
            style={{
              padding: "6px 12px",
              borderRadius: "8px",
              border: "none",
              background: "#6366f1",
              color: "white",
              cursor: "pointer",
            }}
          >
            Buy ({item.price})
          </button>
        </div>
      ))}
    </div>
  );
}