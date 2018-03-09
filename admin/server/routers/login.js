const router = require('koa-router')();
const login = require('../controller/login');
router.get('/api/login', async (ctx, next) => {
   ctx.body = await login.login(ctx);
})
router.post('/', async(ctx, next) => {
  let result = await login.login(ctx);
  ctx.body = result;
});
module.exports = router;