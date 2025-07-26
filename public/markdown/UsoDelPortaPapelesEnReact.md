# Uso del portapapeles en React

### Instalar dependencias

`npm install --save react-copy-to-clipboard`

### Importar al componente

`import { CopyToClipboard } from "react-copy-to-clipboard";`

### En este caso, yo envolvi todo el texto en una constante con las condiciones esenciales

```
const formattedTextTacopan = `Te llevas:\r\n ${
    formatoTiempo(diferenciaTacopan)
  } del ${
    penultimaUnidadTacopan ? penultimaUnidadTacopan.numeroUnidad : "N/A"
  } ${
    penultimaUnidadTacopan ? penultimaUnidadTacopan.tipo : "N/A"
  } Tacopan\r\n${
    formatoTiempo(tiempoTranscurridoTalzintan)
  } del ${
    ultimaUnidadTalzintan ? ultimaUnidadTalzintan.numeroUnidad : "N/A"
  } ${
    ultimaUnidadTalzintan ? ultimaUnidadTalzintan.tipo : "N/A"
  } Talzintan\r\n${
    formatoTiempo(tiempoTranscurridoLoma)
  } del ${
    ultimaUnidadLoma ? ultimaUnidadLoma.numeroUnidad : "N/A"
  } ${
    ultimaUnidadLoma? ultimaUnidadLoma.tipo : "N/A"
  } Loma\r\n${
    formatoTiempo(tiempoTranscurridoCalanorte)
  } del ${
    ultimaUnidadCalanorte ? ultimaUnidadCalanorte.numeroUnidad : "N/A"
  } ${
    ultimaUnidadCalanorte? ultimaUnidadCalanorte.tipo : "N/A"
  } Calanorte\r\n${
    formatoTiempo(tiempoTranscurridoPajaco)
  } del ${
    ultimaUnidadPajaco? ultimaUnidadPajaco.numeroUnidad : "N/A"
  } ${
    ultimaUnidadPajaco? ultimaUnidadPajaco.tipo : "N/A"
  } Pajaco`;
```

### CopyToClipboard es un componente de envoltura simple, no representa ninguna etiqueta, por lo que requiere que solo esté presente el elemento secundario, que se utilizará para capturar clics.

```
    <CopyToClipboard text={formattedTextTacopan}>
        <button
            className={`${
            ultimaUnidadTacopan.tipo === "blanco"
            ? "white-bg"
            : "red-bg"
            }`}
        >
            {ultimaUnidadTacopan.numeroUnidad}
        </button>
    </CopyToClipboard>
```

