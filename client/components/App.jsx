import React from 'react'
import AddMovieForm from './AddMovieForm'
// import ShowMovies from './ShowMovies'
import ShowMoviesReduxThunk from './ShowMoviesReduxThunk'

function App () {
  return (
    <>
      
      <section className=' title is-1 hero center is-fullheight is-primary is-large is-rounded'>
      <header className="header ">
        <h1 className='has-text-centered my-6  is-large'>Maxwell&apos;s favourite movies</h1>
      </header>
      </section>
      <section className="section">
        {/* <h2 className='subtitle has-text-info '>Here is the list:</h2> */}
        <div className='px-12 '>
        <ShowMoviesReduxThunk />
        </div>
        <AddMovieForm />
      </section>
    </>
  )
}

export default App
