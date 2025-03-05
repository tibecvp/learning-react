import './App.css'
import { useMovies } from './hooks/useMovies.js'
import { Movies } from './components/Movies.jsx'
import { useEffect, useState, useRef, useCallback } from 'react'
import debounce from 'just-debounce-it'

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
  const [sort, setSort] = useState(false)
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 700)
    , []
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleSort = () => {
    setSort(!sort)
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debouncedGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movies Searcher</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name='query' type="text" placeholder='Avenger, Star Wars, The Matrix...' />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button>Search</button>
        </form>
        {error && <p style={{ color: 'red' }} className='error'>{error}</p>}
      </header>

      <main>
        {
          loading ? <p>Loading...</p> : <Movies movies={movies} />
        }
      </main>
    </div>
  )
}

export default App
