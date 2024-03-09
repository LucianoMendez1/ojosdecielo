import React, { useEffect, useState } from "react";
import "../aromaterapia/aromaterapia.css";
import ButtonSolicitud from "../../button/ButtonSolicitud";
const FloresBach = () => {
  const massage ="Hola me gustaria sacar un turno para la sesion de Aromaterapia";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 550) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="container_aromaterapia">
      `<div className="box_text_biography-aromaterapia">
        <h2> Flores de Bach</h2>
        <p>
          La aromaterapia es una forma de medicina alternativa basada en el uso
          de materiales aromáticos, incluidos los aceites esenciales y otros
          compuestos aromáticos, con el objetivo de mejorar el bienestar
          psicológico o físico​​ para la cual no existe buena evidencia de
          eficacia
        </p>
       <ButtonSolicitud  massage={massage}/>
        <div className="container_video_detail">
        {/* <div className="box_video_detail">
            <video
              className="video_detail"
              autoPlay
              loop
              muted
              playsInline
              src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1708298437/ojos%20de%20cielo/aromaterapia/pexels-mart-production-8447712_2160p_xtcki0.mp4"
            ></video> {/* Aquí está el cambio */}
       {/*    </div> */} 
        </div>
      </div>
     </div> 
  );
};

export default FloresBach;
