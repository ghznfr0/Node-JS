const express = require('express')
const path = require('path')
const hostRouter = express.Router()
const rootDir = require('../utils/pathUtils')

hostRouter.use(express.static(path.join(rootDir, 'public')))
hostRouter.get('/add-home', (req, res, next) => {
  console.log('home added', req.body);
  res.sendFile(path.join(rootDir, 'views', 'add-home.html'))
})

const registeredHomes = []

hostRouter.post('/add-home', (req, res, next) => {
  registeredHomes.push({houseName: req.body.houseName})
  res.sendFile(path.join(rootDir, 'views', 'home-added.html'))
})

exports.hostRouter = hostRouter
exports.registeredHomes = registeredHomes