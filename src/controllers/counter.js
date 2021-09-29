'use strict'

const { counter: metric } = require('../metrics')

const gauge = (_, response) => {
  metric.inc(1)

  return response.json({ metric: 'counter' })
}

module.exports = gauge
