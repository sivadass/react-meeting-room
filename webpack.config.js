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
  devtool: 'source-map',
  resolve: {
    alias: {
      moment: 'moment/src/moment'
    },
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env','react','stage-2']
        }
      },
      {
        test: /\.scss?$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader!sass-loader'
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
  devServer: {
    contentBase: path.join(__dirname, "/"),
    //compress: true,
    port: 9000
  }
};