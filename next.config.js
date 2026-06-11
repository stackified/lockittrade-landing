/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';
// Vercel injects VERCEL=1 during build & runtime. On Vercel the site is served
// at the root domain (www.lockittrade.com), so force an empty base path there —
// regardless of any dashboard env var. GitHub Pages builds (no VERCEL var) keep
// the project-path base of /lockittrade-landing.
const isVercel = !!process.env.VERCEL;

const rawBasePath = isVercel
  ? ''
  : process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : (isDev ? '' : '/lockittrade-landing');

// Clean the base path: remove trailing slash, ensure starting slash if not empty
let basePath = rawBasePath.trim();
if (basePath === '/' || basePath === '') {
  basePath = '';
} else {
  if (!basePath.startsWith('/')) {
    basePath = '/' + basePath;
  }
  if (basePath.endsWith('/')) {
    basePath = basePath.slice(0, -1);
  }
}

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  }
}

module.exports = nextConfig
