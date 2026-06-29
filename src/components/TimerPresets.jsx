const presets = [
  {
    id: "mini",
    name: "⚡ Mini Focus",
    work: 15,
    break: 5,
    description:
      "Beat procrastination with short bursts of focused work.",
  },
  {
    id: "classic",
    name: "🍅 Classic Pomodoro",
    work: 25,
    break: 5,
    description:
      "The traditional Pomodoro method. Great for everyday studying.",
  },
  {
    id: "40",
    name: "✍️ 40 / 10",
    work: 40,
    break: 10,
    description:
      "Perfect for essays, coding, and intense revision sessions.",
  },
  {
    id: "50",
    name: "🎓 50 / 10",
    work: 50,
    break: 10,
    description:
      "Excellent for university lectures and staying in the zone.",
  },
  {
    id: "52",
    name: "🔥 Deep Work (52 / 17)",
    work: 52,
    break: 17,
    description:
      "A research-backed balance between deep focus and recovery.",
  },
  {
    id: "90",
    name: "🌙 Ultradian Rhythm",
    work: 90,
    break: 30,
    description:
      "Designed around the brain's natural focus cycle for maximum flow.",
  },
];

export default function TimerPresets({ selected, onSelect }) {
  return (
    <div className="card">
      <h2 style={{ marginBottom: 16 }}>🎯 Choose Your Focus Mode</h2>

      <div
        style={{
          display: "grid",
          gap: "14px",
        }}
      >
        {presets.map((preset) => {
          const active = preset.id === selected;

          return (
            <div
              key={preset.id}
              onClick={() => onSelect(preset.id)}
              style={{
                cursor: "pointer",
                padding: "18px",
                borderRadius: "16px",

                background: active
                  ? "linear-gradient(135deg,#6366f1,#7c3aed)"
                  : "#172033",

                border: active
                  ? "2px solid #8b5cf6"
                  : "2px solid rgba(255,255,255,0.08)",

                transition: "all .25s ease",

                boxShadow: active
                  ? "0 0 25px rgba(99,102,241,.45)"
                  : "0 6px 15px rgba(0,0,0,.25)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: "white",
                  }}
                >
                  {preset.name}
                </h3>

                <span
                  style={{
                    background: "rgba(255,255,255,.15)",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    fontSize: 13,
                  }}
                >
                  {preset.work}/{preset.break}
                </span>
              </div>

              <p
                style={{
                  marginTop: 12,
                  opacity: 0.85,
                  lineHeight: 1.5,
                  fontSize: 14,
                }}
              >
                {preset.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}