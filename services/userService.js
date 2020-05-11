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
    async updateUserInfo(id, username) {
        let sql = 'UPDATE user SET name=? WHERE id=?';
        let result = await query(sql, [username, id]);
        return result;
    }
}

module.exports = new usersService()