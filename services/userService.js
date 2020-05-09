const { query } = require('../db/query');

class usersService {
    async getUserInfoByUserId(id) {
        let sql = 'SELECT * FROM user WHERE id=?';
        let userInfo = await query(sql, id);
        return userInfo;
    }
    async getUserList() {
        let sql = 'SELECT * FROM user';
        let userList = await query(sql);
        return userList;
    }
    async updateUserInfo() {
        let sql = 'UPDATE user SET name=? WHERE id=?';
        let query = await query(sql, [username, id]);
        return query;
    }
}

module.exports = new usersService()