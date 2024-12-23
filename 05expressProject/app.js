const express = require('express')
const fs = require('fs')
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
    <h1>please give your details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" placeholder="Enter Name" name="username"  />
    <input type="email" placeholder="Enter Email" name="email"  />
    <input type="submit" value="Submit">
  </form>
    `)
})

app.post("/contact-us", (req, res, next) => {
  console.log('Handling /contact-us for POST');
  res.send(`<h1>Thank for details</h1>`)
  
  const body = []
  req.on('data', (chunk) => {
    console.log(chunk);
    body.push(chunk)
  })

  req.on('end', () => {
    const fullBody = Buffer.concat(body).toString()
    const params = new URLSearchParams(fullBody)
    const formData = Object.fromEntries(params)

    fs.writeFile('user.txt', JSON.stringify(formData), err => {
      console.log("data written");
      
    })
  })
})


app.listen(3000, () => {
  console.log('ruuning');
})