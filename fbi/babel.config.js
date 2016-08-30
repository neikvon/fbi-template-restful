module.exports = (require, ctx) => {
  const path = require('path')
  const nodeModulesPath = ctx.options.node_modules_path

  return {
    presets: [
      'babel-preset-es2015'
    ].map(item => path.join(nodeModulesPath, item)),
    plugins: [
      'babel-plugin-array-includes',
      'babel-plugin-syntax-async-functions',
      'babel-plugin-async-to-promises'
    ].map(item => path.join(nodeModulesPath, item)),
    babelrc: false
  }
}