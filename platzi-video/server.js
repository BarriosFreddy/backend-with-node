const express = require('express');
const app = express();
const moviesRouter = require('./routers/movies.router');
const { logErrors, errorHandler, wrapError } = require('./utils/error-middleware');
const notFoundHandler = require('./utils/notFoundHandler');

const debugExpress = require('express-debug');

app.use(express.json());

debugExpress(app, {});

moviesRouter(app);

app.use(notFoundHandler);

app.use(logErrors);
app.use(wrapError);
app.use(errorHandler);

app.listen(3000, () => {
	console.log('Listening in 3000 port');
});