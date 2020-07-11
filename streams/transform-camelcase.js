const { Transform } = require('stream');

function camelCase(input) {
	if (!input) {
		return;
	}
	return input.split(/\s/)
		.filter(word => !!(word))
		.map((word, index) => {
			let wordTransformed;
			if (index === 0) {
				wordTransformed = word.toLowerCase()
			} else {
				wordTransformed = word.toLowerCase()[0].toUpperCase() + word.substring(1, word.length)
			}
			return wordTransformed;
		})
		.join('');
}

const transformStream = new Transform({
	transform(chunk, encoding, callback) {
		this.push(camelCase(chunk.toString()));
		callback();
	}
});

process.stdin.pipe(transformStream).pipe(process.stdout);