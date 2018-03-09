const cors = require('./cors')
const winston = require('./winston')
const page404 = require('./404')
const page500 = require('./500')

module.exports = {
  cors,
  winston,
  page404,
  page500
}