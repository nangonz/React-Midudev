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
