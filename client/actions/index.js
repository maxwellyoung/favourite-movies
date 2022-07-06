export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const ADD_MOVIE = 'ADD_MOVIE'
import { getMovies, addNewMovie } from '../apis/index'

export function receiveMovies(movies) {
	return {
		type: RECEIVE_MOVIES,
		payload: movies,
	}
}

export function addMovie(movies) {
	return {
		type: ADD_MOVIE,
		payload: movies,
	}
}

export function fetchMovies() {
	return (dispatch) => {
		return getMovies()
			.then((res) => {
				console.log(res, 'api fetch movies')
				dispatch(receiveMovies(res))
			})
			.catch((err) => {
				console.log(err.message)
			})
	}
}

export function pushMovie(newMovie) {
	return (dispatch) => {
		return addNewMovie(newMovie)
			.then((res) => {
				dispatch(addMovie(res))
			})
			.catch((err) => {
				console.log(err.message)
			})
	}
}
