import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from "is-mobile";
import "../pendulohebreo/pendulohebreo.css";
import "./masajes.css"

const Masajes = () => {
  return (
    <div className="masajes-wrapper">
      <div className="box_text_pendulo">
        <h2>Masajes </h2>
        <p>
          <span>Masajes descontracturantes </span>, aliviar la tensión muscular
          y reducir las contracturas que pueden causar molestias y limitaciones
          en el movimiento. Este tipo de masaje se centra en identificar y
          liberar los puntos de tensión y nudos musculares que se han formado
          debido al estrés, la mala postura, el ejercicio intenso u otras
          actividades que tensan los músculos. 
          <br/>
          Durante un masaje
          descontracturante, <span>Silvina utiliza una combinación de movimientos
          profundos y presión focalizada </span> para trabajar sobre las áreas
          problemáticas, aflojando los músculos y restaurando la flexibilidad y
          la movilidad. Estos movimientos pueden incluir amasamiento, presión
          sostenida, estiramientos suaves y técnicas de liberación miofascial.
        </p>
        <div className="Button">Solicitar Turno</div>
        <div className="img-container-masajes">
          
          
            <img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1708479078/ojos%20de%20cielo/masajes/physio-1778029_1920_hzfeyn.jpg" className="img-masajes3" alt="" />

        </div>
      </div>

    </div>
  );
};

export default Masajes;
