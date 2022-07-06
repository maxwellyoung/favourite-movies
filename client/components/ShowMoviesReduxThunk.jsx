import React, { useEffect } from 'react';
import { fetchMovies } from '../actions/index';
import { useSelector, useDispatch } from 'react-redux';



const ShowMoviesReduxThunk = () => {
  const dispatch = useDispatch()

  useEffect(() => {
     dispatch(fetchMovies())
  },[])

  const movies = useSelector(state => state.movies)



  return (
    <>
    <div className='showMovies'>
    {movies && movies.map(movies => {
        return (
        <div key={movies.id}>
          <h2>{movies.movie}</h2>
          <ul>
            <li>Artist: {movies.director}</li>
            <li>Year: {movies.year}</li>
          </ul>
        </div>
      )})}
      </div>
    </>
    // <div>
    //   <h1>My favourite movies</h1>
    //   {movies && movies.map(movies => {
    //     return (
    //       <>
    //       <h3 key={movies.id}>{movies.movie}</h3>
    //       <ul>
    //         <li key={i}> Director: {movies.director}</li>
    //         <li key={i}>Year: {movies.year}</li>
    //       </ul>
    //       </>
    //       )
    //   })}    
    // </div>
  );
};

export default ShowMoviesReduxThunk;