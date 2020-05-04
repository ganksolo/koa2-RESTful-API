const Router = require('koa-router');
const router = new Router();

router
    .get('/api/', (ctx, next) => {
        ctx.body = 'hello world';
    })
    .get('/api/test', (ctx, next) => {
        ctx.body = {
            msg: 'test',
            query: ctx.query,
            querystring: ctx.querystring,
        }
    })
    .post('/api/users/:id', (ctx, next) => {
        // pass
    })

module.exports = router