const http = require('http')
const server = http.createServer()

server.listen(3000, () => {
  console.log(`running on 3000`);
})