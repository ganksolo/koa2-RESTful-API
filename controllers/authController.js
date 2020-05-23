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

    async register(ctx, next) {
        const {
            name,
            password,
            nick,
            email,
            mobile
        } = ctx.request.body;
        ctx.verifyParams({
            name: { type: 'string', require: true },
            password: { type: 'password', require: true },
            nick: { type: 'string', require: true },
            email: { type: 'email', require: true },
            mobile: { type: 'number', require: true },
        })

        const params = ctx.request.body;
        const keys = Object.keys(params);
        const vals = Object.values(params);
        const result = await userService.insertUser(keys, vals);
        if(result) {
            ctx.body = {
                code: 200,
                msg: 'Insert user sucess!',
                data: {
                    id: result.insertId
                }
            }
        }
    }

    async varify(ctx, next) {
        const key = Object.keys(ctx.query)[0];
        ctx.verifyParams({
            [key || 'queryFieldName']: {type: 'string', require: true}
        });
        const val = ctx.query[key];
        const result = await userService.queryFieldInfo(key, val)
        const isExist = result.length > 0 ? true : false;
        ctx.body = {
            code: 200,
            msg: `'${key}' Field Query Ok!`,
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