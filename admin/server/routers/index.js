const router = require('koa-router')();

const login = require('./login');
const user = require('./user');

router.use(login.routes());
router.use(user.routes());

module.exports = router;