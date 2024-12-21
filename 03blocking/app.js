const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

  console.log('1. ....');

Promise.resolve().then(() => console.log('2.....'))

setTimeout(() => console.log('3.....'), 3000)

fs.readFile('user.txt', () => console.log('4......'))

setImmediate(() => console.log('5.......'))

process.on('exit', (code) => {
  console.log('6.......');
})

console.log('7.....');
})

const PORT = 3000;
server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});


