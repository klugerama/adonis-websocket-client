'use strict'

/*
 * adonis-websocket-client
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

if (process.env.app && process.env.app.logger.level !== 'debug') {
  const Debug = require('debug')
  Debug.enable('adonis:*')
  module.exports = Debug('adonis:websocket')
} else {
  module.exports = function () {}
}
