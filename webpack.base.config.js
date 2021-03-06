var path = require("path");
var webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: {
    // Add as many entry points as you have container-react-components here
    huntmaster: './src/js/HuntMaster',
    vendors: ['react', 'semantic-ui-react', 'jquery', './src/vendor/js/semantic-ui/sidebar.js']
  },

  output: {
      path: path.resolve('./static/'),
      filename: "[name].js"
  },

  externals: [
  ], // add all vendor libs

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ], // add all common plugins here

  module: {
    loaders: [] // add all common loaders here
  },

  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
};