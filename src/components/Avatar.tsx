interface Props {
  size?: number;
  className?: string;
}

export default function Avatar({ size = 300, className = '' }: Props) {
  return (
    <svg
      width={size}
      height={size * 1.55}
      viewBox="0 0 40 62"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="crispEdges"
      role="img"
      aria-label="Pixel avatar of Ankit"
    >
      {/* HAIR */}
      <rect x="13" y="2" width="13" height="2" fill="#111827" />
      <rect x="10" y="4" width="19" height="3" fill="#111827" />
      <rect x="8" y="7" width="4" height="4" fill="#111827" />
      <rect x="10" y="7" width="18" height="4" fill="#111827" />
      <rect x="28" y="8" width="3" height="5" fill="#111827" />
      <rect x="11" y="10" width="4" height="3" fill="#111827" />
      <rect x="26" y="10" width="3" height="3" fill="#111827" />

      {/* EARS */}
      <rect x="9" y="11" width="2" height="5" fill="#d9a886" />
      <rect x="29" y="11" width="2" height="5" fill="#d9a886" />

      {/* FACE */}
      <rect x="11" y="9" width="18" height="11" fill="#d9a886" />
      <rect x="12" y="20" width="16" height="2" fill="#d9a886" />
      <rect x="14" y="22" width="12" height="3" fill="#d9a886" />

      {/* EYEBROWS */}
      <rect x="14" y="13" width="5" height="1" fill="#20202a" />
      <rect x="21" y="13" width="5" height="1" fill="#20202a" />

      {/* EYES */}
      <rect x="15" y="15" width="2" height="2" fill="#20202a" />
      <rect x="23" y="15" width="2" height="2" fill="#20202a" />

      {/* NOSE */}
      <rect x="19" y="16" width="2" height="2" fill="#b77763" />

      {/* MOUTH */}
      <rect x="17" y="19" width="6" height="1" fill="#8f594f" />

      {/* NECK */}
      <rect x="17" y="22" width="6" height="4" fill="#c58f72" />

      {/* SHOULDERS / HOODIE */}
      <rect x="14" y="25" width="12" height="3" fill="#111827" />

      <rect x="12" y="28" width="16" height="3" fill="#111827" />
      <rect x="10" y="31" width="20" height="13" fill="#20283b" />

      <rect x="12" y="31" width="16" height="12" fill="#263044" />
      <rect x="13" y="42" width="14" height="4" fill="#111827" />

      {/* HOODIE SIDE SHADOWS */}
      <rect x="10" y="34" width="2" height="9" fill="#111827" />
      <rect x="28" y="34" width="2" height="9" fill="#111827" />

      {/* HOODIE STRINGS */}
      <rect x="17" y="27" width="1" height="6" fill="#8b7cff" />
      <rect x="22" y="27" width="1" height="6" fill="#8b7cff" />
      <rect x="16" y="32" width="3" height="2" fill="#7c5cff" />
      <rect x="22" y="32" width="3" height="2" fill="#7c5cff" />

      {/* LEFT ARM */}
      <rect x="9" y="30" width="3" height="13" fill="#111827" />
      <rect x="8" y="33" width="3" height="10" fill="#20283b" />
      <rect x="7" y="42" width="4" height="4" fill="#111827" />

      {/* RIGHT ARM */}
      <rect x="28" y="30" width="3" height="13" fill="#111827" />
      <rect x="29" y="33" width="3" height="10" fill="#20283b" />
      <rect x="29" y="42" width="4" height="4" fill="#111827" />

      {/* HANDS */}
      <rect x="7" y="45" width="4" height="3" fill="#c58f72" />
      <rect x="29" y="45" width="4" height="3" fill="#c58f72" />

      {/* HOODIE BOTTOM */}
      <rect x="11" y="45" width="18" height="4" fill="#111827" />

      {/* PANTS */}
      <rect x="13" y="48" width="14" height="7" fill="#111827" />
      <rect x="14" y="48" width="5" height="8" fill="#1a2133" />
      <rect x="21" y="48" width="5" height="8" fill="#1a2133" />

      {/* LEG GAP */}
      <rect x="19" y="54" width="2" height="4" fill="#ffffff" />

      {/* LEFT SHOE */}
      <rect x="11" y="57" width="7" height="3" fill="#d9e0e8" />
      <rect x="10" y="59" width="9" height="2" fill="#d9e0e8" />
      <rect x="11" y="60" width="7" height="1" fill="#b8c3d0" />

      {/* RIGHT SHOE */}
      <rect x="22" y="57" width="7" height="3" fill="#d9e0e8" />
      <rect x="21" y="59" width="9" height="2" fill="#d9e0e8" />
      <rect x="22" y="60" width="7" height="1" fill="#b8c3d0" />

      {/* LEG SHADOWS */}
      <rect x="14" y="53" width="5" height="3" fill="#111827" />
      <rect x="21" y="53" width="5" height="3" fill="#111827" />
    </svg>
  );
}