const express = require('express')
const path = require('path')
const homeRouter = require('./routes/homeRouter')
const contactRouter = require('./routes/contactRouter')
const basePath = require('./utils/pathUtils')
const app = express()

app.use(express.urlencoded())

app.use(homeRouter)
app.use(contactRouter)

app.use((req, res, next) => {
  res.sendFile(path.join(basePath, 'views', '404.html'))
})
app.listen(3000, () => {
  console.log('ruuning');
})