const fs = require('fs');

const file = fs.createWriteStream('./big');

for (let index = 0; index < 1e6; index++) {
	file.write(`Dolore irure consequat cupidatat cillum deserunt officia amet nisi est nisi quis et excepteur. Elit cillum nulla ut nisi quis. Aliqua eiusmod duis eu officia commodo esse consectetur eiusmod eu id duis.`);
}



