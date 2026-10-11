import { useState, useRef, useCallback, useEffect } from 'react'
import type { JSX } from 'react'
import { appMeta, type AppKey } from './icons/OSIcon'

export interface WindowState {
  id: string
  app: AppKey
  title: string
  x: number
  y: number
  w: number
  h: number
  min: boolean
  active: boolean
  z: number
}

interface Props {
  state: WindowState
  onActivate: (id: string) => void
  onMinimize: (id: string) => void
  onClose: (id: string) => void
}

export default function OSWindow({ state, onActivate, onMinimize, onClose }: Props) {
  const [pos, setPos] = useState({ x: state.x, y: state.y })
  const [size, setSize] = useState({ w: state.w, h: state.h })
  const drag = useRef<{ offX: number; offY: number } | null>(null)

  // Clamp window within viewport
  const clamp = useCallback((x: number, y: number) => {
    const X = Math.min(Math.max(x, 0), window.innerWidth - 120)
    const Y = Math.min(Math.max(y, 0), window.innerHeight - 60)
    return { x: X, y: Y }
  }, [])

  // Keep the window inside the viewport when the browser resizes
  useEffect(() => {
    const onResize = () => {
      setPos((p) => {
        const maxX = Math.max(0, window.innerWidth - Math.min(size.w, window.innerWidth))
        const maxY = Math.max(0, window.innerHeight - 90)
        return { x: Math.min(Math.max(p.x, 0), maxX), y: Math.min(Math.max(p.y, 0), maxY) }
      })
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [size.w])

  const startDrag = useCallback(
    (e: React.PointerEvent) => {
      if (e.button !== 0) return
      drag.current = { offX: e.clientX - pos.x, offY: e.clientY - pos.y }
      const move = (ev: PointerEvent) => {
        if (!drag.current) return
        const { x, y } = clamp(ev.clientX - drag.current.offX, ev.clientY - drag.current.offY)
        setPos({ x, y })
      }
      const up = () => {
        drag.current = null
        window.removeEventListener('pointermove', move)
        window.removeEventListener('pointerup', up)
      }
      window.addEventListener('pointermove', move)
      window.addEventListener('pointerup', up)
    },
    [clamp, pos],
  )

  const startResize = useCallback((e: React.PointerEvent) => {
    if (e.button !== 0) return
    e.stopPropagation()
    const startX = e.clientX
    const startY = e.clientY
    const startW = size.w
    const startH = size.h
    const move = (ev: PointerEvent) => {
      const nw = Math.max(340, startW + (ev.clientX - startX))
      const nh = Math.max(220, startH + (ev.clientY - startY))
      setSize({ w: nw, h: nh })
    }
    const up = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', up)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', up)
  }, [size])

  const toggleMaximize = useCallback(() => {
    const maximized = size.w >= window.innerWidth - 40
    setSize(maximized ? { w: state.w, h: state.h } : { w: window.innerWidth - 24, h: window.innerHeight - 90 })
    setPos(maximized ? { x: state.x, y: state.y } : { x: 12, y: 42 })
  }, [size.w, state.h, state.w, state.x, state.y])

  if (state.min) return null

  const AppContent = appContents[state.app]

  return (
    <div
      className={`os-window${state.active ? ' active' : ''}`}
      style={{ left: pos.x, top: pos.y, width: size.w, height: size.h, zIndex: state.z }}
      data-app={state.app}
      onPointerDown={() => onActivate(state.id)}
      role="dialog"
      aria-label={state.title}
    >
      {state.app === 'about' ? (
        <div className="about-titlebar" onPointerDown={startDrag}>
          <div className="about-traffic">
            <button
              type="button"
              className="about-traffic-red"
              title="Close"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation()
                onClose(state.id)
              }}
              aria-label="Close About Ankit window"
            />
            <button
              type="button"
              className="about-traffic-yellow"
              title="Minimize"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation()
                onMinimize(state.id)
              }}
              aria-label="Minimize About Ankit window"
            />
            <button
              type="button"
              className="about-traffic-green"
              title="Maximize or restore"
              onPointerDown={(event) => event.stopPropagation()}
              onClick={(event) => {
                event.stopPropagation()
                toggleMaximize()
              }}
              aria-label="Maximize or restore About Ankit window"
            />
          </div>
          <span className="about-title">ABOUT ANKIT</span>
          <button className="about-close" title="Close" onClick={() => onClose(state.id)} aria-label="Close About Ankit window">×</button>
        </div>
      ) : (
        <div className="window-titlebar" onPointerDown={startDrag}>
          <div className="traffic">
            <button className="t-close" title="Close" onPointerDown={(event) => event.stopPropagation()} onClick={() => onClose(state.id)} aria-label="Close window">x</button>
            <button className="t-min" title="Minimize" onPointerDown={(event) => event.stopPropagation()} onClick={() => onMinimize(state.id)} aria-label="Minimize window">–</button>
            <button className="t-max" title="Maximize or restore" onPointerDown={(event) => event.stopPropagation()} onClick={toggleMaximize} aria-label="Maximize or restore window">+</button>
          </div>
          <span className="window-icon">{appMeta[state.app]?.icon}</span>
          <span className="window-title">{state.title}</span>
          <span className="status-pill">●</span>
        </div>
      )}
      <div className="window-body">{AppContent}</div>
      <div className="resize-handle" onPointerDown={startResize} title="Resize" />
    </div>
  )
}

// Lazy-ish registry mapping app -> content element. Populated by App.tsx via setter.
type AppContentMap = Record<AppKey, JSX.Element>
let appContents: AppContentMap = {} as AppContentMap

export function registerAppContents(contents: AppContentMap) {
  appContents = contents
}
