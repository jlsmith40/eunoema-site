const features = [
  {
    number: '01',
    title: 'Plan with context',
    description:
      'See pay periods, obligations, everyday spending, savings, and debt as one connected plan.',
  },
  {
    number: '02',
    title: 'Stay current',
    description:
      'Compare the plan with real account balances and transactions without losing the long-term view.',
  },
  {
    number: '03',
    title: 'Make it yours',
    description:
      'Choose the tools, accounts, priorities, and appearance that fit the way you manage money.',
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Personal budgeting, thoughtfully connected</p>
          <h1>A clearer plan for your money.</h1>
          <p className="lede">
            Eunoema brings paychecks, bills, spending, savings, debt, and account
            balances into one adaptable budget, so every decision starts with the
            full picture.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="/privacy">
              Read the privacy policy
            </a>
            <a className="button secondary" href="/support">
              Contact support
            </a>
          </div>
        </div>

        <div className="plan-card" aria-label="Example budget overview">
          <div className="plan-card-topline">
            <span>Budget overview</span>
            <span className="status-dot">On track</span>
          </div>
          <div className="plan-amount">
            <span>Remaining this period</span>
            <strong>$1,284</strong>
          </div>
          <div className="plan-bar" aria-hidden="true">
            <span />
          </div>
          <div className="plan-grid">
            <div>
              <span>Obligations</span>
              <strong>$816</strong>
            </div>
            <div>
              <span>Everyday spending</span>
              <strong>$420</strong>
            </div>
            <div>
              <span>Future goals</span>
              <strong>$350</strong>
            </div>
            <div>
              <span>Available</span>
              <strong className="positive">$514</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="principles shell" aria-labelledby="principles-title">
        <div className="section-heading">
          <p className="eyebrow">Built for real life</p>
          <h2 id="principles-title">Your budget should adapt to you.</h2>
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
          <p className="eyebrow">Privacy by design</p>
          <h2>Your financial life is personal.</h2>
          <p>
            Eunoema does not sell personal information or use financial data for
            advertising. You choose which permissions and financial connections
            to enable.
          </p>
        </div>
        <a className="text-link" href="/privacy">
          See how information is handled <span aria-hidden="true">→</span>
        </a>
      </section>
    </main>
  );
}
