const EvenEmitter = require('events');
const { callbackify } = require('util');


class Logger extends EvenEmitter {
	execute(callback) {
		console.log('Intializing');
		this.emit('start');
		callback();
		this.emit('end');
		console.log('Ending');
	}
}

const logger = new Logger();
logger.on('start', () => console.log('Starting'));
logger.on('start', () => console.log('It has started'));
logger.on('end', () => console.log('Finishing'));

logger.execute(() => {
	console.log('Callback has been called');
});
