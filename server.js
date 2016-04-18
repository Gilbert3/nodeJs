var http = require('http');

http.createServer(function (request, response){
	//发送HTTP头部
	//HTTP状态值： 200 ：OK
	//内容类型 text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});
    //发送相应数据 “Hello Word” 
	response.end('hello word\n');
}).listen(888);