const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {

    if (req.url.match(/\/[1-3]$/)) {
        const num = req.url.split("/")[req.url.length - 1]
        fs.readFile('pag' + 1 + '.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
            res.write(data)
            console.log(data.toString())
            res.end()
        })
    }
    else{
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<p>O url não corresponde ao esperado</p>')
        res.end()
    }


}).listen(3000)

console.info('Server listening on 3000')
