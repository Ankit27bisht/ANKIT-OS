import { appMeta, type AppKey } from './icons/OSIcon'
import Avatar from './Avatar'
import { intro, desktopWidgets } from '../content'

interface Props {
  icons: AppKey[]
  openApp: (app: AppKey) => void
  openKeys: Set<AppKey>
  activeApp?: AppKey
}

export default function Desktop({ icons, openApp, openKeys, activeApp }: Props) {
  const firstName = intro.name.split(' ').slice(-1)[0].replace('.', '').toUpperCase()
  const roleUpper = intro.role.toUpperCase()

  return (
    <div className="desktop">
      <div className="desktop-inner">
        <div className="desktop-icons" aria-label="Application icons">
          {icons.map((app) => {
            const isOpen = openKeys.has(app)
            const isActive = activeApp === app
            return (
              <button
                className={`desktop-icon${isOpen ? ' open' : ''}${isActive ? ' active' : ''}`}
                key={app}
                onClick={() => openApp(app)}
                aria-label={`Open ${appMeta[app].name}`}
                title={appMeta[app].name}
              >
                <span className="ic">{appMeta[app].icon}</span>
                <span className={`label${appMeta[app].name.length > 10 ? ' tight' : ''}`}>{appMeta[app].name}</span>
                {isOpen && <span className="icon-dot" aria-hidden="true" />}
              </button>
            )
          })}
        </div>

        <div className="desktop-center" aria-hidden="true">
          <div className="identity-card">
            <div className="identity-frame">
              <Avatar size={104} />
            </div>
            <div className="identity-name">{firstName}</div>
            <div className="identity-role">{roleUpper}</div>
            <div className="identity-status">
              <span>{'>'} workspace: ready</span>
              <span className="cursor" aria-hidden="true">▌</span>
            </div>
          </div>
        </div>

        <div className="desktop-right">
          <div className="intro">
            <div className="intro-bar">
              <div className="intro-dots">
                <span className="dot-close" />
                <span className="dot-min" />
                <span className="dot-max" />
              </div>
              <span>WELCOME.WND</span>
              <span className="intro-bar-note">readme</span>
            </div>
            <div className="intro-content">
              <div className="hello">
                {intro.name.split(' ')[0]} <span className="accent">{intro.name.split(' ').slice(1).join(' ')}</span>
              </div>
              <div className="role">{intro.role}</div>
              <div className="tagline">{intro.tagline}</div>
              <div className="sys-line">{'>'} system.status: online | modules: loaded</div>
              <button
                className="explore"
                onClick={() => openApp('work')}
              >
                <span>{intro.exploreLabel}</span>
                <span aria-hidden="true">▸</span>
              </button>
            </div>
          </div>

          <div className="desktop-widgets" aria-label="Desktop widgets">
            <div className="widget now-widget">
              <div className="widget-bar">
                <span className="widget-dot" aria-hidden="true" />
                {desktopWidgets.now.title}
              </div>
              <div className="widget-label">{desktopWidgets.now.label}</div>
              <div className="widget-text">{desktopWidgets.now.text}</div>
            </div>

            <div className="widget signal-widget">
              <div className="widget-bar">
                <span className="widget-dot" aria-hidden="true" />
                {desktopWidgets.signal.title}
              </div>
              <div className="widget-text">{desktopWidgets.signal.text}</div>
            </div>

            <div className="widget status-widget">
              <div className="widget-bar">
                <span className="widget-dot" aria-hidden="true" />
                {desktopWidgets.status.title}
              </div>
              <div className="status-rows">
                {desktopWidgets.status.rows.map((r) => (
                  <div className="status-row" key={r.label}>
                    <span className="status-key">{r.label}</span>
                    <span className="status-value">{r.state}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}