// import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'
import { useState } from 'react'

export function useMovies ({ search }) {
  const [responseMovies, setMoviesSearch] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    year: movie.Year,
    title: movie.Title,
    type: movie.Type,
    img: movie.Poster
  }))

  const getMovies = () => {
    if (search) {
      fetch(`https://www.omdbapi.com/?apikey=4a02753e&s=${search}`)
        .then(res => res.json())
        .then(json => {
          setMoviesSearch(json)
        })
    } else {
      setMoviesSearch(withoutResults)
    }
  }

  return { movies: mappedMovies, getMovies }
}
