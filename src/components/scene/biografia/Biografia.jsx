import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from "is-mobile";
import "./biografia.css";

const Biografia = () => {
  return (
    <div className="bio-wrapper">
      <div className="img-container">
        <div className="img-container1">
          {" "}
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707262201/ojos%20de%20cielo/klipartz.com_zuin77.png"
            alt=""
          />
        </div>
        <div className="box_text_biography">
          <h2> Terapeuta Integral Curando Cuerpo Mente y Espíritu </h2>
          <p>
            el bienestar completo.  Emplea técnicas como <span>digitopuntura, masajes,
            registros akáshicos, péndulo hebreo, tarot evolutivo, aromaterapia,
            flores de Bach y Reiki.</span> 
            <br/>
            <br/>
            Reconoce la conexión entre los aspectos
            físicos, mentales, emocionales y espirituales de la salud,<span> buscando
            restaurar el equilibrio y la armonía en todos los niveles del ser.</span>
           
           
          </p>
        </div>
        <div className="img-container2">
          {" "}
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707262216/ojos%20de%20cielo/klipartz.com_qlhotw.png"
            alt=""
          />
        </div>
      </div>
  

           
    </div>
  );
};

export default Biografia;
