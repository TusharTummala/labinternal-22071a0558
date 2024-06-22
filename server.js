const http = require('http')

let httpServer=http.createServer()

httpServer.listen(4000,()=>console.log('http server on port 4000'))
