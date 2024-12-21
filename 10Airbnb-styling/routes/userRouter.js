const path = require('path')
const express = require('express');
const { registeredHomes } = require('./hostRouter');
// const rootDir = require('../utils/pathUtils')

const userRouter = express.Router()

userRouter.get('/', (req, res, next) => {
  console.log(registeredHomes);
  
  res.render('home', {registeredHomes: registeredHomes,
    pageTitle: 'Airbnb Home'
  })
})

module.exports = userRouter