/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev, isServer }) {
    // 개발 환경에서만 캐시 비활성화
    if (dev) {
      config.cache = false;
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  compiler: {
    // ssr 및 displayName은 기본적으로 구성됩니다.
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com', // 이미지 도메인 추가
      },
    ],
  },
};

export default nextConfig;
