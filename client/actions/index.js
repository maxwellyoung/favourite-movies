export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
import { getMovies } from '../apis/index'

export function receiveMovies(movies) {
	return {
		type: RECEIVE_MOVIES,
		payload: movies,
	}
}

export function fetchMovies() {
	return (dispatch) => {
		return getMovies()
			.then((res) => {
				dispatch(receiveMovies(res))
			})
			.catch((err) => {
				console.log(err.message)
			})
	}
}
