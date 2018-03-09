const router = require('koa-router')();
const user = require('../controller/user');
router.get('/api/user', async (ctx, next) => {
   ctx.body = await user.getUser(ctx);
})
module.exports = router;