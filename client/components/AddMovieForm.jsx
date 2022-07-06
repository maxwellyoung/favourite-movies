import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { pushMovie } from '../actions/index';

const AddMovieForm = () => {

  const dispatch = useDispatch()

  const [form, showForm] = useState(null)
  const [newMovie, setNewMovie] = useState({
    movie: '',
    director: '',
    year: ''
  })

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(pushMovie(newMovie))
    showForm(null)
  }


  const handleClick = () => {
    showForm(true)
  }
  
  return (
    <div className='addMovie columns center'>
      <button className="addBtn button is-info is-light" onClick={handleClick} >Would you like to add another movie?</button>
        {form && <form onSubmit={handleSubmit}>
          <div className='column mb-4'>
            <label className='label' htmlFor="movie">Title:</label>
            <input type="type" id="movie" name="movie" onChange={handleChange}/>
          </div>
          <div className='column'>
            <label className='label'  htmlFor="director">Director:</label>
            <input type="type" id="director" name="director" onChange={handleChange}/>
          </div>
          <div className='column'>
          <label className='label'  htmlFor="year">Year:</label>
          <input type="type" id="year" name="year" onChange={handleChange}/>
          </div>
          <button  className="button-39" >Add</button>
      </form>}
      <div className="buttons">
  
</div>
    </div>
  );
};

export default AddMovieForm;