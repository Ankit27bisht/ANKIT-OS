import { useEffect, useState } from 'react'

export default function Boot() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1500)
    return () => clearTimeout(t)
  }, [])

  if (done) return null

  return (
    <div className="boot">
      <div className="logo">
        ANKIT<span className="accent">.OS</span>
      </div>
      <pre className="terminal-boot">{`> mounting personal-os ...
> loading marketing modules ...... ok
> ready.`}</pre>
      <div className="bar">
        <div className="fill" />
      </div>
      <div className="hint">press any key to continue</div>
    </div>
  )
}
