const path = require("path");
var webpack = require("webpack");

module.exports = {
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
      jQuery: "jquery"
    })
  ]
};
