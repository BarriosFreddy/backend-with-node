


const fs = require('fs');
const server = require('http').createServer();

// Get better the memory performance
server.on('request', (req, res) => {
	const src = fs.createReadStream('./big');
	src.pipe(res);
});

server.listen(3000);