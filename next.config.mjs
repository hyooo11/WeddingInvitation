/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "https://naveropenapi.apigw.ntruss.com/:path*",
      },
    ];
  },
};

export default nextConfig;
