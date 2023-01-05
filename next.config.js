const withTwin = require('./withTwin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['cdn.discordapp.com'],
  },
}

module.exports = withTwin(nextConfig)
