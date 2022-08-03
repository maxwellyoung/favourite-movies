export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
export const ADD_MOVIE = 'ADD_MOVIE'
export const DEL_MOVIE = 'DEL_MOVIE'
export const UPDATE_MOVIE = 'UPDATE_MOVIE'
import { getMovies, addNewMovie, deleteMovie, updateMovie } from '../apis/index'

export function receiveMovies(movies) {
	return {
		type: RECEIVE_MOVIES,
		payload: movies,
	}
}

export function addMovie(newMovie) {
	return {
		type: ADD_MOVIE,
		payload: newMovie,
	}
}

export function delMovie(id) {
	return {
		type: DEL_MOVIE,
		payload: id,
	}
}

export function updMovie(id, details) {
	return {
		type: UPDATE_MOVIE,
		payload: { id, details },
	}
}

export function fetchMovies() {
	return (dispatch) => {
		return getMovies()
			.then((res) => {
				console.log(res)
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
				dispatch(receiveMovies(res))
			})
			.catch((err) => {
				console.log(err.message)
			})
	}
}

export function removeMovie(id) {
	return (dispatch) => {
		return deleteMovie(id)
			.then(() => {
				dispatch(delMovie(id))
			})
			.catch((err) => {
				console.log(err.message)
			})
	}
}

export function updateMovies(id, details) {
	return (dispatch) => {
		return updMovie(id, details)
			.then(() => {
				dispatch(updateMovie(id, details))
			})
			.catch((err) => {
				console.log(err.message)
			})
	}
}
