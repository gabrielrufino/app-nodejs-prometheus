'use strict'

const root = (_, response) => {
  return response.json({ message: 'Hello, world!' })
}

module.exports = root
