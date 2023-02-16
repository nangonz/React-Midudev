import responseMovies from '../mocks/with-results.json'
// import withoutResults from '../mocks/no-results.json'

export function useMovies () {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    year: movie.Year,
    title: movie.Title,
    type: movie.Type,
    img: movie.Poster
  }))

  return { movies: mappedMovies }
}
