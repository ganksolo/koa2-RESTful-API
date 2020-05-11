const Router = require("koa-router");
const router = new Router({
    prefix: '/api/users'
});
const userController = require('../controllers/userController');


router.get('/test', (ctx, next) => {
    ctx.body = `Requst Body: ${JSON.stringify(ctx.request.body)}`
})


router.get('/list', userController.getUserList);

router.get('/:id', userController.getUserInfo);

router.put('/:id', userController.updateUserInfo)

module.exports = router;