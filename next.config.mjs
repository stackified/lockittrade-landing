/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : (isDev ? '' : '/lockittrade%20landing');

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

export default nextConfig
