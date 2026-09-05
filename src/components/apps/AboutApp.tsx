import { about } from '../../content'
import Avatar from '../Avatar'
import { contact } from '../../content'

export default function AboutApp() {
  return (
    <>
      <div className="app-head">
        <h2>ABOUT_ME.TXT</h2>
        <div className="sub">// the person behind the OS</div>
      </div>

      <div className="avatar-wrap">
        <Avatar className="avatar" size={110} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '24px', color: 'var(--ink)' }}>{about.name}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-3)' }}>{about.role}</div>
        </div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>{about.intro}</p>

      <div className="section-label">Experience</div>
      {about.experience.map((exp, i) => (
        <div className="card" key={i} style={{ marginBottom: '10px' }}>
          <h3>{exp.role} <span style={{ color: 'var(--ink-dim)', fontWeight: 500 }}>· {exp.org}</span></h3>
          <p style={{ fontSize: '12px', marginBottom: '6px' }}>{exp.period}</p>
          <p>{exp.note}</p>
        </div>
      ))}

      <div className="section-label" style={{ marginTop: '20px' }}>Skills</div>
      <div className="tags" style={{ marginTop: '6px' }}>
        {about.skills.map((s) => (
          <span className="tag hot" key={s}>{s}</span>
        ))}
      </div>

      <div className="section-label" style={{ marginTop: '24px' }}>What I do</div>
      <p className="prose">{about.whatIDo}</p>

      <div className="section-label" style={{ marginTop: '24px' }}>Contact</div>
      <div className="idea-note">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="ph">● editable placeholder</span>
        </div>
        <p style={{ marginTop: '8px' }}>
          Email: <a href={`mailto:${contact.email}`} style={{ color: 'var(--accent)' }}>{contact.emailDisplay}</a>
        </p>
        <p style={{ fontSize: '12.5px', color: 'var(--ink-faint)', marginTop: '6px' }}>
          {about.emailNote}
        </p>
      </div>
    </>
  )
}
