var http = require('http')
var fs = require('fs')
http.createServer(function(req,res){
	res.writeHead(200,{'content-type' : 'text/plain'})
  var reader = fs.createReadStream(process.argv[3])
  //var writer = fs.createWriteStream(process.argv[3])
  reader.pipe(res);

  



}).listen(Number(process.argv[2]))