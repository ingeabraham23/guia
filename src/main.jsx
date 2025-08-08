// src/main.jsx
// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import VisorMarkdown from './components/VisorMarkdown.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/guia"> {/* si usas GitHub Pages */}
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/guia1" element={<VisorMarkdown archivo="/markdown/BaseDeDatosDexieIndexedDB.md" />} />
      <Route path="/guia2" element={<VisorMarkdown archivo="/markdown/CrearAppViteReact.md" />} />
      <Route path="/guia3" element={<VisorMarkdown archivo="/markdown/CrearPWAEnReact.md" />} />
      <Route path="/guia4" element={<VisorMarkdown archivo="/markdown/Estilos.md" />} />
      <Route path="/guia5" element={<VisorMarkdown archivo="/markdown/FlexBox.md" />} />
      <Route path="/guia6" element={<VisorMarkdown archivo="/markdown/ModeloDeCAjaCSS.md" />} />
      <Route path="/guia7" element={<VisorMarkdown archivo="/markdown/Notificaciones.md" />} />
      <Route path="/guia8" element={<VisorMarkdown archivo="/markdown/ScreenshotConJavaScript.md" />} />
      <Route path="/guia9" element={<VisorMarkdown archivo="/markdown/SubirYDesplegarAGithubYGithubPages.md" />} />
      <Route path="/guia10" element={<VisorMarkdown archivo="/markdown/UsarIconosFontAwesome.md" />} />
      <Route path="/guia11" element={<VisorMarkdown archivo="/markdown/UsarRutas+Navbar.md" />} />
      <Route path="/guia12" element={<VisorMarkdown archivo="/markdown/UsoDelPortaPapelesEnReact.md" />} />
      <Route path="/guia13" element={<VisorMarkdown archivo="/markdown/Extensiones para VS Code.md" />} />
      <Route path="/guia14" element={<VisorMarkdown archivo="/markdown/Configuracion VS Code.md" />} />
    </Routes>
  </BrowserRouter>
);
