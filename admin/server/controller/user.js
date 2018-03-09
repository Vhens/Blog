const usermodel = require('../model/userModel');

const user = {
  async getUser() {
    let userResult = await usermodel.getUserInfo();
    return userResult;
  }
}
module.exports = user;