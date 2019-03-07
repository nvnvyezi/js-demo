const path = require('path')

const devMode = 'production' !== process.env.NODE_ENV

module.exports = {
  ENTRY_PATH: path.resolve(__dirname, '../src/**/*'),
  ROOT_PATH: path.resolve(__dirname, '../'),
  ENTRY: {

    // login: path.resolve(__dirname, '../src/login/index'),
    test: path.resolve(__dirname, '../src/index'),
  },
  OUTPUT: { filename: devMode ? 'js/[name].[hash:8].js' : 'js/[name].[chunkhash:8].js' },
}
