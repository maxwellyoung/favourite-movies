const connection = require('./connection')

function getMovies(db = connection) {
	return db('movies')
}

module.exports = {
	getMovies,
}
