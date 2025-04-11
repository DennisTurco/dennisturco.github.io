/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.fusacafe.it",
      },
    ],
  },
};