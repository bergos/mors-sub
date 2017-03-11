'use strict'

const mors = require('mors')
const mqtt = require('mqtt')

class MorsRemote {
  constructor (options) {
    this.router = mors.Router()

    this.topic = options.topic || '#'

    this.client = mqtt.connect(options.broker)

    this.client.on('message', (topic, payload) => {
      this.router.handle({
        topic: topic,
        payload: payload
      }, {}, (err) => {
        if (err) {
          console.error(err.stack || err.message)
        }
      })
    })
  }

  use () {
    this.router.use.apply(this.router, arguments)
  }

  listen () {
    this.client.on('connect', () => {
      this.client.subscribe(this.topic)
    })
  }
}

function factory (options) {
  return new MorsRemote(options)
}

module.exports = factory
