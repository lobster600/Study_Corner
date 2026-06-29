import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/reset.css";
import "./styles/globals.css";
import "./styles/variables.css";

import App from "./App.jsx";
import { GameProvider } from "./context/GameContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </StrictMode>
);