'use strict'

const Command = require('vorpal/dist/command')

Command.prototype.use = function(fn) {
  return fn(this)
}

const vorpal = require('vorpal')()

vorpal
  .command('shell', 'open up a Vorpal shell')
  .action(() => {
    vorpal.show()
    return Promise.resolve()
  })

module.exports = vorpal
