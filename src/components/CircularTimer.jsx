export default function CircularTimer({ value, maxValue, time, isBreak }) {
  const percentage = Math.max(0, Math.min(100, (value / maxValue) * 100));

  const color = isBreak ? "#34d399" : "#6366f1";

  return (
    <div
      style={{
        width: "220px",
        height: "220px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        background: "#0b1220",
        boxShadow: `
          0 0 30px ${color}33,
          inset 0 0 25px rgba(0,0,0,.7)
        `,
      }}
    >
      {/* Progress Ring */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: `conic-gradient(
            ${color} ${percentage}%,
            #1e293b ${percentage}% 100%
          )`,
          transition: "background 0.8s linear",
        }}
      />

      {/* Outer Border */}
      <div
        style={{
          position: "absolute",
          inset: "8px",
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.08)",
          zIndex: 1,
        }}
      />

      {/* Center Circle */}
      <div
        style={{
          width: "165px",
          height: "165px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at top, #182338 0%, #0f172a 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          zIndex: 2,
          border: "1px solid rgba(255,255,255,.08)",
          boxShadow: "inset 0 0 20px rgba(0,0,0,.8)",
        }}
      >
        <div
          style={{
            fontSize: "38px",
            fontWeight: "700",
            color: "white",
            letterSpacing: "2px",
            textShadow: `0 0 15px ${color}55`,
          }}
        >
          {time}
        </div>

        <div
          style={{
            marginTop: "10px",
            color,
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "1px",
          }}
        >
          {isBreak ? "BREAK" : "FOCUS"}
        </div>
      </div>
    </div>
  );
}