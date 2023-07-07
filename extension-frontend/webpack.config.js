const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    background: './src/background/background.js',
    content: './src/contentScript/content.js',
    popup: './src/popup/popup.js',
    options: './src/options/options.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Add any additional loaders or rules needed for your project
    ],
  },
  plugins: [
    new HtmlPlugin({
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlPlugin({
        filename: 'options.html',
        chunks: ['options'],
      }),
    new CopyPlugin({
      patterns: [
        {
            from: './public', 
            to: '.' 
        },
        {
            from: './src/static',
            to: '.'
        }
      ],
    }),
  ],
  devtool: 'cheap-source-map'
};