/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: ["https://strapi-holidaze-exam.herokuapp.com/"],
  //   domains: ["res.cloudinary.com"],
  // },
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

module.exports = nextConfig;
