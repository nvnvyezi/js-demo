const path = require('path')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { OUTPUT_PATH } = require('./config.js')

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  output: { path: OUTPUT_PATH },
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        include: path.resolve(__dirname, '../src/'),
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({

      // css内容不变不重复构建
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ],
})
