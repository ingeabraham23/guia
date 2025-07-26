# Capturas de pantalla con JavaScript

1. Instalar la dependencia html2canvas

`npm install --save html2canvas`

2. Instalar las dependencias para manejar fechas en caso de que se desee guardar su archivo con un nombre que lleve alguna fecha.

`npm install date-fns`

`npm install date-fns/locale`

3. Importar las dependencias en el componente a usar.

```
import { format } from 'date-fns';
import esLocale from 'date-fns/locale/es';
import { useRef } from "react";
import html2canvas from "html2canvas";
```

4. Agregar dentro del componente funcional la funcion para formatear la fecha.

```
function obtenerFechaFormateada() {
    const fecha = new Date();

    // Utiliza la librería date-fns para obtener el nombre del día y del mes en español
    const options = { locale: esLocale };
    const dia = isToday(fecha) ? 'Hoy' : isYesterday(fecha) ? 'Ayer' : format(fecha, 'EEEE', options);

    // Formatea la fecha utilizando toLocaleDateString
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    return `${dia} ${fechaFormateada}`;
  }
```

5. Agregar dentro del componente funcional la constante para la referencia hacia la tabla a capturar.

`const tablaRef = useRef(null);`

6. Agregar dentro del componente funcional la funcion para capturar la tabla.

```
function capturarTabla(tabla, pacienteNombre) {
    const fechaFormateada = obtenerFechaFormateada();

    html2canvas(tabla).then(function (canvas) {
      const pngUrl = canvas.toDataURL('image/png');
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = `receta_${fechaFormateada}_${pacienteNombre}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    });
  }
```

7. Agrear la referencia a la tabla.

`<table className="tabla-tezo" ref={tablaRef}>`

8. Llamar a la funcion capturarTabla con un boton.

```
<button onClick={() => capturarTabla(tablaRef.current, pacienteNombre)}>
Capturar
</button>
```
