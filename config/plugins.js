const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const { ROOT_PATH } = require('./config')

const plugins = [

  // 打包html
  new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  }),

  // 清除dist
  new CleanWebpackPlugin(['dist'], { root: ROOT_PATH }),
]

module.exports = plugins
