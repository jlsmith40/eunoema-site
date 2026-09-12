import type { Metadata } from 'next';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  icons: { icon: '/favicon.png', apple: '/eunoema-logo.png' },
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
            <Link className="brand" href="/" aria-label="Eunoema home">
              <Image className="brand-mark" src="/eunoema-logo.png" alt="" width={44} height={44} />
              <span>Eunoema</span>
            </Link>
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
              <Link className="brand footer-brand" href="/">
                <Image className="brand-mark" src="/eunoema-logo.png" alt="" width={44} height={44} />
                <span>Eunoema</span>
              </Link>
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
