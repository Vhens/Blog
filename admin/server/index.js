const Koa = require('koa');
const path = require('path');
const json = require('koa-json');
const convert = require('koa-convert');
const bodyParser = require('koa-bodyparser');
// const koaStatic = require('koa-static');
// const views = require('koa-views');
const logger = require('koa-logger');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');

const app = new Koa();

const config = require('./config/index');
const routers = require('./routers/index');

/***************session存储配置***************************/ 
const sessionMysqlConfig= {
  user: config.MYSQL.user,
  password: config.MYSQL.password,
  database: config.MYSQL.database,
  host: config.MYSQL.host
};

/****************配置session中间件*******************************/
app.use(session({
  key: 'USER_SID',
  store: new MysqlStore(sessionMysqlConfig)
}));

app.use(convert(bodyParser({
  enableTypes:['json', 'form', 'text']
})));

app.use(convert(json()));

/******************配置控制台日志中间件**********************/  
app.use(convert(logger()));

/*******************初始化路由中间件*******************************/
app.use(routers.routes()).use(routers.allowedMethods())



app.on('error', function(err, ctx){
  console.log(err)
  log.error('server error', err, ctx);
});
module.exports = app;