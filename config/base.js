const path = require('path')

const relative = url => path.resolve(__dirname, url)

// 项目根目录
const ROOT_PATH = relative('..')

// 入口目录
const ENTRY_PATH = relative('../src/')

// 判断mode
const devMode = 'production' !== process.env.NODE_ENV

// 打包文件入口
const entry = { login: relative('../src/login/index') }

// 出口
const output = { filename: devMode ? 'js/[name].[hash:8].js' : 'js/[name].[chunkhash:8].js' }

module.exports = {
  devMode,
  entry,
  output,
  relative,
  ENTRY_PATH,
  ROOT_PATH
}
