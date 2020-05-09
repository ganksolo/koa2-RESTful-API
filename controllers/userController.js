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
            msg: 'get user list data success!',
            result: data,
            code: 1,
        }
    }

    async getUserInfo(ctx, next) {
        let data = await userService.getUserInfoByUserId(ctx.params.id);
        ctx.body = {
            msg: `get user info by id =${ctx.params.id}`,
            result: data[0],
            code: 1,
        }
    }

    async updateUserInfo(ctx, next) {
        let data = await userService.updateUserInfo()
        ctx.body = {
            msg: 'update user name by id success!',
            code: 1,
        }
    }
}

module.exports = new UserController();