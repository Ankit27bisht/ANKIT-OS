import type { AppKey } from './icons/OSIcon'
import { appMeta } from './icons/OSIcon'

interface Props {
  // ordered apps to show in the dock
  apps: AppKey[]
  openApp: (app: AppKey) => void
  // set of currently open windows (to show the indicator dot)
  openKeys: Set<AppKey>
  // whether an app is disabled (e.g. LinkedIn until URL added)
  disabled: (app: AppKey) => boolean
  // the currently focused window's app (to highlight the active pill)
  activeApp?: AppKey
}

export default function Dock({ apps, openApp, openKeys, disabled, activeApp }: Props) {
  return (
    <nav className="dock" aria-label="Dock">
      {apps.map((app) => {
        const isDisabled = disabled(app)
        const isOpen = openKeys.has(app)
        const isActive = activeApp === app
        return (
          <div
            className={`dock-item${isDisabled ? ' disabled' : ''}${isOpen ? ' open' : ''}${isActive ? ' active' : ''}`}
            key={app}
            title={appMeta[app].name}
          >
            <button
              className="pill"
              onClick={() => !isDisabled && openApp(app)}
              disabled={isDisabled}
              aria-label={`Open ${appMeta[app].name}`}
              aria-pressed={isOpen}
            >
              {appMeta[app].icon}
            </button>
            {isOpen && <span className={`open-dot${isActive ? ' hot' : ''}`} aria-hidden="true" />}
            <div className={`tip${isDisabled ? ' tip-disabled' : ''}`}>
              {appMeta[app].name}
              {isDisabled && ' · disabled'}
            </div>
          </div>
        )
      })}
    </nav>
  )
}