'use strict'

const resolve = require('./resolve')

let config = undefined

try {
  config = require(resolve('app.config.js'))
} catch (e) {
  // no config
}

module.exports = config
