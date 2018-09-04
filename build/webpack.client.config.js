const base = require('./webpack.base.config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = Object.assign({}, base, {
  plugins: base.plugins || []
})
config.plugins.push(
  new ExtractTextPlugin('assets/css/styles.css')
)
config.module.rules
  .filter(x => {
    return x.loader === 'vue-loader'
  })
  .forEach(x => (x.options.extractCSS = true))
module.exports = config
