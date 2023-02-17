import './App.css'
import { Movies } from './components/movies'
import { useMovies } from './hooks/useMovies'
import { useRef } from 'react'

function App () {
  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef()

  const handleClick = () => {
    const value = inputRef.current.value
    console.log(value)
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form className='form'>
          <input ref={inputRef} placeholder='Avengers, Star Wars, The Matrix...' type='text' name='query' />
          <button onClick={handleClick} type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}

export default App
