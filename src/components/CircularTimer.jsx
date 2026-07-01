export default function CircularTimer({ value, maxValue, time, isBreak }) {
  const safeMax = Number.isFinite(maxValue) && maxValue > 0 ? maxValue : 1;
  const safeValue = Number.isFinite(value) ? value : 0;

  const percentage = Math.min(
    100,
    Math.max(0, (safeValue / safeMax) * 100)
  );

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
          0 0 35px ${color}55,
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
          transition: "background 0.3s linear",
          filter: "drop-shadow(0 0 8px ${color})",
        }}
      />

      {/* Outer Border */}
      <div
        style={{
          position: "absolute",
          inset: "8px",
          borderRadius: "50%",
          border: `2px solid ${color}33`,
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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