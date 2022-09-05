/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["luxshopping.vn", "via.placeholder.com", "dummyimage.com"],
    path: "",
    loader: "imgix",
  },
};

module.exports = nextConfig;
