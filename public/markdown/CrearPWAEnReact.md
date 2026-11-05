# Crear PWA en _React_

`npm install -D vite-plugin-pwa`

`npm install -D @vite-pwa/assets-generator`

1. Descargar el icono svg de la pagina https://www.svgrepo.com/
2. En este caso el archivo se llama _"calendario.svg"_
3. Guarda el icono svg en la carpeta _"public"_

**Crear el archivo _pwa-assets.config.js_ en la carpeta raíz del proyecto**

Debería de quedar algo así:

```
import { defineConfig, minimalPreset as preset } from '@vite-pwa/assets-generator/config'

export default defineConfig({
  preset,
  images: [
    'public/calendario.svg',
  ]
})
```

4. Añadir el siguiente script al _"package.json"_

```
{
  "scripts":{
    "generar-iconos": "pwa-assets-generator"
  }
}
```

`npm run generar-iconos`

Se crearan los iconos necesarios en la carpeta "public"

5. Editar "vite.config.js" agregando el objeto _manifest_ y dentro todas las propiedades para la **PWA**, debería de quedar algo así:

> ⚠ Asegurate de que modificar base por la base de tu proyecto

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

const base = "/horarios/";

export default defineConfig({
  base,

  server: {
    host: true,
  },

  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      devOptions: {
        enabled: true,
      },

      manifest: {
        id: base,
        name: "PWA Horarios Urbanos Rojos",
        short_name: "PWA Horarios",
        description:
          "Aplicación para controlar los horarios del transporte público.",

        lang: "es-MX",
        dir: "ltr",

        start_url: base,
        scope: base,

        display: "standalone",
        display_override: ["standalone", "fullscreen"],
        orientation: "portrait",

        background_color: "#ffffff",
        theme_color: "#317EFB",

        categories: ["transportation", "utilities"],

        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "maskable-icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    }),
  ],
});
```

### Crear el componente reutilizable InstalarApp.jsx

Este componente se encarga de detectar si la app ya esta instalada y en caso de que no esté instalada mostrará un botón de instalación.

```
import { useEffect, useState } from "react";
import "./InstalarApp.css";

export default function InstalarApp() {
  const [eventoInstalacion, setEventoInstalacion] = useState(null);
  const [instalada, setInstalada] = useState(false);

  useEffect(() => {
    // Detectar si ya está instalada
    const comprobarInstalacion = () => {
      const esStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone === true;

      setInstalada(esStandalone);
    };

    comprobarInstalacion();

    // Detectar cuándo el navegador permite instalar
    const manejarInstalacion = (event) => {
      event.preventDefault();
      setEventoInstalacion(event);
    };

    const manejarInstalada = () => {
      setInstalada(true);
      setEventoInstalacion(null);
    };

    window.addEventListener(
      "beforeinstallprompt",
      manejarInstalacion
    );

    window.addEventListener(
      "appinstalled",
      manejarInstalada
    );

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        manejarInstalacion
      );

      window.removeEventListener(
        "appinstalled",
        manejarInstalada
      );
    };
  }, []);

  async function instalarApp() {
    if (!eventoInstalacion) return;

    await eventoInstalacion.prompt();

    const resultado = await eventoInstalacion.userChoice;

    if (resultado.outcome === "accepted") {
      setInstalada(true);
    }

    setEventoInstalacion(null);
  }

  if (instalada || !eventoInstalacion) {
    return null;
  }

  return (
    <button
      className="button-app"
      onClick={instalarApp}
    >
      Instalar aplicación
    </button>
  );
}

```

**InstalarApp.css**

Creas la hoja de estilos InstalarApp.css

```
.button-app {
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 16px auto;
  padding: 14px 20px;

  border: none;
  border-radius: 12px;

  background: #317efb;
  color: #fff;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
  touch-action: manipulation;
}

.button-app:active {
  transform: scale(0.98);
}
```

Después lo utilizas donde quieras:

```
import InstalarApp from "./components/InstalarApp";

function App() {
  return (
    <>
      <InstalarApp />
      {/* Resto de tu aplicación */}
    </>
  );
}

export default App;
```

### Desplegar

`npm run build`

`npm run deploy`
