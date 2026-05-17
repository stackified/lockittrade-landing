/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // If deploying to https://stackified.github.io/lockittrade-landing (without a custom domain),
  // uncomment the line below:
  // basePath: '/lockittrade-landing',
}

export default nextConfig
