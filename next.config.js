const withTwin = require('./withTwin')
const nextSafe = require('next-safe')

/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development"

const contentSecurityPolicy = () => {
  const csp = {
    "upgrade-insecure-requests": [],
    "style-src": ["'self'", "fonts.googleapis.com"],
    "font-src": ["'self'", "fonts.gstatic.com"],
    "img-src": ["'self'", "data:"],
    "script-src": ["'self'"],
  }

  if(!isDev) {
    csp['style-src'].push("'unsafe-inline'")
    csp['script-src'].push("'unsafe-eval'")
  }

  return csp
}

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: ['cdn.discordapp.com'],
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: nextSafe({ isDev, contentSecurityPolicy: contentSecurityPolicy() })
      }
    ]
  }
}

module.exports = withTwin(nextConfig)
