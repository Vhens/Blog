const usermodel = require('../model/userModel');

const user = {
    /**
   * 登录
   * @param  {object} ctx   上下文
   * @return {object}       结果
   */
  async login ( ctx ) {
    // let form = ctx.request.body;
    const args = {
        username: 'admin',
        password: '21232f297a57a5a743894a0e4a801fc3'
    }
    let result = {
      code: 1,
      msg: '成功',
      data: null
    }
    let userResult = await usermodel.getByUserName(args);
    result.data =  userResult
    return result
  }
}

module.exports = user