/** @type {import('next').NextConfig} */
const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH !== undefined 
  ? process.env.NEXT_PUBLIC_BASE_PATH 
  : '/lockittrade-landing';

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
