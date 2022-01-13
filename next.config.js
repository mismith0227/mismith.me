const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

/** @type {import('next').NextConfig} */

const config = {
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  reactStrictMode: true,
}

module.exports = withPWA(config)
