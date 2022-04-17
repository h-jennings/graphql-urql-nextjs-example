/** @type {import('next').NextConfig} */

const { withPlugins } = require('next-compose-plugins');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const BASE_PATH = process.env.BASE_PATH || '';
const basePath = BASE_PATH === '/' ? '' : BASE_PATH.trim();

const nextConfig = {
  swcMinify: true,
  env: {
    BASE_PATH: basePath,
  },
  basePath,
  images: {
    loader: 'default',
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);
