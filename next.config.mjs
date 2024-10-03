/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "icms-image.slatic.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
