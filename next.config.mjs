/** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   turbopack: {
//     rules: {
//       "*.css": {
//         loaders: ["@tailwindcss/turbopack"],
//         as: "*.css",
//       },
//     },
//   },
//   reactStrictMode: true,
// };

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.PAGES_BASE_PATH,
  images: {
    unoptimized: true, 
  },
}

export default nextConfig;