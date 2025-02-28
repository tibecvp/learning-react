import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/without-results.json'
import { Movies } from './components/Movies.jsx'

function App() {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return (
    <div className='page'>
      <header>
        <h1>Movies Searcher</h1>
        <form className='form'>
          <input type="text" placeholder='Avenger, Star Wars, The Matrix...' />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
