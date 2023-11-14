# Usar iconos FontAwesome

1. Instalar el nucleo.

    `npm install --save @fortawesome/fontawesome-svg-core`

2. Instalar los paquetes de iconos gratis regular y solido.

    `npm install --save @fortawesome/free-solid-svg-icons`

    `npm install --save @fortawesome/free-regular-svg-icons`


3. Intalar el componente _React_.

    `npm install --save @fortawesome/react-fontawesome@latest`

4. Importar el componente _FontAwesomeIcon_.

    `import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";`

5. Importar el Icono, en este caso se importa el Icono _faFileDownload_ que se implementa en el paso 6.

    `import {faFileDownload} from "@fortawesome/free-solid-svg-icons";`

6. Implementar el Icono.
    En este caso se implementa el Icono _faFileDownload_ dentro de un boton usando el componente _FontAwesomeIcon_.

```
<button onClick={capturarTabla}             className="boton-capturar">
    Descargar 
    <FontAwesomeIcon icon={faFileDownload}>
    </FontAwesomeIcon>
</button>
```