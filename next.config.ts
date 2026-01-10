/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false, // Disables the "Static" / "Dynamic" indicator
    buildActivity: false, // Disables the build activity indicator
    buildActivityPosition: 'bottom-right', 
  },
  // Keep your existing images config here
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;