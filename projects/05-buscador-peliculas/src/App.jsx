import { useEffect, useState } from 'react'
import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(query)
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }
    if (query.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }
    if (query.length < 3) {
      setError('La busqueda debe tener al menos 3 caracteres')
      return
    }

    setError(null)
  }, [query])

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            style={{ border: '2px solid transparent', borderColor: error ? 'red' : 'transparent' }}
            value={query}
            name='query'
            onChange={handleChange}
            placeholder='Avengers, Star Wars, The Matrix...'
            type='text'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}

export default App
