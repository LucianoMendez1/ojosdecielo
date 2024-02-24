import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from "is-mobile";
import "../biografia/biografia.css";
import "./flores.css";

const FloresBach = () => {
  return (
   
    <div className="contacto-page">
    
      <div className="contacto-container">
        
        <h2 className="contacto-titulo">Contacto</h2>
        <p>
          Si deseas solicitar un cuadro a medida, por favor contáctanos a través de Instagram
        </p>
        <p>
          <a href="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707267288/ojos%20de%20cielo/Hu-WH5uqy_1256x620__1_mnobae.jpg" target="_blank" rel="noopener noreferrer">
       
          </a>
        </p>
        <div className="fin">Gracias.</div>
      </div>
    </div>
  )
};

export default FloresBach;
