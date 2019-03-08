const path = require('path')

const devMode = 'production' !== process.env.NODE_ENV

module.exports = {
  ENTRY_PATH: path.resolve(__dirname, '../src/'),
  ROOT_PATH: path.resolve(__dirname, '../'),
  OUTPUT_PATH: path.resolve(__dirname, '../dist/page'),
  DLL_OUTPUT_PATH: path.resolve(__dirname, '../dist/dll'),
  DLL_PATH: path.join(__dirname, '../dist/dll', 'vendor/[name]-manifest.json'),
  ENTRY: {
    login: path.resolve(__dirname, '../src/login/index'),
    test: path.resolve(__dirname, '../src/index'),
  },
  OUTPUT: {
    filename: devMode ? 'js/[name].[hash:8].js' : 'js/[name].[chunkhash:8].js',
    publicPath: './',
  },
}
