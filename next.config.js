const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */

const config = {
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
}

module.exports = withBundleAnalyzer(withPWA(config))
