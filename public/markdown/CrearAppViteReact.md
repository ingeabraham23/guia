# Crear app con Vite + React

1. Crear un proyecto nuevo con el siguiente comando:

    `npm create vite@latest nombre_proyecto`

2. Selecionar un framework: Use teclas de direccion. Enter para enviar.

    - Vanilla
    - Vue
    - React
    - Preact
    - Lit
    - Svelte
    - Solid
    - Qwik
    - Others
    > Seleccionar React


3. Seleccionar una variante: >>Use teclas de direccion. Enter para enviar.

    - TypeScript
    - TypeScript + SWC
    - JavaScript
    - JavaScript + SWC
    > Seleccionar JavaScript + SWC


4. Acceder a la carpeta del proyecto creado.

    `cd nombre_proyecto`

5. Ya dentro de la carpeta del proyecto ejecutar:

    `npm install`

    Este comando instalara todas las dependencias necesarias para el proyecto.

6. Al terminar de instalar las dependencias ejecutar el servidor de desarrollo.

    `npm run dev`

7. Si en el servidor de desarrollo no aparece la direccion de red para probar tu aplicacion en el movil. Añadir al archivo de configuracion llamado _vite.config.js_ el siguiente objeto:

    ```
    server:{
    host: true
    }
    ```

El archivo _vite.config.js_ quedaría así:


    ```
    //vite.config.js

    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react-swc'

    // https://vitejs.dev/config/
    export default defineConfig({
    plugins: [react()],
     base:'/guia/',
     server:{
        host: true,
        }
    })
    ```