import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Eunoema collects, uses, stores, and protects information.',
  alternates: { canonical: '/privacy/' },
  openGraph: {
    title: 'Privacy Policy | Eunoema',
    description: 'How Eunoema collects, uses, stores, and protects information.',
    url: '/privacy/',
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page shell">
      <header className="page-intro">
        <p className="eyebrow">Eunoema</p>
        <h1>Privacy Policy</h1>
        <p className="lede">
          This policy explains what information Eunoema handles, why it is
          needed, and the choices available to you.
        </p>
      </header>

      <div className="legal-layout">
        <aside className="legal-aside">
          Effective date
          <strong>August 28, 2026</strong>
          <br />
          Last updated
          <strong>August 28, 2026</strong>
        </aside>

        <article className="legal-content">
          <section className="legal-section">
            <h2>1. Who we are</h2>
            <p>
              Eunoema is a personal budgeting application developed and operated
              under the name Soli Deo Software. This Privacy Policy applies to
              the Eunoema application and the website at eunoema.com.
            </p>
            <p>
              Questions and privacy requests may be sent to{' '}
              <a href="mailto:privacy@eunoema.com">privacy@eunoema.com</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Information Eunoema handles</h2>

            <h3>Information you enter</h3>
            <p>
              Eunoema processes information you provide when building and using
              a budget. This may include account names and balances, income and
              pay schedules, bills, expenses, transactions, debts, savings and
              purchase goals, budget priorities, notes, and app preferences.
            </p>

            <h3>Connected financial information</h3>
            <p>
              If you choose to connect a financial account, Eunoema may receive
              information you authorize through Stripe Financial Connections.
              Depending on the permissions you select and the information made
              available by your financial institution, this may include:
            </p>
            <ul>
              <li>Financial institution and account names;</li>
              <li>Account type and masked account identifiers;</li>
              <li>Current and available balances;</li>
              <li>
                Pending and posted transaction details, such as date, amount,
                description, and status; and
              </li>
              <li>Connection status and synchronization dates.</li>
            </ul>
            <p>
              Eunoema does not receive the credentials you use to sign in to
              your financial institution. Stripe and the financial institution
              handle that authentication process.
            </p>

            <h3>Calendar information</h3>
            <p>
              If you grant calendar permission, Eunoema may read calendar
              information needed for budget calculations you configure, such as
              schedule dates used to calculate living-expense amounts. Calendar
              access is optional and controlled through your device settings.
            </p>

            <h3>Support communications</h3>
            <p>
              When you contact support, we receive the information you include
              in your message, such as your email address, description of the
              issue, and any attachments you choose to send.
            </p>

            <h3>Website information</h3>
            <p>
              The Eunoema website does not use advertising trackers or
              first-party analytics. The website host may process standard
              technical request information, such as an IP address, browser
              type, and request time, to deliver and secure the website.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. How information is used</h2>
            <p>Information is used to:</p>
            <ul>
              <li>Create, calculate, and display your budget;</li>
              <li>Generate paycheck plans and financial projections;</li>
              <li>Import balances and transactions you authorize;</li>
              <li>Match transactions to budget items you select;</li>
              <li>Sync app information across your Apple devices when enabled;</li>
              <li>Provide support and troubleshoot errors;</li>
              <li>Protect the service and prevent misuse; and</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
            <p>
              Eunoema does not sell personal information and does not use
              financial information for targeted advertising.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Service providers and disclosures</h2>
            <p>
              Information is shared only as needed to provide requested
              features, operate the service, protect users, or comply with law.
              Relevant providers include:
            </p>
            <ul>
              <li>
                <strong>Stripe Financial Connections</strong>, when you choose
                to connect an account, for connection authorization and delivery
                of permitted financial information. Stripe’s privacy information
                is available at{' '}
                <a href="https://stripe.com/privacy" rel="noreferrer">
                  stripe.com/privacy
                </a>
                .
              </li>
              <li>
                <strong>Apple</strong>, for device functionality, calendar
                permissions, and iCloud or CloudKit synchronization you enable.
                Apple’s privacy information is available at{' '}
                <a href="https://www.apple.com/legal/privacy/" rel="noreferrer">
                  apple.com/legal/privacy
                </a>
                .
              </li>
              <li>
                <strong>GitHub Pages</strong>, which hosts the public Eunoema
                website. GitHub’s privacy statement is available at{' '}
                <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" rel="noreferrer">
                  docs.github.com
                </a>
                .
              </li>
            </ul>
            <p>
              Information may also be disclosed when reasonably necessary to
              comply with a valid legal request, protect rights or safety,
              investigate misuse, or complete a business transition subject to
              appropriate protections and notice where required.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Storage, synchronization, and security</h2>
            <p>
              Budget information is stored on your device. If you enable Apple
              iCloud or CloudKit synchronization, eligible app information may
              also be stored in your iCloud account and synchronized across your
              devices. Financial information imported into Eunoema may become
              part of the app data stored on your device or synchronized through
              the Apple services you enable.
            </p>
            <p>
              Reasonable administrative and technical safeguards are used to
              protect information. No storage or transmission method can be
              guaranteed to be completely secure, so you should also protect
              your devices, Apple account, and email account.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Retention and deletion</h2>
            <p>
              Information is retained for as long as needed to provide Eunoema’s
              features, maintain records you choose to keep, resolve support or
              security issues, and meet applicable legal obligations.
            </p>
            <p>
              Disconnecting a financial institution stops future access through
              that connection, but does not automatically delete information
              previously imported into your budget. Previously imported records
              may be removed using available app controls or by requesting help
              at <a href="mailto:privacy@eunoema.com">privacy@eunoema.com</a>.
            </p>
            <p>
              Local app information can also be removed by deleting applicable
              records or the app. Information synchronized through iCloud may
              remain subject to your Apple account and iCloud settings.
            </p>
          </section>

          <section className="legal-section">
            <h2>7. Your choices</h2>
            <ul>
              <li>Do not connect a financial account;</li>
              <li>Disconnect a connected financial account;</li>
              <li>Use a manually entered balance where the app permits;</li>
              <li>Decline or revoke calendar access in device settings;</li>
              <li>Disable iCloud synchronization through Apple settings; and</li>
              <li>
                Request access, correction, or deletion by emailing{' '}
                <a href="mailto:privacy@eunoema.com">privacy@eunoema.com</a>.
              </li>
            </ul>
            <p>
              Some choices may limit features that depend on the corresponding
              information or permission.
            </p>
          </section>

          <section className="legal-section">
            <h2>8. Children’s privacy</h2>
            <p>
              Eunoema is not directed to children under 13, and we do not
              knowingly collect personal information from children under 13. If
              you believe a child has provided personal information, contact us
              so the matter can be reviewed and addressed.
            </p>
          </section>

          <section className="legal-section">
            <h2>9. Changes to this policy</h2>
            <p>
              This policy may be updated as Eunoema’s features, service
              providers, or legal obligations change. The effective date at the
              top of this page will be revised when an update is posted. Material
              changes will be communicated through an appropriate notice where
              required.
            </p>
          </section>

          <section className="legal-section">
            <h2>10. Contact</h2>
            <p>
              For privacy questions, requests, or concerns, email{' '}
              <a href="mailto:privacy@eunoema.com">privacy@eunoema.com</a>.
            </p>
            <p>
              For general product support, email{' '}
              <a href="mailto:support@eunoema.com">support@eunoema.com</a>.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
