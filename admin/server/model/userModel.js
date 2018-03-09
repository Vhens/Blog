const mysqlHelper = require('../db/mysql.js');
console.log(mysqlHelper)

const userModel = {
  /**
   * 根据UserName得到一条数据
   * @param  {object} args  参数
   * @return {object}       结果
   */
  async getByUserName( args ){
    let sql = 'select user_name, user_pwd from user where user_name = ?'
    let params = [args.username]
    let result = await mysqlHelper.query(sql, params);
    console.log('13', result)
    return result
  },
  /**
   * 获取用户信息
   */
  async getUserInfo() {
    let sql = 'select * from  user';
    let result = await mysqlHelper.query(sql);
    return result;
  }
}

module.exports = userModel;