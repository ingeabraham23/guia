/* eslint-disable react/prop-types */
// src/componentes/VisorMarkdown.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import '../App.css';

const VisorMarkdown = ({ archivo }) => {
  const [contenido, setContenido] = useState('');

  useEffect(() => {
    fetch(archivo)
      .then((respuesta) => respuesta.text())
      .then((texto) => setContenido(texto));
  }, [archivo]);

  return (
    <div className="contenedor">
      <div className="markdown">
        <ReactMarkdown>{contenido}</ReactMarkdown>
      </div>
    </div>
  );
};

export default VisorMarkdown;
