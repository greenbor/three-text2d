const path = require('path');
const webpack = require('webpack');

module.exports = {

  entry: './src/index.ts',

  output: {
    filename: 'three-text2d.js',
    path: path.join(__dirname, "dist")
  },

  resolve: {
    extensions: ['', '.webpack.js', '.ts', '.js']
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
    ]
  },

  externals: {
    three: "THREE"
  }

}
