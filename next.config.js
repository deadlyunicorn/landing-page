/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
    remotePatterns:[
      {
        hostname: "deadlyunicorn.s3.eu-central-1.amazonaws.com",
        protocol: "https"
      },
      {
        hostname: "user-images.githubusercontent.com",
        protocol: "https"
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https"
      },
    ]
  }
}

module.exports = nextConfig
