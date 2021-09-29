'use strict'

const express = require('express')
const { Registry, collectDefaultMetrics } = require('prom-client')

const controllers = require('./controllers')
const metrics = require('./metrics')

const register = new Registry()
register.registerMetric(metrics.gauge)

collectDefaultMetrics({ register })

const app = express()

app.get('/', controllers.root)
app.get('/gauge', controllers.gauge)

app.get(
  '/metrics',
  async (_, response) => response.send(await register.metrics())
)

app.listen(3000, () => console.log('Listening on 3000'))
