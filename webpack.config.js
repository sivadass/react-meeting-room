const path = require('path');
const webpack = require('webpack');
module.exports = {
  watch: true,
  context: path.resolve(__dirname, './src/js'),
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
      }
    ]
  }
};

// Configuration refernce:
// https://blog.madewithenvy.com/getting-started-with-webpack-2-ed2b86c68783