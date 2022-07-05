const express = require('express')

const db = require('../db/db')

const router = express.Router()

module.exports = router

router.get('./', (req, res) => {
	db.getMovies()
		.then((movie) => {
			res.json(movie)
		})
		.catch((err) => {
			res.status(500).send('DB ERR ' + err.message)
		})
})
