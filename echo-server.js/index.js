const http = require('http');
const moment = require('moment');

const server = http.createServer();

server.on('request', (request, response) => {
	if (request.method === 'POST' && request.url === '/echo') {
		let body = [];
		request.on('data', chunk => {
			body.push(chunk);
		}).on('end', () => {
			response.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			response.end(body.toString());
		})
	} else if (request.method === 'POST' && request.url === '/birthdate') {
		let body = [];
		request.on('data', chunk => {
			body.push(chunk);
		}).on('end', () => {
			response.writeHead(200, {
				'Content-Type': 'text/plain'
			});
			const birthdate = body.toString();
			const date = new Date(birthdate);
			const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Webnesday', 'Thrusday', 'Friday', 'Saturday'];
			response.end(weekdays[date.getDay()].toString());
		});
	} else {
		response.write('Not found! 404');
		response.end()
	}
});

server.listen(3000);
console.log('Listen to 3000 port');
