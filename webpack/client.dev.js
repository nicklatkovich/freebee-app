const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/app/index.jsx',
    './src/res/style/main.sass',
  ],
  output: {
    path: path.join(__dirname,'/../public'),
    filename: './bundle.js',
    publicPath: '/static/',
  },
  devServer: {
    hot: true,
    // contentBase: path.join(__dirname, '/../public/'),
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-0'],
          },
        },
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }]
      },
      {
        test: /\.(TTF|otf|eot|ttf|woff|woff2)$/,
        use: [{
          loader: 'file-loader',
          options: {}
        }]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};