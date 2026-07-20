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
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 42 42"
      fill="none"
      className={`shrink-0 ${className}`}
    >
      <rect y="19.7652" width="22.2353" height="2.47059" fill={color} />
      <rect x="42" y="22.2353" width="22.2353" height="2.47059" transform="rotate(-180 42 22.2353)" fill={color} />
      <rect x="22.2344" y="19.7652" width="22.2353" height="2.47059" transform="rotate(90 22.2344 19.7652)" fill={color} />
      <rect x="19.7656" y="22.2353" width="22.2353" height="2.47059" transform="rotate(-90 19.7656 22.2353)" fill={color} />
      <rect x="20.6641" y="22.4111" width="22.2353" height="2.47059" transform="rotate(-135 20.6641 22.4111)" fill={color} />
      <rect x="27.1777" y="10.9062" width="4.94118" height="4.94118" rx="2.47059" transform="rotate(-45 27.1777 10.9062)" fill={color} />
      <rect x="21.5117" y="19.7652" width="22.2353" height="2.47059" transform="rotate(45 21.5117 19.7652)" fill={color} />
      <rect x="22.4121" y="21.5124" width="22.2353" height="2.47059" transform="rotate(135 22.4121 21.5124)" fill={color} />
    </svg>
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
