'use strict'

const { Gauge } = require('prom-client')

const gauge = new Gauge({
  name: 'gauge_metric',
  help: 'Metric to gauge something',
})

module.exports = gauge
