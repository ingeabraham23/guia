# Modelo de caja en CSS

El modelo de caja en CSS se refiere a cómo se representa visualmente un elemento HTML en una página web, considerando sus dimensiones y cómo interactúa con otros elementos. Cada elemento en una página web se representa como una caja rectangular, y el modelo de caja describe las propiedades y características de esa caja.

El modelo de caja en CSS consta de cuatro partes principales:

1. Contenido (_Content_):

Es el área que contiene el contenido real del elemento, como texto, imágenes, etc.
Se define mediante las propiedades width (ancho) y height (altura).

2. Relleno (_Padding_):

Es el espacio entre el contenido y el borde de la caja.
Se define mediante las propiedades padding-top, padding-right, padding-bottom y padding-left.

3. Borde (_Border_):

Es una línea que rodea el contenido y su relleno.
Se define mediante las propiedades border-width, border-style y border-color.

4. Margen (_Margin_):

Es el espacio entre la caja y otros elementos circundantes.
Se define mediante las propiedades margin-top, margin-right, margin-bottom y margin-left.

La relación entre estas partes se ilustra en el siguiente diagrama:

```
+-----------------------------+
|          Margin             |
|  +-----------------------+  |
|  |        Border         |  |
|  |  +-----------------+  |  |
|  |  |     Padding     |  |  |
|  |  |  +-----------+  |  |  |
|  |  |  | Content   |  |  |  |
|  |  |  +-----------+  |  |  |
|  |  +-----------------+  |  |
|  +-----------------------+  |
+-----------------------------+
```

Cada una de estas partes afecta las dimensiones totales de la caja. Por ejemplo, si tienes un elemento con un ancho de 200px, un relleno de 20px, un borde de 2px y un margen de 10px, la caja completa ocupará un ancho de 252px (200px de contenido + 20px de relleno a cada lado + 2px de borde a cada lado + 10px de margen a cada lado).

Ejemplo de CSS:


```
/* Definición de las propiedades del modelo de caja */
div {
  width: 200px;
  height: 100px;
  padding: 20px;
  border: 2px solid black;
  margin: 10px;
}
```

Este modelo de caja flexible y modular permite un control preciso sobre la presentación y diseño de los elementos en una página web.

## La propiedad display.

La propiedad display en CSS determina cómo se mostrará un elemento en la página. Hay varios valores para la propiedad display, pero dos de los más comunes son block e inline. Estos valores afectan la forma en que los elementos se apilan y cómo fluyen dentro del flujo de contenido.

1. display: block;

Los elementos con display: block; se muestran en un bloque rectangular que abarca toda la anchura disponible.
Los elementos de bloque siempre comienzan en una nueva línea y ocupan toda la anchura disponible, forzando a los elementos siguientes a aparecer en la línea siguiente.
Puedes establecer propiedades de ancho (width), alto (height), márgenes (margin), relleno (padding), y bordes (border) en elementos de bloque.
Ejemplos comunes de elementos de bloque son **div**, **p**, **h1**-**h6**, y **form**.

```
div {
  display: block;
  width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid black;
}
```

2. display: inline;

Los elementos con display: inline; no inician en una nueva línea y solo ocupan el ancho necesario para mostrar su contenido.
No puedes establecer propiedades de ancho (width), alto (height), márgenes (margin-top o margin-bottom), relleno (padding-top o padding-bottom), ni bordes (border) en elementos en línea.
Los elementos en línea permiten que otros elementos estén en la misma línea que ellos.

```
span {
  display: inline;
  margin-right: 10px;
}
```

Estos dos valores (block e inline) son fundamentales para el diseño y la estructura de una página web. Además, hay un tercer valor llamado inline-block que combina características de ambos, permitiendo que el elemento se comporte como un elemento en línea pero tenga propiedades de bloque. Esto es útil cuando deseas que un elemento fluya con otros en línea, pero también quieres aplicar propiedades de bloque a él.

# Propiedad box-sizing.

La propiedad box-sizing en CSS determina cómo se deben calcular las dimensiones totales de un elemento, incluyendo su contenido, relleno y bordes. Esta propiedad tiene tres valores principales: content-box, padding-box y border-box.

1. box-sizing: _content-box_;

Este es el valor predeterminado. La anchura y altura que especificas para un elemento en este modo se aplican solo al contenido del elemento, excluyendo el relleno y el borde.
Es decir, si estableces un ancho de 300px para un elemento, y luego agregas un relleno de 20px y un borde de 5px, la dimensión total del elemento será 350px (300px de contenido + 20px de relleno a cada lado + 5px de borde a cada lado).

```
div {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

2. box-sizing: _padding-box_;

En este modo, la anchura y altura que especificas se aplican al contenido y al relleno, pero no al borde. Esto significa que el borde se agregará fuera de las dimensiones especificadas.

```
div {
  box-sizing: padding-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

3. box-sizing: _border-box_;

En este modo, la anchura y altura que especificas incluyen el contenido, el relleno y el borde. Esto facilita el control más intuitivo del tamaño total del elemento.

```
div {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
```

El valor border-box es especialmente útil en situaciones de diseño responsivo, ya que puedes cambiar el tamaño del elemento sin preocuparte por ajustar simultáneamente el relleno o el borde. Este modo es comúnmente recomendado para proyectos modernos debido a su conveniencia en el manejo de dimensiones. Sin embargo, la elección entre estos modos depende del diseño específico y de las necesidades de tu proyecto.

# La propiedad overflow.

La propiedad overflow en CSS se utiliza para controlar el comportamiento de desbordamiento de contenido dentro de un contenedor. Se aplica a elementos contenedores que tienen dimensiones fijas y contenido que puede desbordar esas dimensiones.

La propiedad overflow tiene varios valores que determinan cómo se manejará el contenido que desborda:

- overflow: _visible_;

Este es el valor predeterminado. El contenido que desborda simplemente se muestra fuera del límite del contenedor, sin recortarse ni ocultarse.

```
.container {
  overflow: visible;
}
```

- overflow: _hidden_;

Cualquier contenido que desborde se corta y no es visible. Es decir, se oculta y no se muestra fuera de los límites del contenedor.

```
.container {
  overflow: hidden;
}
```

- overflow: _scroll_;

Si el contenido desborda, se proporciona una barra de desplazamiento para permitir al usuario desplazarse y ver el contenido que está fuera de los límites del contenedor.

```
.container {
  overflow: scroll;
}
```

overflow: _auto_;

Este valor automáticamente proporciona barras de desplazamiento solo cuando es necesario. Si el contenido no desborda, no se mostrarán barras de desplazamiento.

```
.container {
  overflow: auto;
}
```

La propiedad overflow es útil cuando trabajas con elementos de tamaño fijo y deseas controlar cómo se maneja el contenido que puede desbordar esos límites. Puede ser especialmente útil en el diseño de interfaces de usuario para evitar que el contenido desbordante afecte negativamente al diseño general de la página.

**Ejemplo de uso:**

```
.container {
  width: 200px;
  height: 200px;
  overflow: scroll;
}
```
En este ejemplo, si el contenido dentro del contenedor excede sus dimensiones, se agregarán barras de desplazamiento para permitir al usuario navegar por el contenido oculto.

## LA propiedad text overflow.

La propiedad text-overflow en CSS se utiliza para especificar cómo debería comportarse el contenido de un elemento cuando desborda su contenedor en la dirección en línea (horizontal). Esta propiedad es particularmente útil cuando se trabaja con texto que podría ser demasiado largo para ajustarse al ancho de su contenedor.

La propiedad text-overflow tiene tres valores principales:

- text-overflow: _clip_;

Este valor indica que el contenido que desborda simplemente se corta y no se muestra fuera de los límites del contenedor. No se proporciona ninguna indicación visual de que el contenido está truncado.

```
.container {
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden;    /* Oculta el contenido que desborda */
  text-overflow: clip; /* Corta el contenido que desborda */
}
```

- text-overflow: _ellipsis_;

Este valor agrega tres puntos suspensivos (...) al final del contenido que desborda, indicando visualmente que hay más contenido oculto.

```
.container {
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden;    /* Oculta el contenido que desborda */
  text-overflow: ellipsis; /* Agrega puntos suspensivos al final del contenido que desborda */
}
```

- text-overflow: <_string_>;

También puedes proporcionar tu propia cadena de texto para indicar el desbordamiento del contenido.

```
.container {
  white-space: nowrap; /* Evita el salto de línea */
  overflow: hidden;    /* Oculta el contenido que desborda */
  text-overflow: " [...]"; /* Agrega tu propia cadena de texto al final del contenido que desborda */
}
```

La propiedad text-overflow generalmente se usa en conjunto con las propiedades white-space: nowrap; y overflow: hidden; para controlar el desbordamiento de texto en una sola línea sin permitir saltos de línea. Estas propiedades son útiles cuando se trabaja con contenedores de ancho fijo y se quiere indicar de manera elegante que hay más contenido de texto disponible, pero que no cabe completamente en el contenedor.

## Propiedad position.

La propiedad position en CSS se utiliza para controlar el método de posicionamiento de un elemento en una página web. Puede tomar varios valores, cada uno de los cuales afecta la forma en que el elemento es colocado en relación con su posición normal en el flujo del documento.

Los valores principales de la propiedad position son:

- _static_:

Este es el valor predeterminado. Un elemento con position: static; se coloca en el flujo normal del documento. Ignora las propiedades top, right, bottom y left. No se ve afectado por propiedades z-index.

```
.element {
  position: static;
}
```

- _relative_:

Con position: relative;, el elemento se posiciona en relación con su posición normal en el flujo del documento, pero luego puede ajustarse usando las propiedades top, right, bottom y left.

```
.element {
  position: relative;
  top: 10px;
  left: 20px;
}
```

- _absolute_:

Con position: absolute;, el elemento se elimina del flujo normal del documento y se posiciona en relación con su contenedor posicionado más cercano (que no sea static). Si no hay ningún contenedor posicionado, se posicionará en relación con el elemento raíz (html).

```
.element {
  position: absolute;
  top: 50px;
  left: 100px;
}
```

- _fixed_:

Con position: fixed;, el elemento se elimina del flujo normal del documento y se posiciona en relación con la ventana del navegador. Permanecerá fijo incluso si la página se desplaza.

```
.element {
  position: fixed;
  top: 10px;
  right: 20px;
}
```

- _sticky_:

Con position: sticky;, el elemento es tratado como relative hasta que alcanza un cierto punto mientras se desplaza la página, momento en el cual se comporta como fixed. Es una combinación de relative y fixed.

```
.element {
  position: sticky;
  top: 20px;
}
```

La propiedad position es fundamental para el diseño y la maquetación de una página web, y su elección depende del comportamiento específico que desees lograr para un elemento en particular. Puedes combinar el uso de position con otras propiedades, como z-index, para controlar aún más la apariencia y la interactividad de los elementos en tu diseño.

## Propiedad z-index.

