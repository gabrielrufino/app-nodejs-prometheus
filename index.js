'use strict'

const express = require('express')
const { Registry, collectDefaultMetrics } = require('prom-client')

const register = new Registry()

collectDefaultMetrics({ register })

const app = express()

app.get('/', (_, response) => {
  return response.json({ message: 'Hello, world!' })
})

app.get('/metrics', async (_, response) => {
  return response.send(
    await register.metrics()
  )
})

app.listen(3000, () => console.log('Listening on 3000'))
