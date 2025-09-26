/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['framer-motion'],
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
    domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        port: '',
        pathname: '/v0/b/navimove-b433a.firebasestorage.app/o/**',
      }
    ]
  },
  distDir: 'out',
  assetPrefix: '',
  basePath: ''
}

module.exports = nextConfig 