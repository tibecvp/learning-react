import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/without-results.json'
import { useState } from 'react'

export function useMovies({ search }) {
    const [responseMovies, setResponseMovies] = useState(withoutResults)

    const movies = responseMovies?.Search
    console.log('Movies', movies)

    const mappedMovies = movies?.map(movie => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    const getMovies = () => {
        if (search) {
            // setResponseMovies(withResults)
            fetch(`https://www.omdbapi.com/?apikey=4287ad07&s=${search}`)
                .then(res => res.json())
                .then(json => {
                    setResponseMovies(json)
                })
        } else {
            setResponseMovies(withoutResults)
        }
    }

    return { movies: mappedMovies, getMovies }
}