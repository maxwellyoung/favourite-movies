const connection = require('./connection')

function getMovies(db = connection) {
	return db('movies').select()
}

module.exports = {
	getMovies,
}
