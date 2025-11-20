# Importar Fuente en CSS

1. Poner fuente en la carpeta fonts dentro de la carpeta src.
2. Si no existe la carpeta, crear manualmente.

3. En el archivo css agregar la fuente así:

```
@font-face {
  font-family: "ARCO Typography";
  src: url("../fonts/ARCO.ttf") format("truetype"); /* Ajusta la ruta según la ubicación de tu archivo de fuente */
  font-weight: normal;
  font-style: normal;
}
```

4. Ejemplo en clase CSS:


```
.encabezado-desfile {
  font-family: "ARCO Typography";/*Nombre de la fuente que le asignaste en @font-face */
  color: #ff0000;
  font-size: 20px;
  letter-spacing: 1px; /* Espacio enter letras */
  word-spacing: 4px; /* Espacio enter palabras */
  text-align: center;
  -webkit-text-stroke-width: 1px; /* Grosor del contorno */
  -webkit-text-stroke-color: #000000; /* Color del contorno */
}
```

5. Estructura recomendada para las carpetas:

src/

 ├─ styles/

 ├─ fonts/

 │    └─ ARCO.ttf

 └─ App.jsx
