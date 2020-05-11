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
            code: 200,
            msg: 'get user list data success!',
            data: data
        }
    }

    async getUserInfo(ctx, next) {
        let data = await userService.getUserInfoByUserId(ctx.params.id);
        ctx.body = {
            code: 200,
            msg: `get user info by id =${ctx.params.id}`,
            data: data[0]
        }
    }

    async updateUserInfo(ctx, next) {

        ctx.verifyParams({
            id: {type: 'string', require: true},
            name: { type: 'string', require: true}
        })
        let {
            id,
            name
        } = ctx.request.body;
        // ctx.response.status = 302;
        let data = await userService.updateUserInfo(id, name)
        ctx.body = {
            code: 200,
            msg: `update user ${name} success!`
        }
    }
}

module.exports = new UserController();