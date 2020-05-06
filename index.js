const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const errorRoute = require('./middleware/errRouteCatch');
const routes = require('./routes/index');



// router error
app.use(errorRoute());

// 注册所有路由
routes.forEach(router => {
    app.use(router.routes(), router.allowedMethods());
})


app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
});
