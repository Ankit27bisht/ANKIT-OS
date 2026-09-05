import { workProjects } from '../../content'

export default function WorkApp() {
  return (
    <>
      <div className="app-head">
        <h2>WORK.EXE</h2>
        <div className="sub">// selected work — case studies</div>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span className="ph">● placeholder content</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {workProjects.map((p) => (
          <article className="card" key={p.id} style={{ padding: '0' }}>
            <div style={{ padding: '16px 18px', borderBottom: '1px solid var(--line)' }}>
              <div className="kicker">
                {p.kicker} {p.placeholder && <span style={{ color: 'var(--accent-4)', marginLeft: '6px' }}>[placeholder]</span>}
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: 0 }}>{p.title}</h3>
            </div>
            <div className="pipeline" style={{ padding: '12px' }}>
              {p.stages.map((s) => (
                <div className="stage" key={s.label}>
                  <div className="stage-label">{s.label}</div>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
            <div className="tags" style={{ padding: '0 14px 14px' }}>
              {p.tags.map((t) => (
                <span className="tag hot" key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
