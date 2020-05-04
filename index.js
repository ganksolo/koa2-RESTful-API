const Koa = require('koa');
const app = new Koa();

const KoaRouter = require('koa-router');
// const api = require('./api/test');
const apiRouter = new KoaRouter();

apiRouter.prefix('/api');

// 配置get路由
apiRouter.get('/get', (ctx, next) => {
    ctx.body = {
        msg: 'test',
        query: ctx.query,
        querystring: ctx.querystring,
    }
})
// 配置post路由
apiRouter.post('/post', (ctx, next) => {
    ctx.body = 'this is a post response!'
})

const adminRouter = new KoaRouter();

adminRouter.get('/', async (ctx, next) => {
    const start = Date.now();
    ctx.body = "hello world11"
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method}--${ctx.url}--${ms}ms`);
})

adminRouter.get('/get', (ctx, next) => {
    ctx.body = 'this is get res!';
})



// 注册路由中间件
app.use(adminRouter.routes(), adminRouter.allowedMethods())
app.use(apiRouter.routes(), apiRouter.allowedMethods())


app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
});
