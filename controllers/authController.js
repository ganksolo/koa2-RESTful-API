const jwt = require('jsonwebtoken');
const userService = require('../services/authService');

class AuthController {

    async login(ctx, next) {
        ctx.verifyParams({
            username: { type: 'string', require: true },
            password: { type: 'string', require: true }
        })
        const { username, password } = ctx.request.body;
        const userInfo = await userService.queryUser(username);
        if (userInfo[0].password === password) {
            const token = jwt.sign(
                { userInfo: userInfo[0] }, 
                process.env.SECRET_KEY, 
                { expiresIn: '7d' }
            );
            ctx.body = {
                code: 200,
                msg: 'Login Success!',
                token
            }
        }
        
    }

    async varifyMobile(ctx, next) {
        ctx.verifyParams({
            mobile: {type: 'string', require: true}
        });
        const { mobile } = ctx.query;
        const result = await userService.queryMobile(mobile)
        const isExist = result.length > 0 ? true : false;
        ctx.body = {
            code: 200,
            msg: 'Query Ok!',
            data: isExist
        }
    }

    async verifySecretKey(ctx, next) {
        const token = ctx.request.header.authorization;
        try {
            const decode = sign.verify(token.substr(3), secret_key);
            if (decode.user) {
                return {
                    code: 200,
                    data: decode.user
                }
            } else {
                return {
                    code: 403,
                    data: {
                        errInfo: '没有授权'
                    }
                }
            }
        } catch (error) {
            return {
                code: 503,
                data: {
                    errInfo: '解密错误'
                }
            }
        }
    }
}

module.exports = new AuthController();