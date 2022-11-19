/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    MAIL : process.env.MAIL,
    PASS : process.env.PASS
  }
}

module.exports = nextConfig
