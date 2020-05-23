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

router.get('/verify', authController.varify);

router.post('/login', authController.login);

router.post('/register', authController.register)

module.exports = router