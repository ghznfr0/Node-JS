const requestHandler = require('./handler')

const http = require('http')
const server = http.createServer(requestHandler)

server.listen(3000, () => {
  console.log(`running on 3000`);
})