import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [xp, setXp] = useState(0);
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);
  const [ownedItems, setOwnedItems] = useState([]);

  // 🎯 XP SYSTEM
  const addXP = (amount) => {
    setXp((prevXP) => {
      const newXP = prevXP + amount;

      setLevel((currentLevel) => {
        const requiredXP = currentLevel * 100;

        if (newXP >= requiredXP) {
          setCoins((c) => c + 25);
          return currentLevel + 1;
        }

        return currentLevel;
      });

      return newXP;
    });

    setCoins((prevCoins) => prevCoins + Math.floor(amount * 0.5));
  };

  const addSessionReward = () => {
    addXP(10);
  };

  // 🛒 FIXED SHOP SYSTEM (SAFE + NO DOUBLE CHARGE)
  const buyItem = (item) => {
    setOwnedItems((prevOwned) => {
      // already owned → do nothing
      if (prevOwned.some((i) => i.id === item.id)) {
        return prevOwned;
      }

      // not enough coins → do nothing
      if (coins < item.price) {
        return prevOwned;
      }

      // deduct coins safely
      setCoins((prevCoins) => prevCoins - item.price);

      // add item once
      return [
        ...prevOwned,
        item,
      ];
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