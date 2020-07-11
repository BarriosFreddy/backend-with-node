const moviesService = require('../services/movies.service');
const router = require('express').Router();

const { movieIdSchema, createMovieSchema, updateMovieSchema } = require('../utils/schemas/movie');
const valdiationHandler = require('../utils/validationHandler');
const validationHandler = require('../utils/validationHandler');
const cacheControl = require('../utils/cacheResponse');
const MINUTES_IN_SECONDS = require('../utils/time');
function moviesRouter(app) {
	app.use('/api/movies', router);

	router.get('/', async function (req, res, next) {
		try {
			cacheControl(res, MINUTES_IN_SECONDS.FIVE);
			const movies = await moviesService.getAll();
			res.status(200).json({
				data: movies,
				message: 'Movies retrieved'
			})
		} catch (error) {
			next(error)
		}
	});

	router.get('/:id', validationHandler({ id: movieIdSchema }, 'params'), async function (req, res) {
		const { id } = req.params;
		try {
			cacheControl(res, MINUTES_IN_SECONDS.SIXTY);
			const movie = await moviesService.get(id);

			res.status(200).json({
				data: movie,
				message: 'Movies listed'
			})
		} catch (error) {
			next(error)
		}
	});

	router.post('/', validationHandler(createMovieSchema), async function (req, res, next) {
		const { body } = req;
		try {
			const movie = await moviesService.post(body);
			res.status(201).json({
				data: movie,
				message: 'Movie created'
			})
		} catch (error) {
			next(error)
		}
	});

	router.put('/:id', validationHandler({ id: movieIdSchema }, 'params'), validationHandler(updateMovieSchema), async function (req, res, next) {
		const { id } = req.params;
		const { body } = req;
		try {
			const movie = await moviesService.put(id, body);

			res.status(201).json({
				data: movie,
				message: 'Movie updated'
			})
		} catch (error) {
			next(error)
		}
	});

	router.delete('/:id', validationHandler({ id: movieIdSchema }, 'params'), async function (req, res, next) {
		const { id } = req.params;
		try {
			const movie = await moviesService.delete(id);
			res.status(201).json({
				data: movie,
				message: 'Movie deleted'
			})
		} catch (error) {
			next(error)
		}
	});
}

module.exports = moviesRouter;