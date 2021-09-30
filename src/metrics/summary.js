'use strict'

const { Summary } = require('prom-client')

const summary = new Summary({
  name: 'summary_metric',
  help: 'Metric to summary something',
  percentiles: [0.01, 0.1, 0.9, 0.99],
})

module.exports = summary
