import { campaigns } from '../../content'

export default function CampaignsApp() {
  return (
    <>
      <div className="app-head">
        <h2>CAMPAIGNS.DIR</h2>
        <div className="sub">// campaign concepts — objective to execution</div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>
        {campaigns.intro}
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span className="ph">● placeholder content</span>
      </div>

      {campaigns.items.map((c) => (
        <div className="campaign" key={c.id}>
          <div className="camp-head">
            <span style={{ color: 'var(--accent)' }}>▍</span>
            {c.title}
            {c.placeholder && (
              <span className="ph" style={{ marginLeft: 'auto', fontSize: '11px' }}>PLACEHOLDER</span>
            )}
          </div>
          <div className="camp-body">
            <div className="cfg">
              <span className="cfg-label">OBJECTIVE</span>
              {c.objective}
            </div>
            <div className="cfg">
              <span className="cfg-label">AUDIENCE</span>
              {c.audience}
            </div>
            <div className="cfg">
              <span className="cfg-label">BIG IDEA</span>
              {c.bigIdea}
            </div>
            <div className="cfg">
              <span className="cfg-label">CREATIVE DIRECTION</span>
              {c.creativeDirection}
            </div>
            <div className="cfg" style={{ gridColumn: '1 / -1' }}>
              <span className="cfg-label">CONTENT EXECUTION</span>
              {c.execution}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
