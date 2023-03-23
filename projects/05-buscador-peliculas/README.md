# Buscador de Peliculas: hooks useRef, useMemo y useCallback
## Enunciado

`Crea una aplicación para buscar películas`
```
API a usar: - https://www.omdbapi.com/
https://www.omdbapi.com/?apikey=4a02753e&s=Avengers
API_KEY: 4a02753e
Consigue la API Key en la propia página web registrando tu email.
```

**Requerimientos:**

✅ Necesita mostrar un input para buscar la película y un botón para buscar.

✅ Lista las películas y muestra el título, año y poster.

✅ Que el formulario funcione

✅ Haz que las películas se muestren en un grid responsive.

✅ Hacer el fetching de datos a la API

**Primera iteración:**

✅ Evitar que se haga la misma búsqueda dos veces seguidas.

✅ Haz que la búsqueda se haga automáticamente al escribir.

✅ Evita que se haga la búsqueda continuamente al escribir (debounce)

<details>
    <summary><h3>Classless CSS Frameworks</h3></summary>
    Existen un montón de lo que se llaman <em>frameworks classless</em> que son frameworks css que no utilizan  
    clases, estos te permiten estilar rapidamente tu aplicacion. Un ejemplo es water.css o Bolt.css  
    pero existe una gran variedad.  
    Siempre, antes de comenzar a codear, explorar la documentacion de la Api y ver como vienen estructuradas  
    las respuestas en los JSON. Es recomendable guardar un sample de la respuesta cuando hay resultados  
    y cuando no los hay, para agilizar el trabajo.
</details>

<details>
    <summary><h3>useRef REACT hook</h3></summary>
    <p>
    useRef nos permite crear una referencia mutable que persiste durante todo el ciclo de vida
    del componente. Es muy util para guardar cualquier valor que puedas mutar como un identificador
    como un elemento del DOM como un contador y que cada vez que cambie no vuelve a renderizar el
    componente
    </p>
</details>

``` Javascript

function App () {
  const { movies: mappedMovies } = useMovies()
  const inputRef = useRef() //--> No abusar de esto!

  const handleSubmit = (event) => {
    event.preventDefault() //--> Evita que se recargue la página.
    const inputEl = inputRef.current
    const query = inputEl.value
    console.log(query) //--> recuperamos el valor del input
  }

  return (
    <div className='page'>

      <header>
        <h1>Buscador de Películas</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input ref={inputRef} placeholder='Avengers, Star Wars, The Matrix...' type='text' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>

    </div>
  )
}

// Sin embargo podemos hacer esto sin necesidad de usar este hook:-----

const handleSubmit = (event) => {
    event.preventDefault()
    const fields = new window.FormData(event.target)
    const query = fields.get('query')
    console.log({ query }) // vemos el valor del input en consola
}

// Para varios inputs --------------------------------------------------

const handleSubmit = (event) => {
    event.preventDefault()
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)
    // aqui podrias hacer todas las validaciones sobre los inputs que necesites
}

```

<details>
    <summary><h3>Formularios No Controlados y Controlados</h3></summary>
    <p>
    El ejemplo anterior es una forma de aplicar formularios de manera no controlada.
    Para hacerlo de manera controlada debemos vincular el value del input a un estado
    de REACT y ante un evento onChange setear el estado con el nuevo valor. Una desventaja
    es que cada vez que se hagamos un cambio se renderizará nuevamente el componente y
    si nuestra aplicaion fuese compleja el input se sentirá lento. Esto tiene algunas formas
    de arreglarlo con un hook pero aún así lo más ideal es evitarlo. La ventaja que tiene
    es que facilita las validaciones de los formularios.
    </p>
</details>

<details>
    <summary><h3>useRef Hook para Evitar que se haga la misma búsqueda dos veces seguidas</h3></summary>
    <p>
    Al permitirnos crear una referencia mutable que persiste durante todo el ciclo de vida
    del componente podemos usar este hook para evitar que se haga la misma busqueda de manera consecutiva.
    Al cambiar el search se vuelve a renderizar el componente pero tenemos guardada la referencia de la 
    búsqueda previa esto nos permite compararlas.
    </p>
</details>

<details>
    <summary><h3>useMemo(()=>{}, []) and useCallback(()=>{}, []) Hook</h3></summary>
    <p>
    En esta prueba técnica tenemos un input para las peliculas que vamos a buscar y otro para ordenar
    las peliculas de acuerdo a su título. Para ello tenemos en nuestro useMovies custom hook una funcion
    llamada 'sortedMovies'. Pero sucede que cada vez que cambiamos nuestro input de busqueda se vuelve a
    ejecutar el sortedMovies. Esto si tuvieramos que ordenar una gran cantidad de películas nos provocaría una
    perdida de rendimiento. Todo lo que esta en el cuerpo de la funcion es el render por lo tanto cada vez
    que cambia el search vuelve a recrearse la funcion sortedMovies y vuelve a calcular el ordenamiento y 
    esto no es necesario.
    </p>
    <p>
    No siempre va a ser necesario recurrir al useMemo, sólo cuando tengamos problemas de rendimiento. useMemo
    nos permite memoizar un valor para no tener que volverlo a calcular a no ser que cambien las dependencias
    , esto es mientras no cambie el dato que dispara el ordenamiento que no lo volverá a calcular aún cuando
    el componente se re-renderice por cambio en otro estado como en nuestro ejemplo con 'search'.
    </p>
    <p>
    Esto tambien se puede usar para memoizar una función. En nuestro ejemplo getMovies se vuelve a ejecutar
    cada vez que cambia el search, esto es normal, pero también lo hace cada vez que cambiamos el input check de ordenamiento. useCallback hace esto mismo, es más por detrás está usando el useMemo, es sólo una sintáxis
    azucarada ya que en lugar de pasarle a useMemo una funcion que devuelve una función a useCallback le pasamos
    directamente la funcion que queremos memoizar.
    </p>
</details>

``` Javascript
//USEMEMO PARA MEMOIZAR UNA FUNCION
const getMovies = useMemo(
  return async ({ search }) => {
  if (previousSearch.current === search) return
  try {
    setLoading(true)
    setError(null)
    previousSearch.current = search
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  } catch (e) {
    setError(e.message)
  } finally {
    setLoading(false)
  }
}, [])
//Podriamos colocar 'search' en el array de dependencias. Esto haría que la funcion
//se vuelva a crear cada vez que cambia el search. Pasarlo como parámetro nos permite
//lograr que solo se cree la funcion una vez.

const getMovies = useCallback(async ({ search }) => {
  if (previousSearch.current === search) return
  try {
    setLoading(true)
    setError(null)
    previousSearch.current = search
    const newMovies = await searchMovies({ search })
    setMovies(newMovies)
  } catch (e) {
    setError(e.message)
  } finally {
    setLoading(false)
  }
}, [])
```

<details>
    <summary><h3>Debounce</h3></summary>
    <p>
    El debounce se usa para evitar la race condition, cuando queremos que la búsqueda se haga
    automáticamente al escribir. Mientras el usuario escribe no vamos a hacer nada y cuando el usuario
    deje de escribir un tiempo (300 a 500 milisegundos), la última llamada que ha hecho el
    usuario dispara la búsqueda. Hay varias librerías para usar como lodash debounce, también pudes usar
    un custom hook. En este proyecto vamos a usar una librería que se llama just de angus-c
    </p>
</details>

<details>
    <summary><h3>Monorepositorio multipaquetes</h3></summary>
    <p>
    Lo interesante de esto es que cuando estás en la raíz y haces npm install, se instalaran
    todas las dependencias de todos los proyectos y reutilizará las dependencias para no tener
    que instalar dos veces los mismo.
    </p>
</details>