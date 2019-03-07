const { presets, plugins } = require('./base.js')

const { ENTRY_PATH } = require('./config')
const path = require('path')

const common = {
  include: ENTRY_PATH,
  exclude: /node_modules/,
}

const rules = [
  {
    test: /\.(jsx?|tsx?)$/,
    enforce: 'pre',
    include: path.resolve(__dirname, './src'),
    exclude: /node_modules/,
    use: [
      {
        loader: 'eslint-loader',
        options: { fix: true },
      },
    ],
  },
  {
    test: /\.(jsx?)|(tsx?)$/,
    ...common,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets,
          plugins,
          babelrc: false,
        },
      },
    ],
  },
  {
    test: /\.html$/,
    ...common,
    use: [
      {
        loader: 'html-loader',
        options: { minimize: true },
      },
    ],
  },
  {
    test: /\.(c|le)ss$/,
    ...common,
    use: ['style-loader', 'css-loader', 'less-loader'],
  },
  {
    test: /\.(png|jpg|gif|svg)/,
    ...common,
    use: [
      {

        // 小图片转为DataURL
        loader: 'url-loader',
        options: { limit: 8192 },
      },
    ],
  },

  // {
  //   test: /.(eot|ttf|woff|woff2)$/,
  //   use: 'url-loader'
  // },
]

module.exports = rules
