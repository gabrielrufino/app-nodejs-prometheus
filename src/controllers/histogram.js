'use strict'

const { histogram: metric } = require('../metrics')

const histogram = (_, response) => {
  const value = Math.random() * 500
  metric.observe(value)

  return response.json({ metric: 'histogram' })
}

module.exports = histogram
