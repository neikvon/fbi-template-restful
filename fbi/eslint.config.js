module.exports = (require, ctx) => {
  const nodeModulesPath = ctx.options.node_modules_path
  return {
    extends: nodeModulesPath + '/eslint-config-airbnb-base',
    parser: nodeModulesPath + '/babel-eslint',
    parserOptions: {
      sourceType: "module",
      allowImportExportEverywhere: false
    },
    rules: {
      semi: [2, 'never'], // 行尾不要使用分号
      'comma-dangle': [2, 'never'], // 对象最后一项 不使用逗号
      'no-console': [0], // 可以使用console
      'no-param-reassign': [0], // https://github.com/airbnb/javascript#functions--mutate-params
    }
  }
}