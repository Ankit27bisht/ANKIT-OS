import { rejectedIdeas } from '../../content'

export default function RejectedIdeasApp() {
  return (
    <>
      <div className="app-head">
        <h2>REJECTED_IDEAS</h2>
        <div className="sub">// recycle bin — the creative process</div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>{rejectedIdeas.intro}</p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span className="ph">● placeholder content</span>
      </div>

      {rejectedIdeas.items.map((item, i) => (
        <div className="bin" key={i}>
          <div className="reason">🗑 {item.title}</div>
          <p>
            <strong style={{ color: 'var(--ink)' }}>Why it was rejected: </strong>
            {item.reason}
          </p>
          <p>
            <strong style={{ color: 'var(--ink)' }}>What it taught me: </strong>
            {item.note}
          </p>
        </div>
      ))}

      <p className="prose" style={{ marginTop: '18px', fontSize: '12.5px' }}>
        Every idea in here did its job — it clarified what worked. Nothing is wasted in the pipeline; it all feeds the next post.
      </p>
    </>
  )
}
