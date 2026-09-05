import { strategy } from '../../content'

export default function StrategyApp() {
  return (
    <>
      <div className="app-head">
        <h2>STRATEGY</h2>
        <div className="sub">// how I think</div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>
        {strategy.intro}
      </p>

      <div className="strategy-grid">
        {strategy.sections.map((s) => (
          <article className="strategy-card" key={s.id}>
            <div className="strategy-label">{s.label}</div>
            <p className="strategy-lead">{s.lead}</p>
            {s.lanes && (
              <div className="lane-grid">
                {s.lanes.map((l) => (
                  <div className="lane" key={l.name}>
                    <span className="lane-name">{l.name}</span>
                    <span className="lane-note">{l.note}</span>
                  </div>
                ))}
              </div>
            )}
            {s.notes && (
              <ul className="check-list" style={{ marginBottom: 0 }}>
                {s.notes.map((n, i) => (
                  <li key={i}>
                    <span className="chk">▸</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '18px' }}>
        <span className="ph">● editable thinking — replace with your own frameworks</span>
      </div>
    </>
  )
}