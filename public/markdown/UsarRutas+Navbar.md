# Usar rutas en react + NavBar

**Instalar el componente.**

`npm install react-router-dom`

**importar en _App.jsx_**

En este componente principal App.jsx se importan los componentes necesarios para utilizar las rutas, tambien los componentes a los cuales se dirigiran las rutas y el Navbar que contendra el acceso a las rutas.

```
// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cronograma from "./components/Cronograma";
import Sosa from "./components/Sosa";

function App() {
  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Cronograma />} />
            <Route path="/sosa" element={<Sosa />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;
```



**Aqui el codigo de la _Navbar_**.

```
import { Link } from 'react-router-dom';
import "./Navbar.css"
import {
    faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigationItems = [
  { path: '/', icon: faClock, label: 'Tezo' },
  { path: '/sosa', icon: faClock, label: 'Sosa' },

];

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {navigationItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <Link to={item.path} className="nav-link">
              <FontAwesomeIcon icon={item.icon} size="2x" style={{ fontSize: '24px' }}/> {/* Renderiza el icono de Font Awesome */}
              <span className="nav-label">{item.label}</span> {/* Agrega el span para mostrar la etiqueta */}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
```