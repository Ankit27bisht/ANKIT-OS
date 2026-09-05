import { appMeta, type AppKey } from './icons/OSIcon'
import Avatar from './Avatar'
import { intro, desktopWidgets, stickyNote, profile } from '../content'

interface Props {
  icons: AppKey[]
  openApp: (app: AppKey) => void
  openKeys: Set<AppKey>
  activeApp?: AppKey
  disabled: (app: AppKey) => boolean
}

export default function Desktop({ icons, openApp, openKeys, activeApp, disabled }: Props) {
  return (
    <div className="desktop">
      <div className="desktop-inner">
        <div className="desktop-left">
          <div className="desktop-icons" aria-label="Application icons">
            {icons.map((app) => {
              const isOpen = openKeys.has(app)
              const isActive = activeApp === app
              const isDisabled = disabled(app)
              return (
                <button
                  className={`desktop-icon${isOpen ? ' open' : ''}${isActive ? ' active' : ''}${isDisabled ? ' disabled' : ''}`}
                  key={app}
                  onClick={() => !isDisabled && openApp(app)}
                  aria-label={`Open ${appMeta[app].name}`}
                  aria-disabled={isDisabled}
                  title={`${appMeta[app].name}${isDisabled ? ' · unavailable' : ''}`}
                >
                  <span className="ic">{appMeta[app].icon}</span>
                  <span className={`label${appMeta[app].name.length > 10 ? ' tight' : ''}`}>{appMeta[app].name}</span>
                  {isOpen && <span className="icon-dot" aria-hidden="true" />}
                </button>
              )
            })}
          </div>

          <div className="artifact-files" aria-label="FILES.SYS">
            <div className="files-bar">
              <span>FILES.SYS</span>
              <span>~ 2</span>
            </div>
            <ul className="files-list">
              <li className="hl">ANKIT.BREAKTHROUGH</li>
              <li className="hl">IDEAS.TXT</li>
              <li>REJECTED.BIN</li>
              <li>MANIFESTO.MD</li>
            </ul>
            <div className="files-foot">
              <span>● {profile.status}</span>
              <span>48%</span>
            </div>
          </div>
        </div>

        <div className="desktop-center">
          <div className="identity-card" aria-hidden="true">
            <div className="identity-tab">PROFILE.DAT</div>
            <div className="identity-frame">
              <Avatar size={100} />
            </div>
            <div className="identity-name">{profile.osName}</div>
            <div className="identity-role">{profile.role.toUpperCase()}</div>
            <div className="identity-online">
              <span className="online-dot" aria-hidden="true" />
              <span>{profile.status}</span>
            </div>
            <div className="identity-status">
              <span>{'>'} workspace: ready</span>
              <span className="cursor" aria-hidden="true">▌</span>
            </div>
          </div>

          <div className="desktop-player" aria-label="media.SYS">
            <div className="player-bar">
              <span>▮▮</span>
              <span>NOW PLAYING</span>
            </div>
            <div className="player-track">
              <span>focus.beats_v3</span>
              <span className="eq">▒▒▒▒▒▒░</span>
            </div>
            <div className="player-progress">
              <span className="fill" />
            </div>
            <div className="player-controls">
              <span>⏮</span>
              <span className="play">▶</span>
              <span>⏭</span>
              <span className="vol">VOL 34%</span>
            </div>
          </div>

          <div className="desktop-signal" aria-label="SIGNAL.LOG">
            <div className="signal-title">
              <span>SIGNAL.LOG</span>
              <span className="live">LIVE</span>
            </div>
            <ul className="signal-list">
              {desktopWidgets.signal.items.slice(0, 3).map((item, i) => (
                <li key={item}>
                  <span className="si">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="sticky-note" aria-label="Sticky note">
            <div className="sticky-tape" aria-hidden="true" />
            <div className="sticky-text">
              {stickyNote.text.split('\n').map((line, i) => (
                <span key={i}>{line}</span>
              ))}
            </div>
            <div className="sticky-note-foot">
              <span className="pin">✦ pinned</span>
              <span>{stickyNote.title}</span>
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