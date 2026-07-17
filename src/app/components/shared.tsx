/* ── Shared decorative components ──────────────────────────────── */

export function StarIcon({
  color = "#eb5503",
  size = 42,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  const mid = size * 0.4705;
  const arm = size * 0.5294;
  const thick = size * 0.0589;
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`} style={{ width: size, height: size }}>
      <div style={{ width: size, height: size, position: "relative", transform: "rotate(90deg)" }}>
        {/* Horizontal arms */}
        <div style={{ position: "absolute", background: color, height: thick, left: 0, top: mid, width: arm }} />
        <div style={{ position: "absolute", background: color, height: thick, right: 0, top: mid, width: arm }} />
        {/* Vertical arms */}
        <div style={{ position: "absolute", background: color, width: thick, left: mid, top: mid, height: arm }} />
        <div style={{ position: "absolute", background: color, width: thick, left: mid, top: 0, height: arm }} />
        {/* Diagonal arms */}
        <div style={{ position: "absolute", left: size * 0.1176, top: size * 0.1176, width: size * 0.416, height: size * 0.416, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, height: thick, width: arm, transform: "rotate(-135deg)" }} />
        </div>
        <div style={{ position: "absolute", left: size * 0.1176, top: size * 0.4705, width: size * 0.416, height: size * 0.416, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, height: thick, width: arm, transform: "rotate(135deg)" }} />
        </div>
        <div style={{ position: "absolute", left: size * 0.4705, top: size * 0.4705, width: size * 0.416, height: size * 0.416, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, height: thick, width: arm, transform: "rotate(45deg)" }} />
        </div>
        <div style={{ position: "absolute", left: size * 0.4705, top: size * 0.1176, width: size * 0.416, height: size * 0.416, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, height: thick, width: arm, transform: "rotate(-45deg)" }} />
        </div>
        {/* Center dot */}
        <div style={{ position: "absolute", right: size * 0.647, top: size * 0.176, width: size * 0.166, height: size * 0.166, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ background: color, borderRadius: "50%", width: thick * 2, height: thick * 2 }} />
        </div>
      </div>
    </div>
  );
}

export function Dot({
  color = "#D9D9D9",
  size = 4,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" className={`shrink-0 ${className}`}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  );
}
