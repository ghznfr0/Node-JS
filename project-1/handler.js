const sumRequest = require('./sum');

const requestHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Calculator</title></head>
      <body>
        <h1>Welcome to Calculator</h1>
        <a href='/calculator'>Go to Calculator</a>
      </body>
      </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === '/calculator' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
      <head><title>Calculator</title></head>
      <body>
        <h1>Here is the Calculator</h1>
        <form action='/calculate-result' method='POST'>
          <input type='text' placeholder='first num' name='first'/>
          <input type='text' placeholder='second num' name='second'/>
          <input type='submit' value='Sum'/>
        </form>
      </body>
      </html>
    `);
    return res.end();
  } else if (req.url.toLowerCase() === '/calculate-result' && req.method === 'POST') {
    return sumRequest(req, res);
  }

  res.setHeader('Content-Type', 'text/html');
  res.write(`
    <html>
    <head><title>404</title></head>
    <body>
      <h1>404 Page Not Found</h1>
      <a href='/'>Go to Home</a>
    </body>
    </html>
  `);
  res.end();
};

module.exports = requestHandler;
