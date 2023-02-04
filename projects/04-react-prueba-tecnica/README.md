# Prueba técnica para Juniors y Trainees de React en Live Coding.

APIs:
```

- Facts Random: https://catfact.ninja/fact
- Imagen random: https://cataas.com/cat/says/hello

```
- Recupera un dato aleatorio (fact) de gatos de la primera API
- Recuperar la primera palabra del hecho
- Muestra una imagen de un gato con la primera palabra.

<br>

Ojo con utilizar templates en pruebas tecnicas, en general se les solicita  
a los aspirantes hacer la conexión. En estos casos casos podemos instalar lo  
minimo indispensable por ejemplo de vite (npm create vite@latest) y lo configures.  
Tienes que ser capaz de inicializar tu mismo el proyecto (punto de entrada).  

Para ello npm create vite@latest y elegimos vanilla javascript para crear  
nosotros mismos el punto de entrada y la configuracion inicial. En segundo  
lugar necesitaremos instalar un plugin ( npm install @vitejs/plugin-react -E )  

A continuación necesitaremos instalar las dependencias de react en nuestro proyecto  
npm install react react-dom -E. Una que tiene los bondongs con el navegador y otra  
que es la biblioteca de react que es la que tiene el useState y todo eso  

Paso siguiente creamos la configuracion de vite en el directorio de nuestro proyecto  
creamos archivo vite.config.js  

``` javascript

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})

```

Ya está no necesitas más!

## Qué es el punto de entrada de tu aplicación?
En nuestro proyecto tenemos un index.html y un main.js que es el script que se esta  
cargando en el index.html. main.js es el punto de entrada de nuestra aplicacion.  

Entonces en el main.js importamos createRoot de 'react-dom/client'  

``` javascript

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))
root.render(
  <h1>Prueba Tecnica</h1>
)

```

Si corremos nmp run dev veremos que la app 'rompe', esto es porque vite no está  
pudiendo transpilar el código para ello debemos cambiar la extensión del archivo  
a jsx.  

Ahora que ya podemos ver algo en pantalla no sigas hasta no installar standard u  
otro similar y configurar el linter en el package.json.  

``` javascript

npm install standard -D

"eslintConfig": {
"extends": "./node-modules/standard/eslintrc.json"
}

```
