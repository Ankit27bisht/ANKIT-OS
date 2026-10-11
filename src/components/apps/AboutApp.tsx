import Avatar from '../Avatar'

export default function AboutApp() {
  return (
    <div className="about-app">
      <section className="about-profile">
        <div className="about-avatar-frame">
          <Avatar className="about-avatar" size={132} />
        </div>
        <div className="about-copy">
          <h2>MARKETER. CONTENT CREATOR.<br />STRATEGIST.</h2>
          <p>I help brands grow with content<br />that connects, campaigns that<br />perform, and strategies that<br />make an impact.</p>
        </div>
        <div className="about-skills" aria-label="Skills">
          <div><span aria-hidden="true">♥</span> Social Media Management</div>
          <div><span aria-hidden="true">▤</span> Content Creation</div>
          <div><span aria-hidden="true">▲</span> Campaign Strategy</div>
          <div><span aria-hidden="true">▥</span> Data-Driven Marketing</div>
        </div>
        <button className="about-connect" type="button">LET&apos;S CONNECT <span aria-hidden="true">→</span></button>
      </section>

      <aside className="about-insight">
        <div className="about-chart" aria-hidden="true">
          <span className="chart-bar bar-one" />
          <span className="chart-bar bar-two" />
          <span className="chart-bar bar-three" />
          <span className="chart-line" />
        </div>
        <div className="about-metrics">
          <span className="metric-ideas">IDEAS</span>
          <span className="metric-campaigns">CAMPAIGNS</span>
          <span className="metric-results">RESULTS</span>
        </div>
        <p className="about-quote">&ldquo;Consistency<br />today, a bigger<br />tomorrow.&rdquo;</p>
        <p className="about-signoff">— ANKIT</p>
      </aside>
    </div>
  )
}