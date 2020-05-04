const Koa = require('koa');
const app = new Koa();

const KoaRouter = require('koa-router');
// const api = require('./api/test');
const router = new KoaRouter();

// //注册路由
router.get('/', (ctx, next) => {
    // const start = new now();
    // ctx.body = "hello world"
    // await next();
    // const ms = Date.now() - start;
    // console.log(`${ctx.method}--${ctx.url}--${ms}ms`);
    console.log('index');
    ctx.body = 'index';
})


// 加载路由中间件
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
});
