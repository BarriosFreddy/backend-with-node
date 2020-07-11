const fs = require('fs');

const out = fs.createWriteStream('./out.log');
const error = fs.createWriteStream('./error.log');

const consoleFile = new console.Console(out, error);

for (let index = 0; index < 7; index++) {
	consoleFile.log('[INFO]', new Date());
	consoleFile.error('[ERROR]', new Error('Something was wrong'));
}