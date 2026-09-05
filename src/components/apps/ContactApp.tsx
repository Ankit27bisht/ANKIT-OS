import { useState } from 'react'
import { contact } from '../../content'

export default function ContactApp() {
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
        <h2>CONTACT</h2>
        <div className="sub">// reach the person behind the OS</div>
      </div>

      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '18px' }}>
        <span className="ph">● editable placeholders — no fake address</span>
      </div>

      <div className="contact-card">
        <div className="contact-row">
          <div className="contact-key">EMAIL</div>
          <code className="contact-value">{contact.emailDisplay}</code>
          <button className="copy-btn" onClick={copyEmail} aria-label="Copy email address">
            {copied ? 'COPIED' : 'COPY'}
          </button>
        </div>
        <p className="contact-hint">
          {contact.emailIsPlaceholder
            ? 'This is a placeholder. Replace it in src/content.ts → contact.email'
            : 'Email is active — click COPY or send a mail directly.'}
        </p>

        <div className="contact-row">
          <div className="contact-key">LINKEDIN</div>
          {contact.linkedin.enabled ? (
            <a className="contact-value link" href={contact.linkedin.url} target="_blank" rel="noreferrer">
              {contact.linkedin.url}
            </a>
          ) : (
            <span className="contact-value off">unavailable</span>
          )}
        </div>
        <p className="contact-hint">
          {contact.linkedin.enabled
            ? 'LinkedIn is enabled. Configure the URL in src/content.ts → contact.linkedin.'
            : 'LinkedIn is disabled until a real URL is added in src/content.ts → contact.linkedin.'}
        </p>
      </div>
    </>
  )
}