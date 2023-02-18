import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies: mappedMovies } = useMovies()

  const handleSubmit = (event) => {
    event.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(event.target))
    console.log(query)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input name='query' placeholder='Avengers, Star Wars, The Matrix...' type='text' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}

export default App
