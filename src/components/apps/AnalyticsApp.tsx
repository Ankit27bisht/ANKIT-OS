import { analytics } from '../../content'

export default function AnalyticsApp() {
  return (
    <>
      <div className="app-head">
        <h2>ANALYTICS</h2>
        <div className="sub">// proof, not noise</div>
      </div>

      <div className="analytics-banner">
        <span className="analytics-tag">{analytics.tagline}</span>
        <p className="prose" style={{ margin: '8px 0 0' }}>{analytics.intro}</p>
      </div>

      <div className="analytics-grid">
        {analytics.sections.map((s) => (
          <div className="analytics-block" key={s.id}>
            <div className="analytics-label">{s.label}</div>
            <p className="analytics-note">{s.note}</p>
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

      <div className="section-label" style={{ marginTop: '22px' }}>{analytics.metricHeadline}</div>
      <table className="os">
        <thead>
          <tr>
            <th>Metric</th>
            <th>What it means</th>
          </tr>
        </thead>
        <tbody>
          {analytics.metrics.map((m) => (
            <tr key={m.metric}>
              <td style={{ color: 'var(--ink)', fontWeight: 700 }}>{m.metric}</td>
              <td>{m.what}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: '18px' }}>
        <span className="ph">● conceptual — no invented numbers</span>
      </div>
      <p className="prose" style={{ marginTop: '12px', fontSize: '12.5px' }}>
        {analytics.note}
      </p>
    </>
  )
}