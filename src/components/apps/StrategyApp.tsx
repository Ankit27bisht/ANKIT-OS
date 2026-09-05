import { strategy } from '../../content'

export default function StrategyApp() {
  return (
    <>
      <div className="app-head">
        <h2>STRATEGY.SYS</h2>
        <div className="sub">// how I think</div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>
        {strategy.intro}
      </p>

      <div className="grid grid-2">
        {strategy.sections.map((s) => (
          <article className="card" key={s.id}>
            <div className="section-label">{s.heading}</div>
            <ul className="check-list">
              {s.body.map((line, i) => (
                <li key={i}>
                  <span className="chk">▸</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </>
  )
}
