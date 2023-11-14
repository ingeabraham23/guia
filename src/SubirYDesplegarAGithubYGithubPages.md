# Subir App React a Github Pages + Github Pages

Teniendo ya tu App creada

Crear un nuevo repositorio en github agregando el nombre deseado, las demas opciones dejarlas como estan y dar click en Create Repository.

Quedate en la pagina que te muestra ya que te servira como guia.

```
echo "# guia" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ingeabraham23/guia.git
git push -u origin main
```

Editar el archivo _vite.config.js_ de tu proyecto y agregar la propiedad base:'/nombre-repositorio/'.

Donde nombre-repositorio es el nombre que le diste al repositorio que acabas de crear. En este ejemplo el repositorio se llama "guia".

Quedaría algo asi:

```
//vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'/guia/',
})
```

Inicializar git con el comando

`git init`

Checar el estado de git con el comando

`git status`

>Te encuentras en la rama master.
>Aun no hay commits.
>Archivos sin seguimiento:

>Te mostrara los archivos que aun no tienen seguimiento pero que ya han tenido cambios.

>No se agregó nada para confirmar, pero hay archivos sin seguimiento presentes.

Añadir todos los archivos sin seguimiento.

`git add .`

Crear nuesto primer commit

`git commit -m "primer commit"`

Crear la rama local main

`git branch -M main`

Añadir el origen remoto del repositorio, este origen lo muestra despues de haber creado nuestro repositorio.

`git remote add origin https://github.com/ingeabraham23/guia.git`

Si desear ver las ramas remotas de tu proyecto ejecutar

`git remote -v`

Te mostrara la ramas remotas en este ejmplo muestra 2 que es la misma pero una es para cargar archivos es decir subirlos (push) y otra para descargar archivos (fetch).

```
origin  https://github.com/ingeabraham23/guia.git (fetch)
origin  https://github.com/ingeabraham23/guia.git (push)
```

Subir todos los archivos añadidos al seguimiento

`git push -u origin main`

Hasta aqui tus archivos ya han sido subidos a Github


# Subir a github Pages

Instalar el paquete _gh-pages_

`npm install gh-pages --save-dev`



Agregar el siguiente script en el archivo _package.json_.

`"deploy":"gh-pages -d dist"`

Construir nuestra aplicacion para desplegar con el siguiente comando:

`npm run build`

Desplegar con el siguiente comando:

`npm run deploy`

Al terminar te mostrara que ya ha sido publicada tu aplicacion

>Published

Ahora ve a tu repositorio y selecciona _Settings_ en el menu de arriba.

Selecciona _Pages_ en el menu lateral izquierdo y te mostrara todas las opciones para tu pagina incluyendo la direccion de acceso.