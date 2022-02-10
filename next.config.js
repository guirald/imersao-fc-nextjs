/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'abs.twimg.com', 'pbs.twimg.com']
  }
}

module.exports = nextConfig
