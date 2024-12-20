const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()

app.use((req, res, next) => {
  console.log('1st mdlrwr');
  next()
})

app.use((req, res, next) => {
  console.log('2nd mdlrwr');
  // res.send('<h1>respond send</h1>')
  next()
})

// app.use((req, res, next) => {
//   console.log('3rd mdlrwr');
//   res.send('<h1>respond</h1>')
// })

app.get('/', (req, res, next) => {
  console.log('Handling / for GET');
  res.send(`
    <h1>respond 4th</h1>
    `)
})

app.get('/contact-us', (req, res, next) => {
  console.log('Handling /contact-us for GET');
  res.send(`
    
    `)
})

app.post("/contact-us", (req, res, next) => {
  console.log('First Handling', req.body);
  next()
})

app.use(bodyParser.urlencoded())

app.post("/contact-us", (req, res, next) => {
  console.log('Second Handling /contact-us for POST', req.body);
  res.send(`<h1>Thank for details</h1>`)
})


app.listen(3000, () => {
  console.log('ruuning');
})