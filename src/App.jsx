// src/App.jsx
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="contenedor">
      <h1>Guías disponibles</h1>
      <ul>
        <li><Link to="/guia1">Base De Datos Dexie IndexedDB</Link></li>
        <li><Link to="/guia2">Crear App Vite React</Link></li>
        <li><Link to="/guia3">Crear PWA En React</Link></li>
        <li><Link to="/guia4">Estilos CSS</Link></li>
        <li><Link to="/guia5">FlexBox</Link></li>
        <li><Link to="/guia6">ModeloDeCAjaCSS</Link></li>
        <li><Link to="/guia7">Notificaciones</Link></li>
        <li><Link to="/guia8">ScreenshotConJavaScript</Link></li>
        <li><Link to="/guia9">SubirYDesplegarAGithubYGithubPages</Link></li>
        <li><Link to="/guia10">UsarIconosFontAwesome</Link></li>
        <li><Link to="/guia11">UsarRutas+Navbar</Link></li>
        <li><Link to="/guia12">UsoDelPortaPapelesEnReact</Link></li>
        <li><Link to="/guia13">ExtensionesparaVSCode</Link></li>
        <li><Link to="/guia14">ConfiguracionVSCode</Link></li>
      </ul>
    </div>
  );
}

export default App;
