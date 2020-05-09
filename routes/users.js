const Router = require("koa-router");
const router = new Router({
    prefix: '/user'
});
const userController = require('../controllers/userController');


router.get('/test', (ctx, next) => {
    ctx.body = {
        msg: 'test',
        query: ctx.query,
        querystring: ctx.querystring,
        param: ctx.params
    }
})


router.get('/list', userController.getUserList);
router.get('/:id', userController.getUserInfo);

module.exports = router;