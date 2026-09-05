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
  | 'content'
  | 'campaigns'
  | 'strategy'
  | 'analytics'
  | 'about'
  | 'bin'
  | 'linkedin'
  | 'mail'
  | 'os'

export const appMeta: Record<AppKey, { name: string; icon: JSX.Element }> = {
  work: { name: 'WORK.EXE', icon: <WorkIcon /> },
  content: { name: 'CONTENT_STUDIO', icon: <ContentIcon /> },
  campaigns: { name: 'CAMPAIGNS.DIR', icon: <CampaignsIcon /> },
  strategy: { name: 'STRATEGY.SYS', icon: <StrategyIcon /> },
  analytics: { name: 'ANALYTICS.DAT', icon: <AnalyticsIcon /> },
  about: { name: 'ABOUT_ME.TXT', icon: <AboutIcon /> },
  bin: { name: 'REJECTED_IDEAS', icon: <BinIcon /> },
  linkedin: { name: 'LINKEDIN', icon: <LinkedInIcon /> },
  mail: { name: 'CONTACT', icon: <MailIcon /> },
  os: { name: 'ANKIT.OS', icon: <OSIcon /> },
}

function WorkIcon() {
  const map: Pixel[][] = [
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'b', 'b', 'b', 'b', 'b', 'b', 'w'],
    ['w', 'b', 'w', 'w', 'w', 'w', 'b', 'w'],
    ['w', 'b', 'w', 'a', 'a', 'a', 'b', 'w'],
    ['w', 'b', 'w', 'a', 'a', 'a', 'b', 'w'],
    ['w', 'b', 'w', 'a', 'a', 'a', 'b', 'w'],
    ['w', 'b', 'b', 'b', 'b', 'b', 'b', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
  ]
  return <PixelIcon map={map} colors={{ w: '#8b82b8', b: '#2a2357', a: '#7c5cff' }} size={46} />
}

function ContentIcon() {
  const map: Pixel[][] = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'w', 'a', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'w', 'a', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#5cf2c0', w: '#0f0c1d' }} size={46} />
}

function CampaignsIcon() {
  // a folder
  const map: Pixel[][] = [
    ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'y'],
    ['y', 'b', 'b', 'y', 'y', 'y', 'y', 'y'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'n', 'n', 'n', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ]
  return <PixelIcon map={map} colors={{ y: '#ffc45c', b: '#3a2f6b', a: '#5c3fb0', n: '#0f0c1d' }} size={46} />
}

function StrategyIcon() {
  const map: Pixel[][] = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'a', 'b', 'a', 'a', 'b', 'b', 'b'],
    ['b', 'a', 'b', 'a', 'a', 'b', 'a', 'b'],
    ['b', 'a', 'b', 'b', 'b', 'b', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#ff5cc4' }} size={46} />
}

function AnalyticsIcon() {
  const map: Pixel[][] = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'a', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'a', 'b', 'a', 'b'],
    ['b', 'b', 'b', 'a', 'a', 'b', 'a', 'b'],
    ['b', 'b', 'a', 'b', 'b', 'b', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#4aa8ff', w: '#0f0c1d' }} />
}

function AboutIcon() {
  const map: Pixel[][] = [
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
    ['w', 'a', 'a', 'a', 'a', 'a', 'a', 'w'],
    ['w', 'a', 'b', 'w', 'a', 'a', 'a', 'w'],
    ['w', 'a', 'b', 'b', 'w', 'a', 'a', 'w'],
    ['w', 'a', 'a', 'b', 'b', 'w', 'a', 'w'],
    ['w', 'a', 'a', 'a', 'b', 'b', 'a', 'w'],
    ['w', 'a', 'a', 'a', 'a', 'a', 'a', 'w'],
    ['w', 'w', 'w', 'w', 'w', 'w', 'w', 'w'],
  ]
  return <PixelIcon map={map} colors={{ w: '#8b82b8', a: '#2a2357', b: '#5c5cff' }} size={46} />
}

function BinIcon() {
  const map: Pixel[][] = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'n', 'n', 'a', 'n', 'a', 'b'],
    ['b', 'a', 'n', 'n', 'a', 'n', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'n', 'n', 'a', 'n', 'a', 'b'],
    ['b', 'a', 'n', 'n', 'a', 'n', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#6e659c', n: '#8b82b8' }} size={46} />
}

function LinkedInIcon() {
  const map: Pixel[][] = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'a', 'w', 'w', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'a', 'w', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'w', 'w', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#0a66c2', w: '#0f0c1d' }} size={46} />
}

function MailIcon() {
  const map: Pixel[][] = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'w', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'w', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'a', 'a', 'w', 'a', 'b'],
    ['b', 'a', 'w', 'w', 'w', 'w', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#ff5c78', w: '#0f0c1d' }} size={46} />
}

function OSIcon() {
  const map: Pixel[][] = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'w', 'w', 'a', 'a', 'b'],
    ['b', 'w', 'w', 'w', 'w', 'w', 'w', 'b'],
    ['b', 'w', 'w', 'w', 'w', 'w', 'w', 'b'],
    ['b', 'a', 'a', 'w', 'w', 'a', 'a', 'b'],
    ['b', 'a', 'a', 'a', 'a', 'a', 'a', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
  ]
  return <PixelIcon map={map} colors={{ b: '#1e1840', a: '#7c5cff', w: '#0f0c1d' }} size={46} />
}

export { PixelIcon }
