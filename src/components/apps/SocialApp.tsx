import { social } from '../../content'

export default function SocialApp() {
  return (
    <>
      <div className="app-head">
        <h2>SOCIAL MEDIA</h2>
        <div className="sub">// how I think about social — attention, then return</div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>
        {social.intro}
      </p>

      <div className="idea-note" style={{ marginBottom: '18px' }}>
        {social.principles.map((p) => (
          <p key={p} style={{ marginBottom: 6, fontWeight: 600 }}>{p}</p>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span className="ph">● placeholder content</span>
      </div>

      <div className="grid grid-2">
        {social.sections.map((s) => (
          <div className="social-block" key={s.id}>
            <div className="social-label">
              {s.label}
              {s.placeholder && <span className="ph" style={{ fontSize: '10px' }}>PLACEHOLDER</span>}
            </div>
            <div className="social-heading">{s.heading}</div>
            <ul className="check-list" style={{ marginBottom: 0 }}>
              {s.points.map((p, i) => (
                <li key={i}>
                  <span className="chk">▸</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}