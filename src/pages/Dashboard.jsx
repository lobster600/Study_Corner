import { useEffect, useRef, useState } from "react";

import Sidebar from "../components/Sidebar";
import PomodoroTimer from "../components/PomodoroTimer";
import TimerPresets from "../components/TimerPresets";
import StatsCards from "../components/StatsCards";
import Room from "../components/Room";
import Shop from "../components/Shop";

import usePomodoro from "../hooks/usePomodoro";
import { useGame } from "../context/GameContext";

const PRESETS = {
  mini: { work: 15, break: 5, longBreak: 15 },
  classic: { work: 25, break: 5, longBreak: 15 },
  "40": { work: 40, break: 10, longBreak: 20 },
  "50": { work: 50, break: 10, longBreak: 20 },
  "52": { work: 52, break: 17, longBreak: 30 },
  "90": { work: 90, break: 30, longBreak: 30 },
};

export default function Dashboard() {
  const [selectedPreset, setSelectedPreset] = useState("classic");
  const [activeTab, setActiveTab] = useState("none");

  const preset = PRESETS[selectedPreset];

  const {
    timeLeft,
    isRunning,
    isBreak,
    completedSessions,
    startTimer,
    pauseTimer,
    resetTimer,
  } = usePomodoro(preset.work, preset.break, preset.longBreak);

  const { addSessionReward } = useGame();
  const lastSessionRef = useRef(0);

  useEffect(() => {
    if (completedSessions > lastSessionRef.current) {
      addSessionReward();
      lastSessionRef.current = completedSessions;
    }
  }, [completedSessions, addSessionReward]);

  return (
    <div className="app">

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="leftPanel">
        <TimerPresets
          selected={selectedPreset}
          onSelect={setSelectedPreset}
        />
      </div>

      <div className="rightPanel">
        <div className="rightContent">

          <div className="timerCard">
            <PomodoroTimer
              timeLeft={timeLeft}
              isRunning={isRunning}
              isBreak={isBreak}
              completedSessions={completedSessions}
              startTimer={startTimer}
              pauseTimer={pauseTimer}
              resetTimer={resetTimer}
              workTime={preset.work * 60}
              breakTime={preset.break * 60}
            />
          </div>

          <div className="roomSection">
            <Room isRunning={isRunning} isBreak={isBreak} />
          </div>

        </div>
      </div>

      {/* OVERLAYS (FIXED: CLICK OUTSIDE TO CLOSE) */}

      {activeTab === "shop" && (
        <div className="overlayPage" onClick={() => setActiveTab("none")}>
          <div onClick={(e) => e.stopPropagation()}>
            <Shop />
          </div>
        </div>
      )}

      {activeTab === "stats" && (
        <div className="overlayPage" onClick={() => setActiveTab("none")}>
          <div onClick={(e) => e.stopPropagation()}>
            <StatsCards />
          </div>
        </div>
      )}

    </div>
  );
}