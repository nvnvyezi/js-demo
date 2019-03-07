const path = require('path')

const rules = require('./rules')
const plugins = require('./plugins')
const { ENTRY_PATH, ENTRY, ROOT_PATH, OUTPUT } = require('./config')

module.exports = {
  context: ROOT_PATH,
  entry: ENTRY,
  output: OUTPUT,

  // 仅在发生错误或新编译时输出
  // stats: 'minimal',
  module: {

    // 不依赖其他库的库，不需要解析他们
    // noParse: //,
    rules,
  },
  plugins,
  resolve: {
    modules: ['node_modules', ENTRY_PATH],

    // 配合tree-shaking，优先使用es6模块化入口（import）
    mainFields: ['jsnext:main', 'browser', 'main'],
    alias: {

      // '@': path.resolve(__dirname, '../src/'),
      Images: path.resolve(__dirname, '../src/assets/images/'),
    },
    extensions: ['.js', '.json', '.jsx', '.ts', '.tsx'],
  },
}
