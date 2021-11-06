module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
      domains: ['picsum.photos']
    }
  }
  return nextConfig
}