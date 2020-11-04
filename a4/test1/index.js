const http = require('http')
const url = require('url')
const date = require('./date')

http.createServer((req, res) => {
  
  console.log(`${req.method} ${req.url} ${date.myDateTime()}`)
  
  const parsedUrl = url.parse(req.url,true)
  const parsedUrl2 = url.parse(req.url,false)

  res.writeHead(200, { 'Content-type': 'text/html; charset=utf-8' })
  res.write(`<p>${date.myDateTime()}</p>`)
  res.write(`<pre>True: ${JSON.stringify(parsedUrl.query)}</pre>`)
  res.write(`<pre>False: ${JSON.stringify(parsedUrl2.query)}</pre>`)

  const {a,b} = parsedUrl.query
  res.write(`Resultado: ${a} + ${b} = ${parseInt(a)+parseInt(b)}`)
  res.end()

}).listen(8080)

console.info('Server listening on 8080')
