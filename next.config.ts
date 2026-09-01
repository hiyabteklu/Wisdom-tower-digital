import type { NextConfig } from "next";

const ACADEMY =
  process.env.NEXT_PUBLIC_ACADEMY_URL?.replace(/\/$/, "") ||
  "https://wisdom-tower-academy.live";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/academy", destination: ACADEMY, permanent: false },
      { source: "/academy/:path*", destination: `${ACADEMY}/academy/:path*`, permanent: false },
      { source: "/learning", destination: `${ACADEMY}/learning`, permanent: false },
      { source: "/packages", destination: `${ACADEMY}/packages`, permanent: false },
      { source: "/cart", destination: `${ACADEMY}/cart`, permanent: false },
      { source: "/checkout", destination: `${ACADEMY}/packages`, permanent: false },
      { source: "/checkout/:path*", destination: `${ACADEMY}/checkout/:path*`, permanent: false },
    ];
  },
};

export default nextConfig;
