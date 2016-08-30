// js lint
function lintServer() {
  const CLIEngine = require('eslint').CLIEngine
  const eslintConfig = require('./eslint.config')(require, ctx)
  const cli = new CLIEngine(Object.assign({ envs: ['node'] }, eslintConfig))
  const report = cli.executeOnFiles(['src/'])
  const formatter = cli.getFormatter()
  console.log(formatter(report.results))
}

// start server
function startServer() {
  const nodemon = require('nodemon')
  nodemon({
    script: 'index.js',
    ext: 'js json',
    ignore: [
      '.git',
      'node_modules',
      'dst',
      'test'
    ],
    env: {
      'NODE_ENV': 'development'
    },
    watch: [
      'src',
      'index.js'
    ]
  })

  nodemon.on('start', () => {
    ctx.log('App has started', 1)
  }).on('quit', () => {
    ctx.log('App has quit')
  }).on('restart', files => {
    ctx.log(`App restarted due to: ${files.join(', ')}`)
  })
}

lintServer()
startServer()