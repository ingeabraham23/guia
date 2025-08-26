# Clonar Repositorio GitHub

_Esta guía es para que bajes un repositorio a tu PC (uno que no tengas localamente), hagas cambios y subas los cambios a ese repositorio._

**Ve a tu repositorio en GitHub y copia la URL del botón verde "Code" > HTTPS. Por ejemplo:**

`https://github.com/tu-usuario/mi-proyecto.git`

**Ahora en la terminal desplazate a la carpeta donde quieres que se descargue el repositorio, por ejemplo:**

`cd c:`

**Ahora en la terminal escribe:**

`git clone https://github.com/tu-usuario/mi-proyecto.git`

**Entra a la carpeta del proyecto**

`cd mi-proyecto`

**Instala las dependencias**

`npm install`

**(Opcional) Ejecuta el proyecto en desarrollo**

`npm run dev`

**Verifica si esta activado git en el repositorio.**

`git status`

**Debe aparecerte:**

>On branch main

**Y tambien en la terminal bash:**
>Aparere en corchetes la rama (main)

---
**VERIFICAR GH-PAGES**

Verificar en el *package*.json si en las dependencias de desarrollo se encuentra *gh-pages* y si existe el script *deploy*.

**Si no existen deberas instalar gh-pages y crear el script**

`npm install gh-pages --save-dev`

`"deploy":"gh-pages -d dist"`

---

**PASOS PARA HACER CAMBIOS Y SUBIR A GITHUB**

1. Haz tus cambios

1. Verifica qué cambió

   `git status`

1. Agrega los archivos al área de preparación

   `git add .`

1. Haz un commit con un mensaje descriptivo

   `git commit -m "Agregué el botón de imprimir y corregí estilos"`

1. Sube tus cambios a GitHub

   `git push -u origin main`

> Si es la primera vez que haces push, puede pedirte iniciar sesión o autenticación con token personal. Si ya está configurado, subirá directamente a la rama actual (main o master normalmente).

> (Opcional) Verifica en GitHub
> Ve a tu repositorio en GitHub.com y verifica que tus cambios aparecen.

# GitHub Pages

> Si tu proyecto ya estaba funcionando con GitHub Pages usando gh-pages, entonces después de hacer cambios hay que volver a hacer deploy.

**Voy a asumir que: Es un proyecto con Vite o React/Vite. Ya tienes instalada la librería gh-pages. Tu package.json tiene algo como:**

```
"scripts": {
  "build": "vite build",
  "deploy": "gh-pages -d dist"
}
```

1. Construye tu app

   _Esto genera la carpeta dist con los archivos listos para producción:_

   `npm run build`

1. Haz deploy a GitHub Pages

   `npm run deploy`

1. Debera aparecerte:

   >Published

1. Verifica que funciona

   _Ve a tu repositorio → Settings > Pages y verifica la URL. Normalmente es algo como:_

   `https://tu-usuario.github.io/mi-proyecto/`
