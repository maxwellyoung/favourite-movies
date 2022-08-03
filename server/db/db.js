const connection = require('./connection')

function getMovies(db = connection) {
	return db('movies').select()
}

function addMovie(newMovie, db = connection) {
	return db('movies').insert(newMovie)
}

function getMovie(id, db = connection) {
	return db('movies').select().where('id', id).first()
}

function updateMovie(db = connection) {
	return db('movies').del().where
}

function deleteMovie(id, details, db = connection) {
	return db('movies').del(details).where('id', id)
}

module.exports = {
	getMovies,
	addMovie,
	getMovie,
	updateMovie,
	deleteMovie,
}
