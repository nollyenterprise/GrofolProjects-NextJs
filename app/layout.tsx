import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { generateMetadata } from '@/lib/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = generateMetadata({
  title: 'Engineering Solutions in Africa',
  description: 'Leading Nigerian engineering, oil & gas, and industrial consulting company providing power, marine, and renewable energy solutions across Africa.',
  keywords: [
    'Engineering Services Nigeria',
    'Oil & Gas Procurement Africa',
    'Marine Equipment Nigeria',
    'Power and Renewable Energy Projects',
    'Industrial Solutions Africa',
    'EPIC Services Nigeria',
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Engineering Solutions in Africa",
    description:
      "Engineering, oil & gas, and industrial consulting company providing power, marine, and renewable energy solutions across Africa.",
    url: "https://grofolprojects.com",
    siteName: "Engineering Solutions Africa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Engineering Solutions Africa",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Solutions in Africa",
    description:
      "Providing power, marine, oil & gas, and renewable energy solutions across Africa.",
    creator: "@yourhandle",
    images: ["/og-image.jpg"],
  },
  authors: [{ name: "Engineering Solutions Africa", url: "https://grofolprojects.com" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/images/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Grofol Projects Limited',
              description:
                'Leading Nigerian engineering, oil & gas, and industrial consulting company providing power, marine, and renewable energy solutions.',
              url: 'https://grofolprojects.com',
              logo: 'https://grofolprojects.com/images/logo.png',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NG',
                addressLocality: 'Lagos',
                addressRegion: 'Lagos State',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'info@grofolprojects.com',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
