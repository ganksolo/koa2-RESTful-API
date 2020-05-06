const usersService = require('../services/userService');

class UserController {
    async login(ctx) {
        let params = ctx.request.body || ctx.request.query
        let username = escape(params.username)
        data = await usersService.getUserInfoByUserId(username)
        ctx.body = data
    }
}