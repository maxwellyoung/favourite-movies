import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'
// import stuff from './stuff'

export default combineReducers({
	movies: moviesReducer,
})
