import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useEffect, useState, useRef } from 'react'

function useSearch() {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('The input field cannot be empty')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('The input field cannot be a number')
      return
    }

    if (search.length < 3) {
      setError('The input field must have at least 3 characters')
      return
    }

    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

function App() {
  const { search, updateSearch, error } = useSearch()
  const { movies, getMovies } = useMovies({ search })

  const handleSubmit = (event) => {
    event.preventDefault()
    // const fields = new FormData(event.target)
    // const query = fields.get('query')

    // const { query } = Object.fromEntries(new FormData(event.target))
    getMovies()
    console.log('Search:', search)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Searcher</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avenger, Star Wars, The Matrix...' />
          <button>Search</button>
        </form>
        {error && <p style={{ color: 'red' }} className='error'>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
