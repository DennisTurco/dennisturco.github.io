/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.fusacafe.it",
      },
    ],
  },
};

module.exports = nextConfig;