/* jshint esversion: 6 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src', 'index.html')
  })],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      }
    ]
  }
};
