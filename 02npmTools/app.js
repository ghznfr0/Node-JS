// const testingSyntax = require('./errors.js')
// const runTime = require('./runTime.js')
// const handler = require('./form.js')
const http = require('http');

const server = http.createServer((req, res) => {
    res.write('made again yes ok and again')
    // testingSyntax()
    // runTime()
    // handler()
    res.end()
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

