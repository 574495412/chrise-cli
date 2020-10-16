/*
 * @Descripttion: 
 * @Author: xiaodong
 * @Date: 2020-10-15 13:57:53
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { getEntries } = require('../enrty');

module.exports = {
  entry: getEntries(),
  resolve: {
    extensions: ['.js', '.vue'],
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            compact: true,
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10240,
            name: 'img/[name].[hash:7].[ext]',
            esModule: false,
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
