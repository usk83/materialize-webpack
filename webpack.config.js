const path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: path.join(__dirname, "js", "main.js"),
  output: {
    path: path.join(__dirname, "js"),
    filename: "bundle.js"
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};
