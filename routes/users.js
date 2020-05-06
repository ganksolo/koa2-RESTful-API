const Router = require("koa-router");
const router = new Router();


router.get('/user', (ctx, next) => {
    ctx.body = {
        msg: 'test',
        query: ctx.query,
        querystring: ctx.querystring,
    }
})

router.post('/id', (ctx, next) => {
    ctx.body = 'this is a post for Users id!'
})

module.exports = router;