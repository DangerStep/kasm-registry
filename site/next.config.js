/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kai's Repos',
    description: 'The repos that I have added',
    icon: '/img/logo.svg',
    listUrl: 'https://dangerstep.github.io/kasm-registry/',
    contactUrl: 'https://kasmweb.com/support',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
