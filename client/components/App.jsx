import React from 'react'
import AddMovieForm from './AddMovieForm'
// import ShowMovies from './ShowMovies'
import ShowMoviesReduxThunk from './ShowMoviesReduxThunk'

function App () {
  return (
    <>
      <header className="header">
        <h1>Maxwell&apos;s favourite movies</h1>
      </header>
      <section className="main">
        <ShowMoviesReduxThunk />
        <AddMovieForm />
      </section>
    </>
  )
}

export default App
