import { RECEIVE_MOVIES } from '../actions/index'

const initialMovieState = [
	{
		id: 1,
		movie: 'Init',
		year: 1992,
		director: 'Robert Altman',
		genre: 'Mystery',
	},
]

const moviesReducer = (state = initialMovieState, action) => {
	const { type, payload } = action

	switch (type) {
		case RECEIVE_MOVIES:
			return payload
		default:
			return state
	}
}

export default moviesReducer
