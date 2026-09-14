import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import TawkTo from "@/components/TawkTo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
  preload: true
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: 'swap',
  preload: true
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#7c3aed' },
    { media: '(prefers-color-scheme: dark)', color: '#0b0616' }
  ],
}

export const metadata: Metadata = {
  title: {
    default: "Yunay Digital Services Private Limited - Professional Software Development & Technology Solutions",
    template: "%s | Yunay Digital Services Private Limited"
  },
  description: "Yunay Digital Services Private Limited is a leading software development company specializing in web development, mobile applications, UI/UX design, cloud solutions, and digital marketing. We deliver innovative technology solutions that drive business growth and digital transformation.",
  keywords: [
    "yunay digital services private limited",
    "yunay digital",
    "software development company",
    "best software development company",
    "top software development services",
    "custom software development",
    "enterprise software solutions",
    "web development services",
    "mobile app development",
    "UI UX design services",
    "cloud solutions",
    "cloud migration services",
    "AWS development",
    "Azure development", 
    "Google Cloud services",
    "digital marketing",
    "technology solutions",
    "React development",
    "Next.js development",
    "Node.js development",
    "full stack development",
    "API development",
    "software consulting",
    "business automation",
    "DevOps services",
    "cloud infrastructure",
    "SaaS development",
    "software outsourcing",
    "agile development",
    "digital transformation",
    "IT consulting",
    "software engineering",
    "application development"
  ],
  authors: [{ name: "Yunay Digital Services Private Limited", url: "https://yunaydigital.com" }],
  creator: "Yunay Digital Services Private Limited",
  publisher: "Yunay Digital Services Private Limited",
  metadataBase: new URL('https://yunaydigital.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Yunay Digital Services Private Limited - Professional Software Development Solutions",
    description: "Leading software development company delivering innovative web and mobile applications, UI/UX design, cloud solutions, and digital marketing services for businesses worldwide.",
    type: "website",
    locale: "en_US",
    siteName: "Yunay Digital Services Private Limited",
    url: "https://yunaydigital.com",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Yunay Digital Services Private Limited - Software Development Company"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Yunay Digital Services Private Limited - Professional Software Development Solutions",
    description: "Leading software development company delivering innovative technology solutions including cloud services for businesses worldwide.",
    creator: "@yunaydigital",
    images: ["/brand/og-image.png"]
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'business',
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Yunay Digital Services Private Limited',
    'application-name': 'Yunay Digital Services Private Limited',
    'msapplication-TileColor': '#8b5cf6',
    'msapplication-config': '/browserconfig.xml',
    'msapplication-TileImage': '/brand/logo-mark-192.png',
  }
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Yunay Digital Services Private Limited",
  "alternateName": "Yunay Digital",
  "url": "https://yunaydigital.com",
  "logo": "https://yunaydigital.com/brand/logo-mark-1024.png",
  "description": "Leading software development company specializing in web development, mobile applications, UI/UX design, cloud solutions, and digital marketing services.",
  "foundingDate": "2020",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "The Circle, Unitech Trade Center",
    "addressLocality": "Gurugram",
    "addressRegion": "Haryana",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-79-77704812",
    "contactType": "customer service",
    "email": "contact@yunaydigital.com"
  },
  "sameAs": [
    "https://www.linkedin.com/company/yunaydigital",
    "https://twitter.com/yunaydigital",
    "https://github.com/yunaydigital"
  ],
  "services": [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Cloud Solutions",
    "Digital Marketing",
    "Software Consulting"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/brand/logo-mark-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/brand/logo-mark-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/brand/logo-mark-48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/brand/logo-mark-192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/brand/logo-mark-180.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Meta tags for performance and SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0b0616" />
        <meta name="msapplication-TileColor" content="#8b5cf6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-space-950 text-gray-900`}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
        <TawkTo />
      </body>
    </html>
  );
}
