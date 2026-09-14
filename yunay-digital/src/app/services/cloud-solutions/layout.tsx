import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Solutions & Services - AWS, Azure, Google Cloud | Yunay Digital',
  description: 'Professional cloud solutions and services including AWS, Azure, Google Cloud migration, DevOps, and cloud infrastructure management by Yunay Digital Services Limited. Get 40% cost savings with 99.9% uptime.',
  keywords: [
    'cloud solutions',
    'cloud services', 
    'AWS development',
    'Azure development',
    'Google Cloud services',
    'cloud migration',
    'DevOps services',
    'cloud infrastructure',
    'SaaS development',
    'PaaS development',
    'IaaS services',
    'cloud consulting',
    'digital transformation',
    'serverless architecture',
    'microservices',
    'container orchestration',
    'Kubernetes',
    'Docker',
    'cloud security',
    'data backup',
    'disaster recovery',
    'auto scaling',
    'load balancing',
    'CDN services',
    'cloud optimization',
    'hybrid cloud',
    'multi-cloud',
    'cloud cost optimization',
    'cloud migration services',
    'enterprise cloud solutions'
  ],
  openGraph: {
    title: 'Cloud Solutions & Services - AWS, Azure, Google Cloud | Yunay Digital',
    description: 'Professional cloud solutions including migration, DevOps, and infrastructure management. Achieve 40% cost savings with 99.9% uptime guarantee.',
    type: 'website',
    locale: 'en_US',
    url: 'https://yunaydigital.com/services/cloud-solutions',
    siteName: 'Yunay Digital Services Private Limited',
    images: [
      {
        url: '/cloud-solutions-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloud Solutions & Services by Yunay Digital'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Solutions & Services - AWS, Azure, Google Cloud | Yunay Digital',
    description: 'Professional cloud solutions including migration, DevOps, and infrastructure management. Get expert cloud consulting services.',
    images: ['/cloud-solutions-og.jpg'],
    creator: '@yunaydigital'
  },
  alternates: {
    canonical: 'https://yunaydigital.com/services/cloud-solutions'
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
  other: {
    'geo.region': 'IN',
    'geo.placename': 'India',
    'distribution': 'global',
    'rating': 'general'
  }
}

export default function CloudSolutionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cloud Solutions & Services",
            "description": "Professional cloud solutions including AWS, Azure, Google Cloud migration and management services",
            "provider": {
              "@type": "Organization",
              "name": "Yunay Digital Services Limited",
              "url": "https://yunaydigital.com",
              "logo": "https://yunaydigital.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-XXX-XXX-XXXX",
                "contactType": "customer service",
                "email": "contact@yunaydigital.com"
              }
            },
            "serviceType": "Cloud Computing Services",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Cloud Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Migration Services",
                    "description": "Seamless migration of applications and data to cloud platforms"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "DevOps Services",
                    "description": "CI/CD pipelines and DevOps automation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Cloud Infrastructure Management",
                    "description": "24/7 monitoring and management of cloud resources"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AWS Development",
                    "description": "Amazon Web Services cloud solutions and development"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Azure Development", 
                    "description": "Microsoft Azure cloud platform services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Google Cloud Services",
                    "description": "Google Cloud Platform solutions and development"
                  }
                }
              ]
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150",
              "bestRating": "5"
            }
          })
        }}
      />
      {children}
    </>
  )
} 