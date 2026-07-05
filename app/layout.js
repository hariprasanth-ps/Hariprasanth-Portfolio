import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { profile } from '@/lib/data';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});
const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});
const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://example.com'), // TODO: replace with your real domain
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.shortName}`,
  },
  description: profile.tagline,
  keywords: ['Data Engineer', 'ColdFusion Developer', 'Python', 'Apache Spark', 'Kafka', 'ETL', 'Portfolio'],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: 'website',
    url: '/',
    siteName: profile.shortName,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F7F7' },
    { media: '(prefers-color-scheme: dark)', color: '#0B1116' },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          <main id="main-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
