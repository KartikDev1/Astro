/** @type {import('next').NextConfig} */
const isVercel = process.env.VERCEL === '1';

const nextConfig = {
  // Use full Next.js output on Vercel; keep static export for cPanel/local static hosting.
  ...(isVercel
    ? {}
    : {
        output: 'export',
        trailingSlash: true,
      }),
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Base path if your site is in a subdirectory (remove if root domain)
  // basePath: '/your-folder-name',
  
  // Enable compression
  compress: true,
  
  // Enable React strict mode for better debugging
  reactStrictMode: true,
};

export default nextConfig;
