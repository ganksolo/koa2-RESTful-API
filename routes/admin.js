const Router = require('koa-router');
const router = new Router({
    prefix: '/admin'
});
const adminController = require('../controllers/adminController');


router.get('/role', adminController.role);

router.get('/auth', adminController.auth);

module.exports = router;