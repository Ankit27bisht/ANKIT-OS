import { useState } from 'react'
import { appMeta, type AppKey } from './icons/OSIcon'
import { intro } from '../content'

const contentStudioItems = [
  {
    label: 'REELS',
    className: 'reels',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m10 8.5 6 3.5-6 3.5v-7Z" /></svg>,
  },
  {
    label: 'SCRIPTS',
    className: 'scripts',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3.5h8l4 4v13H6a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" /><path d="M14 3.5v4h4M8 11.5h8M8 15.5h8M8 19h6" /></svg>,
  },
  {
    label: 'CONTENT CALENDAR',
    className: 'calendar',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="5.5" width="17" height="15" rx="2" /><path d="M8 3.5v4M16 3.5v4M3.5 9.5h17M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" /></svg>,
  },
  {
    label: 'CREATIVE IDEAS',
    className: 'ideas',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 17.5c-.3-1.3-1-2-1.8-3A7 7 0 1 1 16.8 14c-.8 1-1.5 2.2-1.8 3.5H9Z" /><path d="M9.5 20.5h5M10.5 23h3" /></svg>,
  },
]

const welcomeInfoItems = [
  {
    title: 'Experience',
    description: 'My professional journey',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18m-11 0v2h4v-2" /></svg>,
  },
  {
    title: 'Education',
    description: 'My academic background',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5L2 9Z" /><path d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v6" /></svg>,
  },
  {
    title: 'Selected Projects',
    description: 'My work and case studies',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7.5A1.5 1.5 0 0 1 4.5 6H10l2 2h7.5A1.5 1.5 0 0 1 21 9.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-11Z" /><path d="M3.5 11h17" /></svg>,
  },
  {
    title: 'Skills',
    description: 'Tools, platforms and core skills',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 1.8 6.2L20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z" /><path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" /></svg>,
  },
  {
    title: 'More About Me',
    description: 'Values, interests and beyond',
    icon: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>,
  },
]

interface Props {
  icons: AppKey[]
  openApp: (app: AppKey) => void
  openKeys: Set<AppKey>
  activeApp?: AppKey
  disabled: (app: AppKey) => boolean
}

export default function Desktop({ icons, openApp, openKeys, activeApp, disabled }: Props) {
  const workDisabled = disabled('work')
  const [isPlaying, setIsPlaying] = useState(false)

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

        </div>

        <div className="desktop-center">
          <div className="content-studio-window" aria-label="Content Studio">
            <div className="content-studio-titlebar">
              <div className="content-studio-controls" aria-hidden="true">
                <span className="content-studio-dot close" />
                <span className="content-studio-dot min" />
              </div>
              <span className="content-studio-title">CONTENT STUDIO</span>
              <span className="content-studio-close" aria-hidden="true">×</span>
            </div>
            <div className="content-studio-items">
              {contentStudioItems.map((item) => (
                <span className="content-studio-item" key={item.label}>
                  <span className="content-studio-icon-area">
                    <span className={`content-studio-item-icon ${item.className}`}>
                      {item.icon}
                    </span>
                  </span>
                  <span>{item.label}</span>
                </span>
              ))}
            </div>
          </div>

              <div className="strategy-framework-window" aria-label="Strategy Framework">
  <div className="strategy-framework-titlebar">
    <div className="strategy-framework-controls" aria-hidden="true">
      <span className="strategy-framework-dot close" />
      <span className="strategy-framework-dot min" />
      <span className="strategy-framework-dot open" />
    </div>

    <span className="strategy-framework-title">
      STRATEGY FRAMEWORK
    </span>

    <span className="strategy-framework-close" aria-hidden="true">
      ×
    </span>
  </div>

  <div className="strategy-framework-flow">
    <div className="strategy-framework-step">
      <svg className="strategy-framework-icon research" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" /><path d="m16 16 5 5" /></svg>
      <span>RESEARCH</span>
    </div>

    <svg className="strategy-framework-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>

    <div className="strategy-framework-step">
      <svg className="strategy-framework-icon insight" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6m-5 3h4m-6-6.5a7 7 0 1 1 8 0c-.9.7-1.5 1.4-1.7 2.5h-4.6c-.2-1.1-.8-1.8-1.7-2.5Z" /><path d="M12 2V1m8 4 1-1M4 5 3 4" /></svg>
      <span>INSIGHT</span>
    </div>

    <svg className="strategy-framework-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>

    <div className="strategy-framework-step">
      <svg className="strategy-framework-icon strategy" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="m14.8 9.2 5-5" /></svg>
      <span>STRATEGY</span>
    </div>

    <svg className="strategy-framework-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>

    <div className="strategy-framework-step">
      <svg className="strategy-framework-icon execution" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 18-8-8 18-2-8-8-2Z" /><path d="m11 13 5-5" /></svg>
      <span>EXECUTION</span>
    </div>

    <svg className="strategy-framework-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>

    <div className="strategy-framework-step">
      <svg className="strategy-framework-icon results" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 18v-6h4v6m3 0V5h4v13m3 0v-9h3v9" /></svg>
      <span>RESULTS</span>
    </div>
  </div>
</div>
        </div>

        <div className="desktop-player" aria-label="media.SYS">
          <div className="player-bar">
            <div className="window-traffic" aria-hidden="true">
              <span className="traffic-red" />
              <span className="traffic-yellow" />
              <span className="traffic-green" />
            </div>
            <span className="window-title-text">NOW PLAYING</span>
            <span className="window-close" aria-hidden="true">×</span>
          </div>
          <div className="player-body">
            <div className="player-track">
              <span>focus.beats_v3</span>
              <span className="player-equalizer" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </span>
            </div>
            <div className="player-progress" aria-hidden="true" />
            <div className="player-controls">
              <button type="button" disabled aria-label="Previous track">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5v14M19 6l-9 6 9 6V6Z" /></svg>
              </button>
              <button
                type="button"
                className="play"
                aria-label={isPlaying ? 'Pause' : 'Play'}
                aria-pressed={isPlaying}
                onClick={() => setIsPlaying((playing) => !playing)}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  {isPlaying
                    ? <path d="M8 5v14M16 5v14" />
                    : <path d="m8 5 11 7-11 7V5Z" />}
                </svg>
              </button>
              <button type="button" disabled aria-label="Next track">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 5v14M5 6l9 6-9 6V6Z" /></svg>
              </button>
              <svg className="player-volume-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 10v4h4l5 4V6l-5 4H4Z" /><path d="M17 9a5 5 0 0 1 0 6m3-9a9 9 0 0 1 0 12" /></svg>
              <span className="vol">VOL 34%</span>
            </div>
          </div>
        </div>

        <div className="desktop-right">
          <div className="intro">
            <div className="intro-bar">
              <div className="window-traffic" aria-hidden="true">
                <span className="traffic-red" />
                <span className="traffic-yellow" />
                <span className="traffic-green" />
              </div>
              <span className="window-title-text">ABOUT ANKIT</span>
              <span className="window-close" aria-hidden="true">×</span>
            </div>
            <div className="intro-content">
              <div className="intro-main">
                <div className="hello">
                  Hi, I’m<br /><span className="accent">Ankit.</span>
                </div>
                <div className="role">{intro.role}</div>
                <div className="intro-column-divider" aria-hidden="true" />
                <div className="tagline">{intro.tagline}</div>
                <div className="intro-column-divider" aria-hidden="true" />
                <div className="intro-tags" aria-label="Areas of expertise">
                  {intro.tags.map((tag) => <span className="intro-tag" key={tag}>{tag}</span>)}
                </div>
              </div>
              <aside className="intro-information" aria-label="More about Ankit">
                <button className="intro-resume" type="button">Download Resume</button>
                <ul className="intro-information-list">
                  {welcomeInfoItems.map((item) => (
                    <li className="intro-information-item" key={item.title}>
                      <span className="intro-information-icon">{item.icon}</span>
                      <span className="intro-information-copy">
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="intro-quote-divider" aria-hidden="true" />
                <div className="intro-quote">
                  <span>"Consistency today, a bigger tomorrow."</span>
                  <strong>— ANKIT</strong>
                </div>
              </aside>
            </div>
          </div>

        </div>

        <section className="featured-project-window" aria-label="Featured project">
          <div className="featured-project-titlebar">
            <div className="featured-project-controls" aria-hidden="true">
              <span className="featured-project-dot close" />
              <span className="featured-project-dot min" />
              <span className="featured-project-dot open" />
            </div>
            <span className="featured-project-window-title">FEATURED PROJECT</span>
            <span className="featured-project-close" aria-hidden="true">×</span>
          </div>
          <div className="featured-project-content">
            <div className="featured-project-details">
              <span className="featured-project-label">FEATURED PROJECT</span>
              <h2><span>PERSONAL</span><span>PORTFOLIO</span></h2>
              <p>A showcase of my work in social media, content creation, video editing, strategy and digital marketing.</p>
              <span className="featured-project-live"><span aria-hidden="true" />LIVE</span>
              <div className="featured-project-actions">
                <button type="button" onClick={() => !workDisabled && openApp('work')} disabled={workDisabled}>
                  View Project →
                </button>
                <button
                  type="button"
                  className="featured-project-external"
                  aria-label="Open project details in WORK.EXE"
                  title="Open project details in WORK.EXE"
                  onClick={() => !workDisabled && openApp('work')}
                  disabled={workDisabled}
                >
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M11 3h6v6M17 3l-8 8" />
                    <path d="M15 11v5H4V5h5" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="featured-project-paper">
              <span className="featured-project-tape" aria-hidden="true" />
              <svg className="featured-project-rays top" viewBox="0 0 28 24" aria-hidden="true">
                <path d="M4 13 1 10M11 8V3M17 10l3-4M22 14l4-1" />
              </svg>
              <h3>WHAT YOU'LL FIND</h3>
              <ul>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle className="featured-project-icon-fill" cx="17.6" cy="6.6" r="1" />
                  </svg>
                  <span>Social media projects and campaigns</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m4 16.8-.9 4.1 4.1-.9L19.8 7.4a2.8 2.8 0 0 0-4-4L4 16.8Z" />
                    <path d="m13.9 5.3 4.8 4.8" />
                  </svg>
                  <span>Content strategy and creative work</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 7h18v14H3zM3 3h18v4H3z" />
                    <path d="m6 3 3 4m3-4 3 4m3-4 3 4" />
                  </svg>
                  <span>Video Editing &amp; Short-Form Content</span>
                </li>
                <li>
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 21h18M5 18v-6h4v6m3 0V5h4v13m3 0v-9h3v9" />
                  </svg>
                  <span>Brand pages and real results</span>
                </li>
              </ul>
              <svg className="featured-project-rays bottom" viewBox="0 0 28 24" aria-hidden="true">
                <path d="m4 13-3 3m10-2v6m5-8 4 4m2-8 5 1" />
              </svg>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}