import {
	RECEIVE_MOVIES,
	ADD_MOVIE,
	DEL_MOVIE,
	UPDATE_MOVIE,
} from '../actions/index'

const moviesReducer = (state = [], action) => {
	const { type, payload } = action

	switch (type) {
		case RECEIVE_MOVIES:
			return payload
		case ADD_MOVIE:
			return [...state, payload]
		case DEL_MOVIE:
			return state.filter((movie) => movie.id !== payload)
		case UPDATE_MOVIE:
			return state.map((movies) => {
				const { movie, director, year } = payload.details
				if (movies.id === payload.id) {
					movies.movie = movie
					movies.director = director
					movies.year = year
				}
			})
		default:
			return state
	}
}

export default moviesReducer
