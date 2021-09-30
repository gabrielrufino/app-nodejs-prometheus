'use strict'

const { summary: metric } = require('../metrics')

const summary = (_, response) => {
  const value = Math.floor(Math.random() * 100) + 1
  metric.observe(value)

  return response.json({ metric: 'summary' })
}

module.exports = summary
