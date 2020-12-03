const Koa = require('koa')
const serve = require('koa-static')

const app = new Koa();

const PORT = process.env.PORT || 3000;

app.use(async (ctx, next) => {
  const origin = `${ctx.request.protocol}://${ctx.request.host}`
  ctx.set('AMP-Access-Control-Allow-Source-Origin', origin);
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Credentials', 'true');
  await next()
})

app.use(serve(__dirname + '/dist'));

app.listen(PORT)
console.log(`listening on port ${PORT}`)
