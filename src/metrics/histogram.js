'use strict'

const { Histogram } = require('prom-client')

const histogram = new Histogram({
  name: 'histogram_metric',
  help: 'Metric to histogram something',
  buckets: [0.1, 5, 15, 50, 100, 500],
})

module.exports = histogram
