'use strict'

const { gauge: metric } = require('../metrics')

const gauge = (_, response) => {
  const operation = Math.random() > 0.5 ? 'inc' : 'dec'
  const value = Math.floor(Math.random() * 100) + 1

  metric[operation](value)

  return response.json({ metric: 'gauge' })
}

module.exports = gauge
