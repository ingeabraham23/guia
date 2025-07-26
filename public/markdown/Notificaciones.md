# Notificaciones en React react-toastify.

- instalar la dependencia.

`npm install --save react-toastify`

- En el archivo _main.jsx_ importar las dependencias.

```
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
```

- Añadir el componente ToastContainer dentro de _main.jsx_

```
<React.StrictMode>
<App/>
<ToastContainer/>
</React.StrictMode>
```

- Usar en algun componente.

```
import {toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

toast.success("Exito")
toast.info("Bienvenido")
toast.warn("Precaución")
toast.error("Error")
```

## Editar Notificaciones

1. Puedes editar los valores para todas las notificaciones desde el **ToastContainer** así:

```
<ToastContainer
    position="top-right" //top-left, top-center, bottom-left, bottom-right, bottom-center
    autoClose={5000} // milisegundos
    hideProgressBar={false} // Ocultar barra de progreso
    newestOnTop={false}
    closeOnClick //Cerrar al hacer click
    rtl={false} //De Derecha aizquierda
    pauseOnFocusLoss //Pausar al estar salir de la ventana
    draggable //Se puede arrastrar
    pauseOnHover //Pausar al hacer click
    theme="light" // dark, colored.
/>
{/* Same as */}
<ToastContainer />
```

2. Puedes editar los valores de para una notoficacion en especifíco al emitirla así:

```
toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});
```

