import { contentStudio } from '../../content'

export default function ContentStudioApp() {
  return (
    <>
      <div className="app-head">
        <h2>CONTENT_STUDIO</h2>
        <div className="sub">// how I think about social content</div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>
        {contentStudio.intro}
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span className="ph">● placeholder content</span>
      </div>

      <div className="grid grid-2">
        {contentStudio.slots.map((slot) => (
          <div className="content-slot" key={slot.id}>
            <div className="slot-label">
              {slot.label}
              {slot.placeholder && <span className="ph" style={{ fontSize: '10px' }}>PLACEHOLDER</span>}
            </div>
            <ul className="check-list" style={{ marginBottom: 0 }}>
              {slot.items.map((item, i) => (
                <li key={i}>
                  <span className="chk">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
