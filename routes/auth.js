const Router = require('koa-router');
const router = new Router({
    prefix: '/auth'
});
const authController = require('../controllers/authController');


router.get('/', (ctx, next) => {
    ctx.body = {
        msg: 'ok'
    }
})
router.post('/login', authController.login);

module.exports = router