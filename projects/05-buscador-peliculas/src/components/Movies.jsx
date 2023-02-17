
function ListOfMovies ({ movies }) {
  return (
    <ul>

      {
        movies.map(movie => (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.img} alt={movie.title} />
          </li>
        ))
      }

    </ul>
  )
}

function NoMoviesResults () {
  return (
    <h3>No hay resultados para esta busqueda</h3>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies} />
      : <NoMoviesResults />
  )
}
