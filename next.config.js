/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/ljs-portfolio-site',
    assetPrefix: '/ljs-portfolio-site',
};

module.exports = nextConfig;
