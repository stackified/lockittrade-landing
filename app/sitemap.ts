import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  // Update the baseUrl to your actual domain
  const baseUrl = "https://lockittrade.com"

  // Get current date for lastModified
  const currentDate = new Date()

  return [
    // Homepage - Highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // Main feature pages - High priority
    {
      url: `${baseUrl}/prop-firm-ready`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Business pages - Medium-high priority
    {
      url: `${baseUrl}/enterprise`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/partnerships`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/api`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Legal pages - Lower priority but important
    {
      url: `${baseUrl}/terms`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },

    // Add more specific landing pages for SEO
    {
      url: `${baseUrl}/#features`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#pricing`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
