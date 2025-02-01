/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Set-Cookie",
            value: "MyCookie=myvalue; SameSite=Strict; Secure; HttpOnly",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
