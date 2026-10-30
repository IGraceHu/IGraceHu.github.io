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
  basePath: process.env.PAGES_BASE_PATH,
}

export default nextConfig;