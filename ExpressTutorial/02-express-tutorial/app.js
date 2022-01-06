const http = require('http')

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'}) //providing headers/metadata
    res.write('<h1>Home Page</h1>')
    res.end()
})

server.listen(5000)
