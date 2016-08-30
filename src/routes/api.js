/**
 * ajax api
 */
import requireDirectory from 'require-directory'
import Router from 'koa-router'

const ctrls = requireDirectory(module, '../controllers')

export default class ApiRouter {

  constructor() {
    this.router = new Router({
      prefix: '/api'
    })
    this.onRoutes()
  }

  onRoutes() {
    this.router
      //  API 路由
      .get('/:apiModule/:apiName', async (ctx, next) => {
        try {
          ctrls[ctx.params.apiModule].default[ctx.params.apiName](ctx, next)
        } catch (e) {
          ctx.body = {
            code: 0,
            err_msg: {
              url: ctx.url,
              msg: e.message
            }
          }
        }
      })
  }

}
