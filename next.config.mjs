import packageJson from './package.json' with { type: 'json' }
const { version } = packageJson
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_VERSION: version,
  },
};

export default nextConfig;
