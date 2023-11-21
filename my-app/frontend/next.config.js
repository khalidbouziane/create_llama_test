/** @type {import('next').NextConfig} */
const nextConfig = {appDir: true,
  output: "export",
  images: { unoptimized: true },
  experimental: {
    serverComponentsExternalPackages: ["llamaindex"],
    outputFileTracingIncludes: {
      "/*": ["./cache/**/*"],
    },
  },
};

module.exports = nextConfig;
