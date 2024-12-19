const handler =  require('./form')

const http = require('http')
const server = http.createServer(handler)

const PORT = 3000
server.listen(PORT, () => {
  console.log(`server running`);
})