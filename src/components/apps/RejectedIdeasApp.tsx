import { rejectedIdeas } from '../../content'

export default function RejectedIdeasApp() {
  return (
    <>
      <div className="app-head">
        <h2>REJECTED CONCEPTS</h2>
        <div className="sub">// recycle bin — the creative process</div>
      </div>

      <div className="bin-header">
        <span className="bin-title">RECYCLE BIN</span>
        <span className="ph">● concept material</span>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>{rejectedIdeas.intro}</p>

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
        Every idea in here did its job — it clarified what worked. Nothing is wasted; it all feeds the next post.
      </p>
    </>
  )
}