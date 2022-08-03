import request from 'superagent'

const rootUrl = '/api/v1/movies'

export function getMovies() {
	return request.get(`${rootUrl}`).then((res) => res.body)
}

export function addNewMovie(newMovie) {
	return request
		.post(`${rootUrl}`)
		.send(newMovie)
		.then((res) => res.body)
}

export function deleteMovie(id) {
	return request.del(`${rootUrl}/${id}`).then((res) => res)
}

export function updateMovie(id, details) {
	return request
		.patch(`${rootUrl}/${id}`)
		.send(details)
		.then((res) => res)
}
