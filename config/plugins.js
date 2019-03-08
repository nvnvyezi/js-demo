const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

const { ROOT_PATH } = require('./config')

const plugins = [

  // 打包html
  new HtmlWebPackPlugin({
    title: '这是一个基础架子',
    template: './src/index.html',
    filename: './index.html',
  }),

  // 清除dist
  new CleanWebpackPlugin(['dist'], { root: ROOT_PATH }),

  // 这些选项帮助快速启用 ServiceWorkers
  // 不允许遗留任何“旧的” ServiceWorkers
  new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true,
  }),
]

module.exports = plugins
