// Pixel-art avatar rendered as an inline SVG (no external asset needed).

interface Props {
  size?: number
  className?: string
}

type Pixel = string | null

const COLORS: Record<string, string> = {
  s: '#e8cfb0', // skin
  h: '#3a2f1e', // hair
  h2: '#2a2314', // hair shadow
  o: '#20202a', // outline
  t: '#7c5cff', // top
  t2: '#5c3fb0', // top shade
  w: '#0f0c1d', // bg
}

// A small pixel grid (24 wide x 28 tall) roughly: head + shoulders + top.
const MAP: Pixel[][] = [
  'wwwwwwwwwwwwwwwwwwwwwwww'.split(''),
  'wwwwwwwwwwwwwwwwwwwwwwww'.split(''),
  'wwwwwwwhhhhhhhhhhwwwwwww'.split(''),
  'wwwwwwhhhhhhhhhhhhwwwwww'.split(''),
  'wwwwwwhhhhhhhhhhhhwwwwww'.split(''),
  'wwwwwhhhhhhhhhhhhhhwwwww'.split(''),
  'wwwwhhhhhhhhhhhhhhhhwwww'.split(''),
  'wwwwhhhhhsssssshhhhhwwww'.split(''),
  'wwwwhhsssssssssssshhwwww'.split(''),
  'wwwwhhsssssssssssshhwwww'.split(''),
  'wwwwhsssssssssssssschwww'.split(''),
  'wwwwhsssssssssssssschwww'.split(''),
  'wwwwhssssowwssssssshhwww'.split(''),
  'wwwwhssssowwssssssshhwww'.split(''),
  'wwwwhsssssssssssssshhwww'.split(''),
  'wwwwhhsssssssssssshhwwww'.split(''),
  'wwwwohhsssssssssshhohwww'.split(''),
  'wwwwwooooooooooooooowwww'.split(''),
  'wwwwwwwwwwwwwwwwwwwwwwww'.split(''),
  'wwtttttttttttttttttttwww'.split(''),
  'wwtttttttttttttttttttwww'.split(''),
  'wwtttttttttttttttttttwww'.split(''),
  'wwtttttttttttttttttttwww'.split(''),
  'wwtttttttttttttttttttwww'.split(''),
  'wwttt22ttttttttt22tttwww'.split(''),
  'wwwwttttttttttttttwwwwww'.split(''),
  'wwwwwwwwwwwwwwwwwwwwwwww'.split(''),
  'wwwwwwwwwwwwwwwwwwwwwwww'.split(''),
]

export default function Avatar({ size = 120, className }: Props) {
  const h = MAP.length
  const w = MAP[0]?.length ?? h
  return (
    <svg
      width={size}
      height={size * (h / w)}
      viewBox={`0 0 ${w} ${h}`}
      shapeRendering="crispEdges"
      className={className}
      role="img"
      aria-label="Pixel avatar of Ankit"
    >
      {MAP.map((row, y) =>
        row.map((c, x) => (c && COLORS[c] ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={COLORS[c]} /> : null)),
      )}
    </svg>
  )
}
