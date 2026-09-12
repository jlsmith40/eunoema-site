const features = [
  {
    number: '01',
    title: 'Plan around your pay',
    description:
      'Organize income from one or several jobs alongside bills and everyday expenses. Set aside money for upcoming expenses.',
  },
  {
    number: '02',
    title: 'Know where you stand',
    description:
      'See your account balances and spending at a glance. Use Budget Check-In to review each pay period and adjust your plan.',
  },
  {
    number: '03',
    title: 'Make room for your goals',
    description:
      'Balance today’s expenses with savings, debt, and the priorities that matter to you.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Eunoema for iPhone and Mac</p>
          <h1>A clearer plan for your money.</h1>
          <p className="lede">
            Bring paychecks, bills, everyday spending, and savings together.
            Plan around regular hours, rotating shifts, or more than one job.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#features">
              Explore Eunoema
            </a>
            <a className="button secondary" href="/support">
              Contact support
            </a>
          </div>
        </div>

        <div className="dashboard-preview" role="img" aria-label="Sample Eunoema dashboard with a checking and savings balance of $4,280, Budget Check-In, and remaining grocery and transport budgets.">
          <div className="dashboard-heading"><h2>Dashboard</h2><span>September 1 to 15</span></div>
          <div className="balance-card">
            <span>Checking &amp; savings</span>
            <strong>$4,280.00</strong>
            <div className="balance-details">
              <div><span>Checking</span><strong>$2,780.00</strong></div>
              <div><span>Savings</span><strong>$1,500.00</strong></div>
              <div><span>Next paycheck</span><strong>September 15</strong></div>
            </div>
          </div>
          <div className="checkin-card">
            <span className="checkin-icon" aria-hidden="true">✓</span>
            <div><h3>Budget Check-In</h3><p>Review your plan for this pay period.</p></div>
          </div>
          <div className="spending-grid">
            <div className="spending-card"><h3>Groceries</h3><strong>$245.00</strong><span>remaining of $400</span><div className="spending-track"><span style={{ width: '61.25%' }} /></div></div>
            <div className="spending-card"><h3>Transportation</h3><strong>$120.00</strong><span>remaining of $180</span><div className="spending-track"><span style={{ width: '66.67%' }} /></div></div>
          </div>
        </div>
      </section>

      <section id="features" className="principles shell" aria-labelledby="principles-title">
        <div className="section-heading">
          <h2 id="principles-title">Keep your budget in one place.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy-callout shell">
        <div>
          <h2>You choose what to connect.</h2>
          <p>
            Eunoema does not sell personal information or use financial data for
            advertising. You choose which permissions and financial connections
            to enable. Bank sync is optional.
          </p>
        </div>
        <a className="text-link" href="/privacy">
          Read the privacy policy
        </a>
      </section>
    </main>
  );
}
