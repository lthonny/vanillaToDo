const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
// const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  target: 'node',
  mode: "development",
  entry: [
    './src/index.js',
    '@babel/polyfill'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext]',
  },
  module: {
    rules: [
      // {
      //   // enforce: 'pre',
      //   test: /\.js$/,
      //   // loader: 'eslint-loader',
      //   exclude: '/node_modules/',
      //   loader: "babel-loader"
      // },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      // {
      //   test: /\.js$/,
      //   loader: 'babel-loader',
      //   // exclude: '/node_modules/',
      //   query: {compact: false}
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: "./src/img/favicon.svg"
    }),
    new Dotenv({
      path: './.env'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9999,
  },
}