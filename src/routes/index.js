/**
 * 总路由
 * 含直出路由和ajax API路由
 */
import Router from 'koa-router'
import ApiRouter from './api'

class AppRouter {

  constructor() {
    this.router = new Router()
    this.api()
  }

  api() {
    this.router.use((new ApiRouter()).router.routes())
  }

}

export default () => {
  const appRouter = new AppRouter()
  return appRouter.router
}
