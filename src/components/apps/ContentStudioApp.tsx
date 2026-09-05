import { contentStudio } from '../../content'

export default function ContentStudioApp() {
  return (
    <>
      <div className="app-head">
        <h2>CONTENT STUDIO</h2>
        <div className="sub">// a workspace for content ideas and systems</div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>
        {contentStudio.intro}
      </p>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span className="ph">● concept / placeholder content</span>
      </div>

      <div className="grid grid-2">
        {contentStudio.slots.map((slot) => (
          <div className="content-slot" key={slot.id}>
            <div className="slot-label">
              {slot.label}
              {slot.concept && <span className="ph" style={{ fontSize: '10px' }}>CONCEPT</span>}
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