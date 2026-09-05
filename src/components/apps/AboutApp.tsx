import { useState } from 'react'
import { profile } from '../../content'
import { contact } from '../../content'
import Avatar from '../Avatar'

export default function AboutApp() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email)
      setCopied(true)
    } catch {
      setCopied(false)
    }
    window.setTimeout(() => setCopied(false), 1600)
  }

  return (
    <>
      <div className="app-head">
        <h2>ABOUT ANKIT</h2>
        <div className="sub">// the person behind the OS</div>
      </div>

      <div className="avatar-wrap">
        <Avatar className="avatar" size={104} />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-pixel)', fontSize: '24px', color: 'var(--ink)' }}>{profile.name}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--accent-3)' }}>{profile.role}</div>
        </div>
      </div>

      <p className="prose" style={{ marginBottom: '18px' }}>{profile.bio}</p>

      <div className="section-label">Experience</div>
      {profile.experience.map((exp, i) => (
        <div className="card" key={i} style={{ marginBottom: '10px' }}>
          <div className="ph" style={{ marginBottom: '8px', display: 'inline-flex' }}>
            ● editable placeholder
          </div>
          <h3>{exp.role} <span style={{ color: 'var(--ink-dim)', fontWeight: 500 }}>· {exp.org}</span></h3>
          <p style={{ fontSize: '12px', marginBottom: '6px' }}>{exp.period}</p>
          <p>{exp.note}</p>
        </div>
      ))}

      <div className="section-label" style={{ marginTop: '20px' }}>Skills</div>
      <div className="tags" style={{ marginTop: '6px' }}>
        {profile.skills.map((s) => (
          <span className="tag hot" key={s}>{s}</span>
        ))}
      </div>

      <div className="section-label" style={{ marginTop: '24px' }}>Contact</div>
      <div className="idea-note">
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
          <span className="ph">● editable placeholder</span>
        </div>
        <p style={{ marginTop: '8px' }}>
          Email: <code style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>{contact.emailDisplay}</code>{' '}
          <button className="copy-btn" onClick={copyEmail} aria-label="Copy email address">
            {copied ? 'COPIED' : 'COPY'}
          </button>
        </p>
        <p style={{ fontSize: '12.5px', color: 'var(--ink-faint)', marginTop: '6px' }}>
          {contact.emailIsPlaceholder ? 'Placeholder — replace email in src/content.ts' : 'Email ready.'} Full contact info
          lives in the CONTACT app.
        </p>
      </div>
    </>
  )
}