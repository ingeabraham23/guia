# Estilos CSS en React.

## Definicion.

```
selector {
  propiedad: valor; /*declaracion*/
}
```

## Usando Etiquetas.

```
link{
  color: blue;
}
```

Se le aplicara el color _azul_ a todas las etiquetas **link**.

## Usando Clases.

```
.boton-calcelar{
  color: #0099FF;
}
```

Se le aplicara el color _#0099FF_ a todos los elementos que se les asigne la clase **boton-calcelar**.

Este es un ejemplo para aplicar la clase.

`<button className className="boton-calcelar" >Cancelar</button>`

## Usando Id.

```
#parrafo{
  color: blue;
}
```

```
<p id="parrafo">Esto es un parrafo<p>
```

Se le aplicara el color azul al parrafo con el id parrafo.
No es recomendable abusar de los **id** para estilizar.

Estas 3 formas se recomienda que se definan en un archivo llamado de la misma forma y en la misma carpeta.

Por ejemplo, si voy a definir las clases para mi componente _AcercaDe.jsx_ que se encuentra en la carpeta components, dentro de esa misma **carpeta** voy a crear un archivo llamado _AcercaDe.css_.

Y lo importare de esta manera:

`import "./AcercaDe.css";`

## Estilos en linea.

En React, puedes agregar estilos en línea utilizando el atributo style en JSX. El valor del atributo style debe ser un objeto que contenga pares clave-valor, donde las claves son nombres de propiedades CSS y los valores son los valores correspondientes. Aquí hay un ejemplo simple:

```
<div style={{ color: 'blue', fontSize: '16px', border: '1px solid black', padding: '10px' }}>
      Este es mi componente con estilos en línea.
    </div
```

En este ejemplo, el objeto de estilo se define directamente dentro de las llaves dobles del atributo style. Este enfoque es útil cuando solo necesitas aplicar estilos a un elemento específico y no necesitas reutilizar esos estilos en otros lugares.

Recuerda que los nombres de propiedades CSS también siguen la convención de camelCase. En este caso, font-size se convierte en fontSize.

# Herencia.

### Herencia por defecto:

Muchas propiedades de texto heredan automáticamente de los elementos padre a los elementos hijos. Por ejemplo, _color_, _font-family_, _font-size_, _line-height_, etc.

### No heredadas:

Algunas propiedades no se heredan por defecto. Por ejemplo, _border_, _margin_, _padding_, _width_, _height_, etc. Estas propiedades deben establecerse explícitamente en los elementos hijos si se desean.

### Herencia condicional:

Algunas propiedades tienen un comportamiento de herencia condicional. Por ejemplo, la propiedad _display_ no se hereda directamente, pero algunos de sus valores, como _inline_ y _block_, sí se heredan dependiendo del contexto.

### Inherit (heredar):

Puedes forzar la herencia de una propiedad específica utilizando el valor _inherit_. Esto obligará al elemento hijo a heredar el valor de esa propiedad del elemento padre.

```
.hijo {
  color: inherit; /* hereda el color del elemento padre */
}
```

### Initial (inicial):

Puedes establecer el valor inicial de una propiedad utilizando _initial_. Esto restablecerá el valor de la propiedad al valor predeterminado.

```
.hijo {
  color: initial; /* establece el color al valor predeterminado */
}
```

### unset:

_unset_ restablecerá una propiedad al valor inicial si es una propiedad heredada y al valor por defecto si no es heredada.

```
.hijo {
  color: unset; /* restablece el color al valor inicial o predeterminado */
}
```

# Pseudo-clases

En CSS, las pseudo-clases son selectores que seleccionan elementos en función de su estado o posición en relación con el árbol de documentos o el usuario. Se utilizan para aplicar estilos a elementos en situaciones específicas. Aquí hay algunas pseudo-clases comunes:

- _:hover_: Se aplica cuando el usuario coloca el cursor sobre un elemento.

```
a:hover {
  color: red;
}
```

- _:active_: Se aplica cuando el elemento está siendo activado (por ejemplo, cuando se hace clic en un enlace).

```
button:active {
  background-color: #f00;
}
```

- _:focus_: Se aplica cuando el elemento ha recibido el foco, generalmente a través de clic o tabulación.

```
input:focus {
  border: 2px solid blue;
}
```

- _:first-child_ y _:last-child_: Seleccionan el primer y último hijo de un elemento padre, respectivamente.

```
li:first-child {
  font-weight: bold;
}

li:last-child {
  font-style: italic;
}
```

- _:nth-child(n)_: Selecciona el enésimo hijo de un elemento padre. Puedes especificar un número específico, una expresión matemática (2n, odd, even, etc.).

```
p:nth-child(3) {
  color: green;
}

li:nth-child(2n) {
  background-color: #f0f0f0;
}
```

- _:nth-of-type(n)_: Similar a :nth-child(n), pero selecciona solo los hijos de un tipo específico de elemento.

```
p:nth-of-type(odd) {
  background-color: #f0f0f0;
}
```

- _:not(selector)_: Selecciona elementos que no coinciden con el selector especificado.

```
input:not([type="submit"]) {
  border: 1px solid #ccc;
}
```

Estas son solo algunas de las pseudo-clases más comunes en CSS. Puedes combinar varias pseudo-clases para hacer selecciones más específicas y complejas. Las pseudo-clases son poderosas herramientas que te permiten aplicar estilos de manera dinámica según el estado o la posición de los elementos en la página.

# Selectores combinados

En CSS, los selectores combinados te permiten apuntar a elementos específicos en función de su relación con otros elementos. Estos selectores se utilizan para seleccionar un elemento específico que está anidado o relacionado de alguna manera con otro elemento. Aquí tienes algunos ejemplos comunes de selectores combinados:

- _Descendencia ( )_: Selecciona un elemento que es descendiente directo de otro elemento.

```
div p {
  color: blue;
}
```

Esto seleccionará todos los elementos <p> que son descendientes directos de un elemento <div>.

- _Hijo (>)_: Selecciona un elemento que es un hijo directo de otro elemento.

```
ul > li {
  list-style-type: square;
}
```

Esto seleccionará todos los elementos **li** que son hijos directos de un elemento **ul**.

- _Adyacente (+)_: Selecciona un elemento que es adyacente directo a otro elemento.

```
h2 + p {
  font-style: italic;
}
```

Esto seleccionará todos los elementos **p** que son adyacentes directos a un elemento **h2**.

- _General (~)_: Selecciona todos los elementos que son hermanos de otro elemento, es decir, comparten el mismo elemento padre y están después en el árbol de documentos.

```
h2 ~ p {
  color: green;
}
```

Esto seleccionará todos los elementos **p** que son hermanos del elemento **h2** y están después de él en el árbol de documentos.

Estos selectores combinados proporcionan flexibilidad para aplicar estilos a elementos específicos en función de su relación con otros elementos en el documento HTML. Es importante entender cómo funcionan estos selectores para escribir reglas de estilo más específicas y eficientes.

# Unidades.

Las unidades se utilizan para especificar longitudes y tamaños de diversos elementos. Hay varias unidades disponibles en CSS, y se dividen en dos categorías principales: unidades absolutas y unidades relativas.

- _Unidades Absolutas_:

  - **cm** (centímetros): Unidad de longitud basada en el centímetro del sistema métrico.
  - **mm** (milímetros): Unidad de longitud basada en el milímetro del sistema métrico.
  - **in** (pulgadas): Unidad de longitud basada en la pulgada.
  - **px** (píxeles): Unidad de longitud basada en píxeles en la pantalla. Es una unidad absoluta, ya que no cambia con respecto a otros elementos de la página.

Ejemplo:

```
div {
  width: 200px;
  height: 3in;
}
```

- _Unidades Relativas_:

  - **em**: Relativo al tamaño de fuente del elemento.
  - **rem**: Relativo al tamaño de fuente del elemento raíz (es decir, el tamaño de fuente especificado en el elemento html).
  - **%** (porcentaje): Relativo al tamaño del contenedor del elemento.

Ejemplo:

```
p {
  font-size: 1.2em;
  margin-bottom: 10%;
}
```

- _Unidades de Vista Portátil_:

  - **vw** (ancho de la ventana): El 1% del ancho de la ventana.
  - **vh** (altura de la ventana): El 1% de la altura de la ventana.
  - **vmin**: El 1% del menor valor entre la altura y el ancho de la ventana.
  - **vmax**: El 1% del mayor valor entre la altura y el ancho de la ventana.

Ejemplo:

```
header {
  width: 50vw;
  height: 20vmin;
}
```

Estas son solo algunas de las unidades comunes en CSS. La elección de la unidad depende del contexto y de cómo quieras que los elementos se comporten en relación con su entorno. Las unidades relativas suelen ser más flexibles y facilitan el diseño receptivo (responsive design) porque se ajustan automáticamente a cambios en el tamaño de la fuente o del contenedor.
