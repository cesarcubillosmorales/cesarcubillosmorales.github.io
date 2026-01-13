/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const apiProxy = process.env.API_PROXY_URL || "http://localhost:8000";
    return [
      {
        source: "/api/:path*",
        destination: `${apiProxy}/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
