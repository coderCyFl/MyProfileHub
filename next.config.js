/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "static/media", // or any other directory you prefer
            publicPath: "/_next/static/media", // or adjust as needed
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
