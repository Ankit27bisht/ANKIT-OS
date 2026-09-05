import { analytics } from '../../content'

export default function AnalyticsApp() {
  return (
    <>
      <div className="app-head">
        <h2>ANALYTICS.DAT</h2>
        <div className="sub">// what I measure & why</div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>
        {analytics.intro}
      </p>

      <p className="idea-note" style={{ marginBottom: '18px' }}>
        {analytics.startingWith}
      </p>

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
