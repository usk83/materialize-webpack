const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined;
const devtool = isDevelopment ? 'source-map' : '';
const styleOutputStyle = isDevelopment ? 'expanded' : 'compressed';

module.exports = [{
  entry: path.join(__dirname, 'js', 'main.js'),
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'bundle.js'
  },
  cache: isDevelopment,
  devtool: devtool,
  resolve: {
    alias: {
      jquery: path.join(__dirname, 'node_modules', 'jquery')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
}, {
  entry: path.join(__dirname, 'scss', 'main.scss'),
  output: {
    path: path.join(__dirname, 'css'),
    filename: 'bundle.css'
  },
  cache: isDevelopment,
  devtool: devtool,
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: isDevelopment
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: styleOutputStyle,
                sourceMap: isDevelopment
              }
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: `file-loader?name=../[path][name].[ext]`
      },
      {
        test: /\.(woff|woff2|eot|ttf|)$/,
        use: 'file-loader?name=../fonts/[name].[ext]'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('bundle.css')
  ]
}];
