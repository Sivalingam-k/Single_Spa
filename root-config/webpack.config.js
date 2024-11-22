const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point of your React app
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory for bundled files
    filename: 'bundle.js',  // Output bundle filename
    publicPath: '/',  // Public path for serving assets
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // Serve static files from the public directory
    },
    port: 8080,  // Port for the dev server
    hot: true,  // Enable hot reloading
    historyApiFallback: true,  // Enable history API fallback
    open: true,  // Open browser automatically
  },

  resolve: {
    extensions: ['.js', '.jsx'],  // Resolve .js and .jsx files
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,  // Babel loader for JavaScript and JSX files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,  // Regex for .css files
        use: ['style-loader', 'css-loader'],  // Apply CSS loaders to handle CSS files
      },
    ],
  },

  devtool: 'source-map',  // Enable source maps for debugging
};
