const express = require('express')
const path = require('path')
const basePath = require('../utils/pathUtils')
const contactRouter = express.Router()

contactRouter.get('/contact-us', (req, res, next) => {
  res.sendFile(path.join(basePath, 'views', 'contact-us.html'))
})

contactRouter.post("/contact-us", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(basePath, 'views', 'contact-success.html'))
})

module.exports = contactRouter