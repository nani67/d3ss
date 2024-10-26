/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',images: { unoptimized: true },
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|ogv)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // Adjust the file size limit as needed
              name: '[name].[hash].[ext]',
              publicPath: '/_next/static/videos/',
              outputPath: 'static/videos/'
            },
          },
        ],
      });
  
      return config;
    },
  };
  
  export default nextConfig;
  