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

    async queryFieldInfo(keys, value) {
        let sql = 'SELECT * FROM user WHERE ??=?';
        let result = await query(sql, [keys, value]);
        return result;
    }

    async insertUser(keys, values) {
        let sql = 'INSERT INTO user (??) VALUES (?)';
        let result = await query(query, [keys, values])
        return result;
    }
}

module.exports = new AuthService()