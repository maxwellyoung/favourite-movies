import request from 'superagent'

const rootUrl = '/api/v1'

export function getMovies() {
	return request.get(`${rootUrl}/movies`).then((res) => res.body)
}

export function addNewMovie(newMovie) {
	return request
		.post(`${rootUrl}/movies`)
		.send(newMovie)
		.then((res) => res.body)
}
