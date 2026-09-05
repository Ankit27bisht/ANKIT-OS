import { useEffect, useState } from 'react'

export default function SystemBar() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })

  return (
    <header className="systembar">
      <div className="sysbar-brand">
        <span className="dot" />
        <span>ANKIT.OS</span>
        <span className="beta">v1.0</span>
      </div>
      <div className="sysbar-sep" />
      <div className="sysbar-status">
        <span className="pulse" />
        <span className="hide-sm">SYSTEM ONLINE</span>
      </div>
      <div className="sysbar-spacer" />
      <div className="sysbar-meta">
        <span className="hide-sm">{date}</span>
        <span
          className="sysbar-clock"
          aria-label="Current time"
        >
          {time}
        </span>
      </div>
    </header>
  )
}
