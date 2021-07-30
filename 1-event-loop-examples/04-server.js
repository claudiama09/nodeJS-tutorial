const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})

// listen is asynchronous, and the moment we set it up, event loop is waiting for those requests to come in 
// and once they come in, we will run our callback
server.listen('5000', () => {
  console.log('Server is listening on port: 5000...')
})