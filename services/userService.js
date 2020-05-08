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
}

module.exports = new usersService()