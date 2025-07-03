// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.netgroup.it',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
