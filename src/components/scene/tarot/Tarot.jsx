import React, { useEffect, useState } from "react";

import "./tarot.css";
import ButtonSolicitud from "../../button/ButtonSolicitud";
const Tarot = () => {
  const [isMobile, setIsMobile] = useState(false);
  const message = 'Hola, me gustaría solicitar un turno para el tarot.';
  useEffect(() => {
    if (window.innerWidth < 550) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="container_animala">
      <div className="box_text_biography-tarot">
        <h2> tarot evolutivo</h2>
        <p>
          Una forma de lectura de tarot que <span>  se en foca en el crecimiento
          personal </span> la autoconciencia y el desarrollo espiritual,ofreciendo
          perspectivas y orientación para el crecimiento interior
        

        </p>
        <ButtonSolicitud message={message} />
      </div>

      
    <div className="box_img_animala">
          <img
            className="img_animala img_1" // Cambiado a ".bio-image-static-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707266989/ojos%20de%20cielo/KD7wk4dmD_340x340__1_quqiur.jpg"
            alt="Image 1"
          />
          <img
            className="img_animala img_2" // Cambiado a ".bio-image-static2-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707267097/ojos%20de%20cielo/tarot-significado-de-las-78-cartas-arcanos-mayores-y-menores-y-como-interpretarlas_ba0b7645_231103205235_1280x720_ampsqc.jpg"
            alt="image 2"
          />
          <img
            className="img_animala img_3" // Cambiado a ".bio-image-static3-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707266989/ojos%20de%20cielo/S1fzbyTDR_340x340__1_pgqlc8.jpg"
            alt="Image 3"
          />    
          <img
            className="img_animala img_4" // Cambiado a ".bio-image-static3-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707267288/ojos%20de%20cielo/Hu-WH5uqy_1256x620__1_mnobae.jpg"
            alt="Image 4"
          />
          <img
            className="img_animala img_5" // Cambiado a ".bio-image-static3-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707266987/ojos%20de%20cielo/sM8aHCDXK_340x340__1_dvyosw.jpg"
            alt="Image 5"
          />
          <img
            className="img_animala img_6" // Cambiado a ".bio-image-static3-animala"
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707266985/ojos%20de%20cielo/w6Y5bH9D8_1256x620__1_u9b5r6.jpg"
            alt="Image 6"
          />
        </div>
     
    </div>
  );
};

export default Tarot;

