const { query } = require('../db/query');
const mysql = require('mysql')

class AuthService {
    async getUserInfoByUserId(id) {
        try {
            let sql = 'SELECT * FROM user WHERE id=?';
            let userInfo = await query(sql, id);
            return userInfo;
        } catch (error) {
            console.log(error.sql)
        }
    }

    async queryUser(username) {
        try {
            let sql = 'SELECT * FROM user WHERE name=?';
            let result = await query(sql, username);
            return result;
        } catch (error) {
            console.log(error.sql)
        }
    }

    async queryFieldInfo(keys, value) {
        try {
            let sql = 'SELECT * FROM user WHERE ??=?';
            let result = await query(sql, [keys, value]);
            return result;
        } catch (error) {
            console.log(error.sql)
        }
    }

    async insertUser(keys, values) {
        try {
            let sql = 'INSERT INTO user (??) VALUES (?)';
            let result = await query(sql, [keys, values])
            return result;
        } catch (error) {
            console.log(error.sql)
        }
    }
}

module.exports = new AuthService()