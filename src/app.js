import path from 'path'
import Koa from 'koa'
import logger from 'koa-logger'
import serve from 'koa-static'
import routes from './routes'

const app = new Koa()

app.use(logger())

app.use(serve(path.join(process.cwd(), 'dst/client/')))

const router = routes()
app
  .use(router.routes())
  .use(router.allowedMethods({
    throw: true
  }))

const port = 3000

app.listen(port, async (err) => {
  if (err) {
    throw err
  }
  console.log(`Server started at http://localhost:${port}`)
})

export default app
