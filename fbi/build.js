const fs = require('fs-extra')
const rm = require('rimraf')
const nodeModulesPath = ctx.options.node_modules_path

// clean
rm.sync('./dst')

// 服务端编译
function buildServer() {
  const glob = require('glob')
  const babel = require('babel-core')
  const babelConfig = require('./babel.config')(require, ctx)

  glob('./src/**/*.js', (er, files) => {
    files.map(item => {
      const dst = item.replace('/src', '/dst')
      babel.transformFile(item, babelConfig, (err, result) => {
        fs.outputFile(dst, result.code, (err) => {
          if (err) {
            ctx.log(err, 0)
          } else {
            ctx.log(dst)
          }
        })
      })
    })
  })
}

buildServer()