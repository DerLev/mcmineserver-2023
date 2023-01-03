const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
}

module.exports = withTwin(nextConfig)
