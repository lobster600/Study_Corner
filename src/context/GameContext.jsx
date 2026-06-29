import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);
  const [ownedItems, setOwnedItems] = useState([]);

  // 🎯 MAIN XP SYSTEM
  const addXP = (amount) => {
    setXp((prevXP) => {
      const newXP = prevXP + amount;

      setLevel((currentLevel) => {
        const requiredXP = currentLevel * 100;

        if (newXP >= requiredXP) {
          setCoins((c) => c + 25); // level up reward
          return currentLevel + 1;
        }

        return currentLevel;
      });

      return newXP;
    });

    // 🪙 passive reward
    setCoins((prevCoins) => prevCoins + Math.floor(amount * 0.5));
  };

  // ⏱ session reward
  const addSessionReward = () => {
    addXP(10);
  };

  // 🛒 shop system
  const buyItem = (item) => {
    setCoins((prevCoins) => {
      if (prevCoins < item.price) return prevCoins;

      setOwnedItems((prev) => [...prev, item]);
      return prevCoins - item.price;
    });
  };

  return (
    <GameContext.Provider
      value={{
        xp,
        coins,
        level,
        ownedItems,

        addXP,
        addSessionReward,
        buyItem,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}