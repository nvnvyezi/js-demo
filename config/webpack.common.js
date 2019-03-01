const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const { entry, output, relative, ENTRY_PATH, ROOT_PATH } = require('./base')

module.exports = {
  context: ROOT_PATH,

  // entry不是必须
  entry,
  output,

  // 仅在发生错误或新编译时输出
  // stats: 'minimal',
  module: {

    // 不依赖其他库的库，不需要解析他们
    // noParse: //,
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        enforce: 'pre',
        use: [
          {
            loader: 'eslint-loader',
            options: { fix: true }
          }
        ],
        include: ENTRY_PATH,
        exclude: /node_modules/
      },
      {
        test: /\.(jsx?)|(tsx?)$/,
        include: ENTRY_PATH,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.html$/,
        include: ENTRY_PATH,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(c|le)ss$/,
        include: ENTRY_PATH,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        include: ENTRY_PATH,
        use: [
          {

            // 小图片转为DataURL
            loader: 'url-loader',
            options: { limit: 8192 }
          }
        ]
      }

      // {
      //   test: /.(eot|ttf|woff|woff2)$/,
      //   use: 'url-loader'
      // },
    ]
  },
  plugins: [

    // 打包html
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),

    // 清除dist
    new CleanWebpackPlugin(['dist'], { root: ROOT_PATH })

    // new MiniCssExtractPlugin({
    //   filename: "[name].css",
    //   chunkFilename: '[id].css'
    // }),
  ],
  resolve: {
    modules: ['node_modules', ENTRY_PATH],

    // 配合tree-shaking，优先使用es6模块化入口（import）
    mainFields: ['jsnext:main', 'browser', 'main'],
    alias: {

      // '@': path.resolve(__dirname, '../src/'),
      Images: relative('../src/assets/images/')
    },
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx']
  }
}
