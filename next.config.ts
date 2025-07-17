import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "res.cloudinary.com",
    ],
  },
  async redirects() {
  return [
    {
      source: '/:path*',
      has: [
        {
          type: 'host',
          value: 'kawekwune.vercel.app',
        },
      ],
      destination: 'https://kawekwune-emmanuel.vercel.app/:path*',
      permanent: true,
    },
  ];
},
};

export default nextConfig;
