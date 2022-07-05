import React, { useState, useEffect } from 'react';

import { getMovies } from '../apis/index';

const ShowMovies = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    return getMovies()
      .then(list => {
        setMovies(list)
      })
  }, [])
 
  return (
    <div>
      {movies && movies.map(movie => {
        return <h2 key={movie.id}>{movies.movie}</h2>
      })}
    </div>
  );
};

export default ShowMovies;