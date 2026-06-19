import packageJson from './package.json' with { type: 'json' }
const { version } = packageJson
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a static './out' folder
  basePath: '/czsearch', // Replace with your exact repository name
  images: {
    unoptimized: true, // GitHub Pages does not support dynamic image optimization
  },
  env: {
    APP_VERSION: version,
  },
};

export default nextConfig;
