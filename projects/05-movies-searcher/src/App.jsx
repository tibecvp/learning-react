import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'

function App() {
  const { movies: mappedMovies } = useMovies()

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
