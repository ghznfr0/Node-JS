
const fs = require('fs');
const { stringify } = require('querystring');

const handler = (req, res) => {
  console.log(req.url, req.method);
if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Form</title></head>')
  res.write('<body><h1>Enter your Details</h1>')
    
res.write('<form action="/submit-details" method="POST" >')
res.write('<input type="text" name="username" placeholder="enter name"/>')

res.write('<label for="male">Male</label>')
res.write('<input type="radio" id="male" name="gender" value="male"/>')

res.write('<label for="female">Female</label>')
res.write('<input type="radio" id="female" name="gender" value="female"/>') //remove value to check
res.write('<input type="submit" value= "Submit" />')
res.write('</form>')

  res.write('</body>')
  res.write('</html>')
  return res.end()

} else if(req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
  const body = []
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk)
    })
    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString()
      console.log(fullBody);
      
      const params = new URLSearchParams(fullBody)
      // const bodyObj = {}
      // for(const [key, value] of params.entries()){
      //     bodyObj[key] = value;
      // }
      const bodyObj = Object.fromEntries(params)
      console.log(bodyObj);
      fs.writeFile('user.txt', JSON.stringify(bodyObj), error => {
        console.log("data written");
        res.statusCode = 302
    res.setHeader('Location', '/')
    return res.end()
      })
    })

    
    
} else {
  res.write('<body><h1>Page Not Found</h1></body>')
  res.end()
}


}

module.exports = handler;