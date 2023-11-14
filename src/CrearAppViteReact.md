# Crear app con Vite + React

`npm create vite@latest nombre_proyecto`

Selecionar un framework: Use teclas de direccion. Enter para enviar.
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

Seleccionar una variante: >>Use teclas de direccion. Enter para enviar.
- TypeScript
- TypeScript + SWC
- JavaScript
- JavaScript + SWC

> Seleccionar JavaScript + SWC


Acceder a la carpeta del proyecto creado

`cd nombre_proyecto`

Ya dentro de la carpeta del proyecto ejecutar

`npm install`

para instalar todas las dependencias necesarias para el proyecto

Al terminar de instalar las dependencias ejecutar el servidor de desarrollo

`npm run dev`

Si en el servidor de desarrollo no aparece la direccion de red para probar tu aplicacion en el movil

Añadir al archivo de configuracion llamado vite.config.js el siguiente objeto
```
server:{
host: true
}
```