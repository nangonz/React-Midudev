const API_KEY = '4a02753e'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const json = await response.json()
    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      year: movie.Year,
      title: movie.Title,
      type: movie.Type,
      img: movie.Poster
    }))
  } catch (error) {
    throw new Error('Error Searching movies')
  }
}
