import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from "is-mobile";
import "../biografia/biografia.css";
import "./flores.css";
import ButtonSolicitud from "../../button/ButtonSolicitud";
const FloresBach = () => {
  const message = 'Hola, me gustaría solicitar un turno para la terapia de FloresBach.';

  return (
    <div className="bio-wrapper">
      <div className="img-container">
        {/*    <div className="img-container1">
        {" "}
        <img
          src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707262201/ojos%20de%20cielo/klipartz.com_zuin77.png"
          alt=""
        />
      </div> */}
        <div className="box_text_biography">
          <h2> Flores de Bach </h2>
          <p>
            Las flores de Bach son remedios naturales que se pueden administrar
            tanto a adultos como a niños, así como a bebés, animales y plantas.
            No hay efectos secundarios y los remedios pueden tomarse por vía
            oral o aplicarse sobre la piel.Las flores de Bach ayudan al cuerpo a
            curarse a sí mismo y también ayudan a restablecer el equilibrio en
            las emociones negativas. Esto es genial para el bienestar
            psicológico. Las Flores de Bach son 38 remedios preparados a base de
            flores y plantas. Cada flor y planta se utiliza homeopáticamente
            para tratar un problema emocional diferente.
          </p>
          <ButtonSolicitud message={message} />
        </div>
      
      </div>
    </div>
  );
};

export default FloresBach;
