const fs = require('fs');
const server = require('http').createServer();

// overload the memory
server.on('request', (req, res) => {
	fs.readFile('./big', (err, data) => {
		if (err) {
			console.error(err);
		}
		res.end(data);
	});
});

server.listen(3000);