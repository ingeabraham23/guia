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

`
<button className className="boton-calcelar" >Cancelar</button>
`

Estas 2 formas se recomienda que se definan en un archivo llamado de la misma forma y en la misma carpeta.

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


