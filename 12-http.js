const http = require('http');

const server = http.createServer((req, res) => {
  if(req.url === '/'){
    res.end("Welcome to our homepage")
  }
  if(req.ulr === '/about'){
    res.end("This is our about page")
  }
  res.end(`
  <h1>Oops!</h1>
  <p>We can't find the page you are looking for.</p>
  <a href="/">Back to homepage</a>
  `)
})

server.listen(5000)