const express = require('express')
const path = require('path')
const basePath = require('../utils/pathUtils')
const homeRouter = express.Router()

homeRouter.get('/', (req, res, next) => {
  res.sendFile(path.join(basePath, 'views', 'home.html'))
})

module.exports = homeRouter