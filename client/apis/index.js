import request from 'superagent'

const rootUrl = '/api/v1'

export function getMovies() {
	return request.get(`${rootUrl}/movies`).then((res) => res.body)
}

export function getAlbums() {
	return request.get(`${rootUrl}/albums`).then((res) => res.body)
}
