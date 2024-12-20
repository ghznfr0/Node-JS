
const express = require('express')
const requestHandler = require('./requestHandler')

const app = express()

app.use('/', (req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next()
})

app.use('/submit-details' ,(req, res, next) => {
  console.log("second middleware", req.url, req.method);
  res.send('<p>respond yes sent ok</p>')
  // res.send('<h1>ok boss</h1>')
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

