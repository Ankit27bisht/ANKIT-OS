import { useState, useCallback, useMemo, useRef } from 'react'
import SystemBar from './components/SystemBar'
import Desktop from './components/Desktop'
import Dock from './components/Dock'
import OSWindow, { registerAppContents, type WindowState } from './components/Window'
import Boot from './components/Boot'
import type { AppKey } from './components/icons/OSIcon'
import { appMeta } from './components/icons/OSIcon'
import { navigation } from './content'

import WorkApp from './components/apps/WorkApp'
import SocialApp from './components/apps/SocialApp'
import ContentStudioApp from './components/apps/ContentStudioApp'
import AboutApp from './components/apps/AboutApp'
import RejectedIdeasApp from './components/apps/RejectedIdeasApp'
import ContactApp from './components/apps/ContactApp'

// Register app -> window content
registerAppContents({
  work: <WorkApp />,
  social: <SocialApp />,
  content: <ContentStudioApp />,
  about: <AboutApp />,
  bin: <RejectedIdeasApp />,
  linkedin: <div className="prose">
    <div className="app-head"><h2>LINKEDIN</h2></div>
    <div className="idea-note">
      <span className="ph">● unavailable — add your LinkedIn URL in src/content.ts → contact.linkedin</span>
      <p style={{ marginTop: '10px', fontSize: '13px' }}>
        This app stays disabled until a real profile URL is configured. Once it is, refresh and it opens normally.
      </p>
    </div>
  </div>,
  mail: <ContactApp />,
  os: <div className="prose">
    <div className="app-head"><h2>ABOUT ANKIT</h2></div>
    <p>Open <strong>ABOUT ANKIT</strong> from the desktop or dock to read who&apos;s behind this OS.</p>
  </div>,
})

function windowLayout(app: AppKey, n: number) {
  const width = window.innerWidth
  const left = Math.max(120, Math.min(180, width * 0.11))
  const rightReserve = Math.max(330, Math.min(380, width * 0.24))
  const gap = 20
  const contentWidth = Math.max(760, width - left - rightReserve - gap * 2)
  const topWidth = Math.min(760, Math.floor((contentWidth - gap) / 2))
  const bottomWidth = Math.min(560, Math.floor((contentWidth - gap * 2) / 3))
  const topY = 58
  const topHeight = 290
  const bottomY = topY + topHeight + 20

  const layouts: Partial<Record<AppKey, { x: number; y: number; w: number; h: number }>> = {
    about: { x: left, y: topY, w: topWidth, h: topHeight },
    work: { x: left + topWidth + gap, y: topY, w: topWidth, h: topHeight },
    social: { x: left, y: bottomY, w: bottomWidth, h: 250 },
    content: { x: left + bottomWidth + gap, y: bottomY, w: bottomWidth, h: 250 },
    linkedin: { x: left + (bottomWidth + gap) * 2, y: bottomY, w: bottomWidth, h: 250 },
  }

  return layouts[app] ?? {
    x: 110 + (n % 3) * 44,
    y: 60 + (n % 3) * 36,
    w: 660,
    h: 520,
  }
}

let uid = 0

export default function App() {
  const [windows, setWindows] = useState<WindowState[]>([])
  const stackId = useRef(0)

  const openApp = useCallback((app: AppKey) => {
    const nextZ = ++stackId.current
    // If already open, bring to front (activate) rather than duplicate
    setWindows((prev) => {
      const existing = prev.find((w) => w.app === app)
      if (existing) {
        return prev.map((w) =>
          w.id === existing.id
            ? { ...w, min: false, active: true, z: nextZ }
            : { ...w, active: false },
        )
      }
      uid += 1
      const c = windowLayout(app, uid)
      const newWin: WindowState = {
        id: `${app}-${uid}`,
        app,
        title: appMeta[app]?.name ?? app,
        ...c,
        min: false,
        active: true,
        z: nextZ,
      }
      return [...prev.map((w) => ({ ...w, active: false })), newWin]
    })
  }, [])

  const activate = useCallback((id: string) => {
    const nextZ = ++stackId.current
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, active: true, z: nextZ } : { ...w, active: false })),
    )
  }, [])

  const minimize = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, min: true, active: false } : w)))
  }, [])

  const close = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const disabled = useCallback((_app: AppKey) => false, [])

  // Send window state updates (clamp on window resize)
  const openKeys = useMemo(
    () => new Set(windows.filter((w) => !w.min).map((w) => w.app)),
    [windows],
  )

  const activeApp = useMemo(
    () => windows.find((w) => w.active && !w.min)?.app,
    [windows],
  )

  const sorted = useMemo(
    () => [...windows].sort((a, b) => a.z - b.z),
    [windows],
  )

  return (
    <div className="shell">
      <Boot />
      <SystemBar />
      <div className="window-layer">
        {sorted.map((w) => (
          <OSWindow
            key={w.id}
            state={w}
            onActivate={activate}
            onMinimize={minimize}
            onClose={close}
          />
        ))}
      </div>
      <Desktop icons={navigation.desktop} openApp={openApp} openKeys={openKeys} activeApp={activeApp} disabled={disabled} />
      <Dock apps={navigation.dock} openApp={openApp} openKeys={openKeys} disabled={disabled} activeApp={activeApp} />
    </div>
  )
}