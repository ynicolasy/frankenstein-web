import React from 'react';
import Pic from '../assets/singer.jpg';
import '../styles/Testimonio.css';

function Testimonio(props: any) {
  return(
      <div className='contenedor-testimonio'>
        <img className='img-testimonio'
           src={Pic}/>
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
          <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
      </div>
  );
}
export default Testimonio;