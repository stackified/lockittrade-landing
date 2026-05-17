import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { IntercomProvider } from "@/components/intercom-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Lock It Trade - The Smartest Trading Journal Ever Built",
    template: "%s | Lock It Trade",
  },
  description:
    "Built for prop firm traders and serious traders ready to level up. Track your performance, analyze your trades, and get prop firm ready with AI-powered insights. Join 10,000+ traders using Lock It Trade.",
  keywords: [
    "trading journal",
    "prop firm",
    "trading analytics",
    "risk management",
    "trading performance",
    "AI trading tools",
    "prop firm ready",
    "trading compliance",
    "risk reward analysis",
    "trading psychology",
    "funded trader",
    "FTMO",
    "TopStep",
    "trading education",
  ],
  authors: [{ name: "Lock It Trade", url: "https://lockittrade.com" }],
  creator: "Lock It Trade",
  publisher: "Lock It Trade",
  category: "Finance",
  classification: "Trading Software",

  // Enhanced favicon and icons configuration
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },

  // Enhanced OpenGraph
  openGraph: {
    title: "Lock It Trade - The Smartest Trading Journal Ever Built",
    description:
      "Built for prop firm traders and serious traders ready to level up. AI-powered trading analytics, prop firm readiness scoring, and comprehensive performance tracking.",
    url: "https://lockittrade.com",
    siteName: "Lock It Trade",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lockittrade.com/logo.png",
        width: 512,
        height: 512,
        alt: "Lock It Trade - AI-Powered Trading Journal",
      },
    ],
  },

  // Enhanced Twitter metadata
  twitter: {
    card: "summary_large_image",
    title: "Lock It Trade - The Smartest Trading Journal Ever Built",
    description:
      "Built for prop firm traders and serious traders ready to level up. AI-powered trading analytics and prop firm readiness scoring.",
    creator: "@lockittrade",
    site: "@lockittrade",
    images: ["https://lockittrade.com/logo.png"],
  },

  // Enhanced robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Verification for search engines
  verification: {
    google: "zoi3vaYtKfQ5Vdz28YaipP4kL-Nti27V9S0ra4WWBwQ",
  },

  // Additional metadata
  alternates: {
    canonical: "https://lockittrade.com",
  },

  // App-specific metadata
  applicationName: "Lock It Trade",
  referrer: "origin-when-cross-origin",
  generator: "v0.dev",

  // Viewport configuration
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Enhanced structured data with Organization schema for logo
  const structuredData = [
    // Organization Schema - This is what Google uses for logos
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Lock It Trade",
      url: "https://lockittrade.com",
      logo: {
        "@type": "ImageObject",
        url: "https://lockittrade.com/logo.png",
        width: 512,
        height: 512,
        caption: "Lock It Trade Logo",
      },
      sameAs: [
        "https://www.youtube.com/@LockItTrade",
        "https://instagram.com/lockittrade",
        "https://discord.gg/VJJEwe3tU2",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "lockittrade@gmail.com",
        contactType: "customer service",
      },
      description: "AI-powered trading journal and analytics platform for prop firm traders",
      foundingDate: "2024",
      industry: "Financial Technology",
      numberOfEmployees: "1-10",
    },
    // Software Application Schema
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Lock It Trade",
      description: "AI-powered trading journal and analytics platform for prop firm traders",
      url: "https://lockittrade.com",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/ComingSoon",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        ratingCount: "2000",
      },
      author: {
        "@type": "Organization",
        name: "Lock It Trade",
        url: "https://lockittrade.com",
      },
    },
  ]

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script src="/fpmain.js" defer />
        <script src="https://cdn.firstpromoter.com/fpr.js" defer />

        {/* Enhanced Structured Data with Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

        {/* Additional favicon links for better browser support */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#00A9E0" />
        <meta name="msapplication-TileColor" content="#00A9E0" />

        {/* Preload critical resources */}
        <link rel="preload" href="/logo.png" as="image" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//api.systeme.io" />
        <link rel="dns-prefetch" href="//formspree.io" />
        <link rel="dns-prefetch" href="//vercel.com" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lockittrade.com" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
        <IntercomProvider />
      </body>
    </html>
  )
}
