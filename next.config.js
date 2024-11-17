/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '',
    assetPrefix: '/ljs-portfolio-site',
};

module.exports = nextConfig;