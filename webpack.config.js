const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  watch: true,
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './index.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015','react','stage-2']
        }
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /de|fr|hu/)
    // new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ]
};

// Configuration refernce:
// https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783