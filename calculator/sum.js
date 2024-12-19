const { buffer } = require("node:stream/consumers");

const sumRequest = (req, res) => {
    console.log('in sum request handlwr', req.url);
    const body = []
    let result;
    req.on('data', (chunks) => {
      body.push(chunks)
    })
    req.on('end', () => {
    const bodyStr = Buffer.concat(body).toString()
    const params = new URLSearchParams(bodyStr)
    const bodyObj = Object.fromEntries(params)
    result = Number(bodyObj.first) + Number(bodyObj.second)
    console.log(bodyObj);
    
    console.log(result);
    
    })
    res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head><title>404</title></head>
    <body>
      <h1>Your sum is ${result}</h1>
      <a href='/'>Go to Home</a>
    </body>
    </html>
  `);
  return res.end();
}
module.exports = sumRequest