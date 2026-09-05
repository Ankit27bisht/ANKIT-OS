import { campaigns } from '../../content'

const FRAMEWORK: { key: keyof (typeof campaigns)['items'][number]; label: string; wide?: boolean }[] = [
  { key: 'objective', label: 'OBJECTIVE' },
  { key: 'audience', label: 'AUDIENCE' },
  { key: 'insight', label: 'INSIGHT' },
  { key: 'bigIdea', label: 'BIG IDEA' },
  { key: 'execution', label: 'EXECUTION', wide: true },
  { key: 'measurement', label: 'MEASUREMENT', wide: true },
]

export default function CampaignsApp() {
  return (
    <>
      <div className="app-head">
        <h2>CAMPAIGN LAB</h2>
        <div className="sub">// objective to measurement — conceptual blueprints</div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>
        {campaigns.intro}
      </p>

      {campaigns.items.map((c) => (
        <div className="campaign" key={c.id}>
          <div className="camp-head">
            <span className="camp-chip">CONCEPT PROJECT</span>
            <span style={{ color: 'var(--accent)' }}>▍</span>
            {c.title}
            {c.concept && (
              <span className="ph" style={{ marginLeft: 'auto', fontSize: '11px' }}>PLACEHOLDER</span>
            )}
          </div>
          <div className="camp-body">
            {FRAMEWORK.map((f) => (
              <div className="cfg" key={f.key} style={f.wide ? { gridColumn: '1 / -1' } : undefined}>
                <span className="cfg-label">{f.label}</span>
                {String(c[f.key])}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}