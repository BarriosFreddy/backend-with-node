const fs = require('fs');

// const files = 
/* fs.readdir(__dirname, (err, files) => {
	if (err) {
		return console.log(err);
	}
	console.log(files);
}) */

/* fs.mkdir('platzi/escuela-js/node/recursive', { recursive: true }, (err) => {
	if (err) {
		return console.log(err);
	}
}) */

fs.copyFile('orange.txt', 'anotherfile.txt', err => {
	if (err) {
		console.log(err);
	}
})