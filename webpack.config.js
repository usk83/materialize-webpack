const path = require("path");
var webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: path.join(__dirname, "js", "main.js"),
  output: {
    path: path.join(__dirname, "js"),
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, 'node_modules', 'jquery')
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    })
  ]
}, {
  entry: path.join(__dirname, 'scss', 'main.scss'),
  output: {
    path: path.join(__dirname, 'css'),
    filename: 'bundle.css'
  },
  devtool: 'source-map',
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
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                outputStyle: 'expanded',
                sourceMap: true
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
