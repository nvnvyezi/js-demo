/* eslint-disable @typescript-eslint/no-var-requires */
const HappyPack = require('happypack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

// const WorkboxPlugin = require('workbox-webpack-plugin')

const plugins = [
  new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html',
    inject: true,
    minify: { collapseWhitespace: true },
    hash: true,
  }),

  // 这些选项帮助快速启用 ServiceWorkers
  // 不允许遗留任何“旧的” ServiceWorkers
  // new WorkboxPlugin.GenerateSW({
  //   clientsClaim: true,
  //   skipWaiting: true,
  // }),

  new HappyPack({
    id: 'css',
    loaders: [
      'style-loader',
      'css-loader',
      'less-loader',
      {
        loader: 'postcss-loader',
        options: {
          exec: true,
          parser: 'sugarss',
          plugins: {
            'postcss-preset-env': {
              browsers: 'last 2 versions',
              autoprefixer: { grid: true },
            },
          },
        },
      },
    ],
  }),
]

module.exports = plugins
