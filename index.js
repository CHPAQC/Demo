var http = require('http')
var server = http.createServer(function(rep, res){
    console.log('hello')
    res.write('hello world')
    res.end()
})
server.listen(9000)