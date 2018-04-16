const path = require('path');
const Dotenv = require("dotenv-webpack");

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './js/index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },
  devtool: "source-map",
  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: "./.env",
      safe: false
    })
  ]
};
