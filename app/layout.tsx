import type { Metadata } from 'next';
import {
  Cormorant_Garamond,
  DM_Sans,
  Inter,
  Outfit
} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap'
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap'
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'PRAKALP 2026 | SANKRAMAN by IEEExCRCE',
  description:
    'Sankraman: From Concept to Change. Register for PRAKALP 2026, a national-level project competition by IEEExCRCE.',
  openGraph: {
    title: 'PRAKALP 2026 | SANKRAMAN',
    description:
      'From Concept to Change. Experience Sankraman at PRAKALP 2026 with competitions, workshops, and real-world innovation.',
    type: 'website',
    url: 'https://ieeexcrce.com',
    siteName: 'PRAKALP 2026'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${cormorantGaramond.variable} ${dmSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
