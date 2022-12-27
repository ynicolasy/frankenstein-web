import React from 'react';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import MenuBar from './components/MenuBar';
import { useEffect } from 'react';
import Testimonio from './components/Testimonio';

function App() {
  
  useEffect( () => {
    document.title = 'Frankenstein'
  }, [] );

  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Titulo Pedorro</h1>
        <Testimonio
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='Da miedo cambiar de carrera. Solo gané la ..............'
        />
        <Testimonio
          nombre='Sara Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniero de Software'
          empresa='ChatDesk'
          testimonio='freecode fue la puerta de entrada ..............'
        />
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniero de Software'
          empresa='Spotify'
          testimonio='freecode fue la puerta de entrada ..............'
        />
      </div>
    </div>
  )
}

export default App;

