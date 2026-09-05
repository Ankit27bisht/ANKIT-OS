import { useState, useCallback, useMemo } from 'react'
import SystemBar from './components/SystemBar'
import Desktop from './components/Desktop'
import Dock from './components/Dock'
import OSWindow, { registerAppContents, type WindowState } from './components/Window'
import Boot from './components/Boot'
import type { AppKey } from './components/icons/OSIcon'
import { appMeta } from './components/icons/OSIcon'
import { contact, navigation } from './content'

import WorkApp from './components/apps/WorkApp'
import SocialApp from './components/apps/SocialApp'
import ContentStudioApp from './components/apps/ContentStudioApp'
import CampaignsApp from './components/apps/CampaignsApp'
import StrategyApp from './components/apps/StrategyApp'
import AnalyticsApp from './components/apps/AnalyticsApp'
import AboutApp from './components/apps/AboutApp'
import RejectedIdeasApp from './components/apps/RejectedIdeasApp'
import ContactApp from './components/apps/ContactApp'

// Register app -> window content
registerAppContents({
  work: <WorkApp />,
  social: <SocialApp />,
  content: <ContentStudioApp />,
  campaigns: <CampaignsApp />,
  strategy: <StrategyApp />,
  analytics: <AnalyticsApp />,
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

// Generating positions that cascade/overlap nicely
function cascade(n: number) {
  const base = { w: 660, h: 520 }
  const x = 110 + (n % 5) * 44
  const y = 60 + (n % 4) * 36
  return { x, y, ...base }
}

let uid = 0

export default function App() {
  const [windows, setWindows] = useState<WindowState[]>([])
  const [stackId, setStackId] = useState(0)

  const openApp = useCallback((app: AppKey) => {
    // If already open, bring to front (activate) rather than duplicate
    setWindows((prev) => {
      const existing = prev.find((w) => w.app === app)
      if (existing) {
        setStackId((s) => s + 1)
        return prev.map((w) =>
          w.id === existing.id
            ? { ...w, min: false, active: true, z: stackId + 1 }
            : { ...w, active: false },
        )
      }
      uid += 1
      const c = cascade(uid)
      const newWin: WindowState = {
        id: `${app}-${uid}`,
        app,
        title: appMeta[app]?.name ?? app,
        ...c,
        min: false,
        active: true,
        z: stackId + 1,
      }
      setStackId((s) => s + 1)
      return [...prev.map((w) => ({ ...w, active: false })), newWin]
    })
  }, [stackId])

  const activate = useCallback((id: string) => {
    setStackId((s) => s + 1)
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, active: true, z: stackId + 1 } : { ...w, active: false })),
    )
  }, [stackId])

  const minimize = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, min: true, active: false } : w)))
  }, [])

  const close = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  // Disable LinkedIn until real URL provided
  const disabled = useCallback((app: AppKey) => {
    if (app === 'linkedin') return !contact.linkedin.enabled
    return false
  }, [])

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