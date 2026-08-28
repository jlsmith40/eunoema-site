import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.eunoema.com'),
  title: {
    default: 'Eunoema | A clearer plan for your money',
    template: '%s | Eunoema',
  },
  description:
    'A flexible personal budgeting app that connects paychecks, obligations, spending, savings, debt, and account balances.',
  openGraph: {
    title: 'Eunoema',
    description: 'A clearer plan for your money.',
    url: 'https://www.eunoema.com',
    siteName: 'Eunoema',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Eunoema: A clearer plan for your money.',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eunoema',
    description: 'A clearer plan for your money.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="shell header-inner">
            <a className="brand" href="/" aria-label="Eunoema home">
              <span className="brand-mark" aria-hidden="true">E</span>
              <span>Eunoema</span>
            </a>
            <nav aria-label="Primary navigation">
              <a href="/privacy">Privacy</a>
              <a href="/support">Support</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="shell footer-inner">
            <div>
              <a className="brand footer-brand" href="/">
                <span className="brand-mark" aria-hidden="true">E</span>
                <span>Eunoema</span>
              </a>
              <p>Developed by Soli Deo Software.</p>
            </div>
            <div className="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/support">Support</a>
              <a href="mailto:support@eunoema.com">support@eunoema.com</a>
            </div>
          </div>
          <div className="shell copyright">
            © 2026 Soli Deo Software. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
