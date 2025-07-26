# Usar base de datos Dexie indexedDB

### Instalar las dependencias

```
npm install dexie
npm install dexie-react-hooks
```

### Crear archivo "db.js" en este caso la guardaremos en la carpeta src

```
//db.js
import Dexie from "dexie";

const db = new Dexie("NombreDeBaseDeDatos");
db.version(1).stores({
  registros: "++id, titulo, productos",
});

export default db;
```

### Importar al componente que se va a utilizar, en este caso, se importa a un componente que se encuentra dentro de "src/components" por eso los "2 puntos" antes de la diagonal porque sube un nivel en la carpeta que se encuentra.

`import db from "../db";`


