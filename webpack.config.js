const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './src/index.tsx',  // Entry point for your application
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'static', // Generates a static HTML file
      openAnalyzer: false, // Prevents the report from opening automatically
      reportFilename: 'bundle-report.html' // Name of the report file
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html', // Path to your HTML template
      filename: 'index.html', // Output HTML file name
      inject: true, // Inject all assets into the body
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'docs'),  // Change to 'docs'
    clean: true,  // Clears 'docs' before every build
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // Add TypeScript extensions
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,  // Match both .ts and .tsx files
        use: {
          loader: 'babel-loader', // Use babel-loader to handle TypeScript and JSX
          options: {
            presets: [
              '@babel/preset-env', // Transpile modern JavaScript
              '@babel/preset-react', // Handle JSX
              '@babel/preset-typescript' // Handle TypeScript
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,  // Match .css files
        use: ['style-loader', 'css-loader'],  // Use both style-loader and css-loader
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,  // Match image file types
        use: [
          {
            loader: 'file-loader',  // Use file-loader for these file types
            options: {
              name: '[name].[hash].[ext]',  // Output file name pattern
              outputPath: 'images/',  // Output directory for images
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)$/, // Add your font file types here
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]', // Keep original folder structure and file name
          },
        },
      },
    ],
  },
  devtool: 'source-map', // Optional: Enables source maps for debugging
  mode: 'development',  // 'development' for debugging, 'production' for minified builds
  optimization: {
    splitChunks: {
      chunks: 'all', // Options: 'initial', 'async', 'all'
      minSize: 50000, // Minimum size, in bytes, for a chunk to be generated
      maxSize: 100000, // Maximum size, in bytes, for a chunk to be generated
      minChunks: 1, // Minimum number of chunks that must share a module before splitting
      maxAsyncRequests: 30, // Maximum number of parallel requests when on-demand loading
      maxInitialRequests: 30, // Maximum number of parallel requests at an entry point
      automaticNameDelimiter: '~', // Delimiter for generated names
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors', // Unique name for vendor chunks
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          name: 'common', // Unique name for common chunks
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};