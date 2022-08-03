import { data } from 'autoprefixer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMovies } from '../actions';

const UpdateMovies = () => {
  const dispatch = useDispatch()
  const { id, movie, director, year } = data

  const [button, setButton] = useState(null)
  const [details, setDetails] = useState({
    movie: movie,
    director: director,
    year: year
  })

  const click = () => {
    setButton(true)
  }

  const changeHandler = (e) => {
    setDetails({
    ...details,
    [e.target.name]: e.target.value
    })
  }
  
  const handleClick = (e) => {
    e.preventDefault()
    dispatch(updateMovies(id, details))
  }

  return (
    <div>
        <button onClick={click} href="#bottom">Update Movie</button>
      <div>
      {button &&  <form>
          <label htmlFor="movie">Movie: </label>
          <input type="text" id="movie" name="movie" onChange={changeHandler}/>
          <label htmlFor="director">Director: </label>
          <input type="text" id="director" name="director" onChange={changeHandler}/>
          <label htmlFor="year">Year: </label>
          <input type="text" id="year" name="year" onChange={changeHandler}/>
          <button onClick={handleClick}>Update</button>
        </form> }
      </div>
      <div id="bottom"></div>
    </div>
  );
};

export default UpdateMovies;