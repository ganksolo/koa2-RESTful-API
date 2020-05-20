const Router = require('koa-router');
const router = new Router({
    prefix: '/auth'
});
const authController = require('../controllers/authController');
const csrf = require('../helpers/csrf');

router.get('/', (ctx, next) => {
    console.log()
    ctx.body = {
        msg: 'ok'
    }
});

router.get('/verify', authController.varifyMobile);

router.post('/login', authController.login);

module.exports = router