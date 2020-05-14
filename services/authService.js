const { query } = require('../db/query');

class AuthService {
    async getUserInfoByUserId(id) {
        let sql = 'SELECT * FROM user WHERE id=?';
        let userInfo = await query(sql, id);
        return userInfo;
    }

    async queryUser(username) {
        let sql = 'SELECT * FROM user WHERE name=?';
        let result = await query(sql, username);
        return result;
    }
}

module.exports = new AuthService()