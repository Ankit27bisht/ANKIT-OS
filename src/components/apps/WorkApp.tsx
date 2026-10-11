import { projects } from '../../content'

export default function WorkApp() {
  return (
    <>
      <div className="app-head">
        <h2>WORK.EXE</h2>
        <div className="sub">// case studies — structured editable project slots</div>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span className="ph">● EDITABLE PLACEHOLDER — replace in src/content.ts → projects</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {projects.map((p) => (
          <article className="card project" key={p.id} style={{ padding: '0' }}>
            <div className="project-head">
              <div className="project-kicker">
                <span>{p.slot}</span>
                {p.placeholder && <span className="ph" style={{ fontSize: '10px' }}>EDITABLE PLACEHOLDER</span>}
              </div>
              <h3>{p.name}</h3>
              <div className="project-meta">
                <span className="pm">{p.category}</span>
                <span className="pm">{p.year}</span>
                <span className="pm">role: {p.role}</span>
                <span className="pm">type: {p.type}</span>
              </div>
            </div>

            <div className="project-overview">
              <div className="project-section-label">OVERVIEW</div>
              <p>{p.overview}</p>
            </div>

            <div className="pipeline" style={{ padding: '0 12px 12px' }}>
              {p.stages.map((s) => (
                <div className="stage" key={s.label}>
                  <div className="stage-label">{s.label}</div>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>

            <div className="project-visuals">
              <div className="project-section-label">VISUALS</div>
              <div className="visuals-box">
                <span className="visuals-hint">▣ {p.visuals}</span>
              </div>
            </div>

            <div className="tags" style={{ padding: '0 14px 14px' }}>
              {p.tags.map((t, index) => (
                <span className="tag hot" key={`${t}-${index}`}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  )
}