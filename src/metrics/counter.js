'use strict'

const { Counter } = require('prom-client')

const counter = new Counter({
  name: 'counter_metric',
  help: 'Metric to count something'
})

module.exports = counter
