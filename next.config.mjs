/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable hostname logging to avoid Node.js v23 network interface error
  experimental: {
    serverMinification: false,
  },
};

export default nextConfig;
