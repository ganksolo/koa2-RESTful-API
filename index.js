const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const parameter = require('koa-parameter');
const koaStatic = require('koa-static');
const jwt = require('koa-jwt');
const path = require('path');


const app = new Koa();
const errorRoute = require('./middleware/errRouteCatch');
const routes = require('./routes/index');



app.use(koaStatic(
    path.join(__dirname, './assets/')
));



app.use(jwt({ secret: process.env.SECRET_KEY }).unless({
    path: [/^\/public|\/auth|\/assets/]
}));

app.use(parameter(app));
// router error
// app.use(errorRoute());

// 使用ctx.body解析中间件
app.use(koaBody({
    multipart: true,
    parsedMethods: ['POST', 'PUT', 'PATCH', 'GET', 'HEAD', 'DELETE'], // parse GET, HEAD, DELETE requests
    formidable: {
        uploadDir: path.join(__dirname, './assets/uploads/tmp'), // 上传目录
        keepExtensions: true,    // 保持文件的后缀
        maxFieldsSize: 2 * 1024 * 1024, // 文件上传大小
    },
}));


// 注册所有路由
routes(app);


app.listen(3000, () => {
    console.log('[demo] route-use-middleware is starting at port 3000')
});
