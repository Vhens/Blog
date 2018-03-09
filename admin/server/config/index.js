/*********************配置生产环境********************************/
const prod = {
  SERVER_PORT: 3010, //服务器端口
  MYSQL: { //数据库配置
    host: "localhost",
    user: "root",
    password: "abcd",
    port: "3306",
    database: "test"
  }
}

/********************配置开发者模式**********************************/

const dev = {
  SERVER_PORT: 3010, //服务器端口
  MYSQL: { //数据库配置
    host: "qdm16468273.my3w.com1",
    user: "qdm16468273wreewrewr",
    password: "admin1234qesf",
    port: "3306",
    database: "qdm16468273_db1121",
    supportBigNumbers: true,
    multipleStatements: true,
    timezone: 'utc'
  }
}

const config = dev;

module.exports = config