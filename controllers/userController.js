const userService = require('../services/userService');

class UserController {
    async login(ctx, next) {
        let params = ctx.request.body || ctx.request.query
        let username = escape(params.username)
        data = await userService.getUserInfoByUserId(username)
        ctx.body = data
    }

    async getUserList(ctx, next) {
        let data = await userService.getUserList();
        ctx.body = {
            msg: 'get user list data success!!!!',
            result: data
        };
    }

    async getUserInfo(ctx, next) {
        let data = await userService.getUserInfoByUserId(ctx.params.id);
        ctx.body = {
            msg: `get user info by id =${ctx.params.id}`,
            result: data
        }
    }
}

module.exports = new UserController();