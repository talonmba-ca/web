import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'landingfoliocom.imgix.net',
        port: ''
      },
      {
        protocol: 'https',
        hostname: 'cdn.rareblocks.xyz',
        port: ''
      }
    ]
  }
}

export default nextConfig
