# 📘 Introducción

Esta guía describe el proceso para **clonar un repositorio existente**, trabajar con él localmente, y luego subirlo a **tu propio repositorio en GitHub**, permitiéndote personalizarlo y hacer tus propios cambios sin afectar el proyecto original.

Este flujo es útil cuando:

- Quieres usar otro proyecto como base para uno nuevo.
- No tienes permisos para editar el repositorio original.
- Deseas tener control total sobre tu copia del proyecto.
- Planeas desplegar tu propia versión, por ejemplo, en GitHub Pages.

---

# 🛠️ Guía para Clonar, Trabajar y Desplegar un Proyecto con Git y GitHub Pages

## ✅ Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Git](https://git-scm.com/)
- [Node.js y npm](https://nodejs.org/)
- [gh-pages](https://www.npmjs.com/package/gh-pages): puedes instalarlo con:
  ```bash
  npm install --save-dev gh-pages
  ```

---

## 📥 Clonar el Repositorio Original

1. Abre **Git Bash**.
2. Posiciónate en la carpeta donde quieres clonar el repositorio:
   ```bash
   cd /c/
   ```
3. Clona el repositorio original:
   ```bash
   git clone https://github.com/tu-usuario/repositorio-original.git
   ```
4. Entra en la carpeta del proyecto:
   ```bash
   cd repositorio-original
   ```

---

## 🚧 Preparar el Proyecto

1. Instala las dependencias:
   ```bash
   npm install
   ```
2. Cambia el nombre de la rama a `main` (opcional si ya es main):
   ```bash
   git branch -M main
   ```

---

## 🧪 Crear Tu Propio Repositorio en GitHub

1. Ve a [github.com](https://github.com) y crea un nuevo repositorio (sin README).
2. Copia la URL del botón verde "Code" (ej. HTTPS):
   ```
   https://github.com/tu-usuario/mi-proyecto.git
   ```
3. Clona tu nuevo repositorio:
   ```bash
   git clone https://github.com/tu-usuario/mi-proyecto.git
   ```
4. Entra a la carpeta del nuevo proyecto:
   ```bash
   cd mi-proyecto
   ```
5. Instala las dependencias (si es un clon limpio):
   ```bash
   npm install
   ```
6. (Opcional) Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

---

## ✍️ Hacer Cambios y Subir a GitHub

1. Realiza tus cambios en el código fuente.
2. Verifica qué archivos cambiaron:
   ```bash
   git status
   ```
3. Agrega todos los archivos modificados al área de preparación:
   ```bash
   git add .
   ```
4. Haz un commit con un mensaje claro:
   ```bash
   git commit -m "Agregué el botón de imprimir y corregí estilos"
   ```
5. Sube los cambios a GitHub:
   ```bash
   git push
   ```

> 🔐 La primera vez, es posible que te pida autenticarte con un token personal.

---

## 🌐 Desplegar en GitHub Pages (usando Vite + gh-pages)

Asegúrate de tener lo siguiente en tu `package.json`:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

1. Genera la versión de producción:
   ```bash
   npm run build
   ```
2. Haz deploy a GitHub Pages:
   ```bash
   npm run deploy
   ```
3. Verifica que tu sitio esté en línea:

   Ve a tu repositorio en GitHub.com > ⚙️ Settings > **Pages** y revisa la URL. Normalmente es:

   ```
   https://tu-usuario.github.io/mi-proyecto/
   ```

---

## 🔁 Cada vez que hagas cambios...

Después de hacer cambios al proyecto:

```bash
git add .
git commit -m "Mensaje descriptivo"
git push
npm run build
npm run deploy
```

---

## 📝 Notas Finales

- El script `gh-pages` sobrescribirá el contenido anterior cada vez que hagas deploy.
- Si usas rutas en React, asegúrate de configurar correctamente el `base` en `vite.config.js`:
  ```js
  export default defineConfig({
    base: "/mi-proyecto/",
    // ...
  });
  ```

---

🚀 ¡Con esto ya deberías tener tu proyecto listo y en línea!
