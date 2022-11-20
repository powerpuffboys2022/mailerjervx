/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env : {
    MAIL : process.env.MAIL,
    PASS : process.env.PASS,
    SENDGRID_KEY : process.env.SENDGRID_KEY
  }
}

module.exports = nextConfig
