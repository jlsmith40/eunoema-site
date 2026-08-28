import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with Eunoema.',
  alternates: { canonical: '/support/' },
  openGraph: {
    title: 'Support | Eunoema',
    description: 'Get help with Eunoema.',
    url: '/support/',
  },
};

export default function Support() {
  return (
    <main className="support-page shell">
      <header className="page-intro">
        <p className="eyebrow">Eunoema support</p>
        <h1>How can we help?</h1>
        <p className="lede">
          Send a message for help with the app, connected accounts, data, or a
          privacy request.
        </p>
      </header>

      <div className="support-grid">
        <section className="support-card">
          <h2>Product support</h2>
          <p>
            For app behavior, calculations, syncing, or connected-account
            questions, email{' '}
            <a href="mailto:support@eunoema.com">support@eunoema.com</a>.
          </p>
        </section>

        <section className="support-card">
          <h2>Privacy requests</h2>
          <p>
            For questions about information, deletion, or financial connections,
            email <a href="mailto:privacy@eunoema.com">privacy@eunoema.com</a>.
          </p>
        </section>

        <section className="support-card full">
          <h2>Before sending a message</h2>
          <p>
            Include the device type, app version, and a description of what you
            expected and what occurred. Do not email bank passwords, complete
            account numbers, Social Security numbers, or other authentication
            credentials. Screenshots should be reviewed for sensitive details
            before they are attached.
          </p>
        </section>
      </div>
    </main>
  );
}
