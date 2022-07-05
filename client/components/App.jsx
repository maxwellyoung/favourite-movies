import React from 'react'
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
      </section>
    </>
  )
}

export default App
