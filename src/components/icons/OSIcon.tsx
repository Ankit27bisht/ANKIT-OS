// A set of small pixel-art style SVG icons rendered as components.

import type { JSX } from 'react'

// Reusable pixel "dither" grid renderer — draws a blocky icon from a grid map.
type Pixel = string | null // color key or transparent

function PixelIcon({
  map,
  colors,
  size = 46,
  className,
}: {
  map: Pixel[][]
  colors: Record<string, string>
  size?: number
  className?: string
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${map.length} ${map[0]?.length ?? map.length}`}
      shapeRendering="crispEdges"
      className={className}
      aria-hidden="true"
    >
      {map.map((row, y) =>
        row.map((c, x) =>
          c ? <rect key={`${x}-${y}`} x={x} y={y} width={1} height={1} fill={colors[c]} /> : null,
        ),
      )}
    </svg>
  )
}

export type AppKey =
  | 'work'
  | 'social'
  | 'content'
  | 'about'
  | 'bin'
  | 'linkedin'
  | 'mail'
  | 'os'

export const appMeta: Record<AppKey, { name: string; icon: JSX.Element }> = {
  work: { name: 'PROJECTS', icon: <WorkIcon /> },
  social: { name: 'SOCIAL MEDIA', icon: <SocialIcon /> },
  content: { name: 'CONTENT STUDIO', icon: <ContentIcon /> },
  about: { name: 'ABOUT ANKIT', icon: <AboutIcon /> },
  bin: { name: 'REJECTED CONCEPTS', icon: <BinIcon /> },
  linkedin: { name: 'LINKEDIN', icon: <LinkedInIcon /> },
  mail: { name: 'CONTACT', icon: <MailIcon /> },
  os: { name: 'ANKIT.OS', icon: <OSIcon /> },
}

function SocialIcon() {
  const map: Pixel[][] = [
    [null, 'a', 'a', 'a', 'a', 'a', 'a', null],
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['a', 'a', 'w', 'a', 'a', 'w', 'a', 'a'],
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ['a', 'a', 'w', 'w', 'w', 'w', 'a', 'a'],
    ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    [null, 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    [null, null, 'a', 'a', null, null, null, null],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#ff5cc4', w: '#0f0c1d' }} size={46} />
}

function WorkIcon() {
  const map: Pixel[][] = [
    [null, null, 'w', 'w', 'w', 'w', null, null],
    [null, 'w', 'b', 'b', 'b', 'b', 'w', null],
    ['w', 'b', 'b', 'b', 'b', 'b', 'b', 'w'],
    ['w', 'b', 'a', 'a', 'a', 'a', 'b', 'w'],
    ['w', 'b', 'b', 'a', 'a', 'b', 'b', 'w'],
    ['w', 'b', 'b', 'a', 'a', 'b', 'b', 'w'],
    [null, 'w', 'b', 'b', 'b', 'b', 'w', null],
    [null, null, 'w', 'w', 'w', 'w', null, null],
  ]
  return <PixelIcon map={map} colors={{ w: '#8b82b8', b: '#2a2357', a: '#7c5cff' }} size={46} />
}

function ContentIcon() {
  const map: Pixel[][] = [
    [null, 'b', 'b', 'b', 'b', 'b', 'b', null],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'w', 'a', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'w', 'w', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'w', 'a', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'a', 'a', 'w', 'a', 'b'],
    [null, 'b', 'b', 'b', 'b', 'b', 'b', null],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#5cf2c0', w: '#0f0c1d' }} size={46} />
}

function AboutIcon() {
  const map: Pixel[][] = [
    [null, null, 'a', 'a', 'a', 'a', null, null],
    [null, 'a', 'a', 'a', 'a', 'a', 'a', null],
    [null, 'a', 'a', 'b', 'b', 'a', 'a', null],
    [null, 'a', 'a', 'b', 'b', 'a', 'a', null],
    [null, null, 'a', 'b', 'b', 'a', null, null],
    [null, 'a', 'a', 'a', 'a', 'a', 'a', null],
    ['a', 'a', 'a', 'b', 'b', 'a', 'a', 'a'],
    ['a', 'a', 'b', 'b', 'b', 'b', 'a', 'a'],
  ]
  return <PixelIcon map={map} colors={{ w: '#8b82b8', a: '#2a2357', b: '#5c5cff' }} size={46} />
}

function BinIcon() {
  const map: Pixel[][] = [
    [null, null, 'b', 'a', 'a', 'b', null, null],
    [null, 'b', 'a', 'a', 'a', 'a', 'b', null],
    [null, null, 'b', 'b', 'b', 'b', null, null],
    [null, 'a', 'a', 'a', 'a', 'a', 'a', null],
    [null, 'a', 'n', 'a', 'a', 'n', 'a', null],
    [null, 'a', 'n', 'a', 'a', 'n', 'a', null],
    [null, 'a', 'n', 'a', 'a', 'n', 'a', null],
    [null, null, 'a', 'a', 'a', 'a', null, null],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#6e659c', n: '#8b82b8' }} size={46} />
}

function LinkedInIcon() {
  const map: Pixel[][] = [
    [null, null, null, null, null, null, null, null],
    [null, 'a', 'a', 'w', 'a', 'w', 'w', 'a'],
    [null, 'a', 'a', 'w', 'a', 'w', 'w', 'a'],
    [null, 'a', 'a', 'w', 'a', 'w', 'a', 'w'],
    [null, 'a', 'a', 'w', 'a', 'w', 'w', 'a'],
    [null, 'a', 'a', 'w', 'a', 'w', 'w', 'a'],
    [null, 'a', 'a', 'w', 'w', 'w', 'w', 'a'],
    [null, null, null, null, null, null, null, null],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#0a66c2', w: '#0f0c1d' }} size={46} />
}

function MailIcon() {
  const map: Pixel[][] = [
    [null, 'b', 'b', 'b', 'b', 'b', 'b', null],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'w', 'a', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'a', 'w', 'w', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    [null, 'b', 'b', 'b', 'b', 'b', 'b', null],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#ff5c78', w: '#0f0c1d' }} size={46} />
}

function OSIcon() {
  const map: Pixel[][] = [
    [null, 'b', 'b', 'b', 'b', 'b', 'b', null],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'w', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'a', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'a', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'w', 'w', 'a', 'b'],
    [null, 'a', 'a', 'a', 'a', 'a', 'a', null],
    [null, null, 'b', 'b', 'b', 'b', null, null],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#7c5cff', w: '#0f0c1d' }} size={46} />
}

export { PixelIcon }
