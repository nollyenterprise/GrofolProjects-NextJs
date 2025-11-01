import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image = '/images/og-image.jpg',
  url = 'https://grofolprojects.com',
  type = 'website',
}: SEOProps): Metadata {
  const fullTitle = `${title} | Grofol Projects Limited`;

  return {
    title: fullTitle,
    description,
    keywords: [
      'Engineering Services',
      'Oil & Gas Procurement',
      'Marine Equipment Nigeria',
      'Power and Renewable Energy Projects',
      'Industrial Solutions Africa',
      ...keywords,
    ],
    authors: [{ name: 'Grofol Projects Limited' }],
    openGraph: {
      type,
      title: fullTitle,
      description,
      url,
      siteName: 'Grofol Projects Limited',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_NG',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
