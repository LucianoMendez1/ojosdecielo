import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from "is-mobile";
import "./pendulohebreo.css";

const Pendulohebreo = () => {
  return (
    <div className="pendulo-wrapper">
      <div className="box_text_pendulo">
        <h2>Pendulo Hebreo </h2>
        <p>
          El <span>Péndulo Hebreo es una técnica de desbloqueo</span>, armonización y
          sanación holística que opera mediante la vibración de las letras
          hebreas. 
          Se utiliza para limpiar energéticamente a diferentes niveles,
          incluyendo programas mentales, influencias externas y trabajos
          energéticos conscientes o inconscientes realizados por otros en
          nosotros.<br/> <br/>  Las sesiones de terapia con el Péndulo Hebreo se recomiendan
          para abordar alteraciones en los planos físico, mental, emocional o
          espiritual, así como en los siete cuerpos energéticos.<span> Pueden detectar
          y restablecer cualquier desequilibrio energético, incluso si no se
          manifiesta en el cuerpo físico</span>. Esta terapia es beneficiosa para
          aliviar el dolor, ansiedad, estrés, bloqueos emocionales o mentales,
          así como para depuración y recuperación del equilibrio energético.
        </p>
        <div className="Button">Solicitar Turno</div>
      </div>
      <div className="box_img_pendulo">
        
        <img
          className="img_pendulo img_pendulo1" // Cambiado a ".bio-image-static-animala"
          src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1708285680/ojos%20de%20cielo/pendulo/cache_42723249_qm7ocm.jpg"
          alt="Image 1"
        />
        <img
          className="img_pendulo img_pendulo2" // Cambiado a ".bio-image-static2-animala"
          src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1708285678/ojos%20de%20cielo/pendulo/D_NQ_NP_766814-MLA45787753312_052021-O_b18ykl.webp"
          alt="image 2"
        />
        <img
          className="img_pendulo img_pendulo3" // Cambiado a ".bio-image-static3-animala"
          src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1708285680/ojos%20de%20cielo/pendulo/pendulohebreo_p7l0lq.webp"
          alt="Image 3"
        />
      </div>
      
    </div>
  );
};

export default Pendulohebreo;
