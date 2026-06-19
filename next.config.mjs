import packageJson from './package.json' with { type: 'json' }
const { version } = packageJson
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  env: {
    APP_VERSION: version,
  },
};

export default nextConfig;
