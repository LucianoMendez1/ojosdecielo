import React, { useEffect, useState } from "react";
import "./aromaterapia.css";

const Aromaterapia = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 550) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="container_aromaterapia">
      <div className="box_text_biography-aromaterapia">
        <h2> Aromaterapia</h2>
        <p>
          La aromaterapia es una forma de medicina alternativa basada en el uso
          de materiales aromáticos, incluidos los aceites esenciales y otros
          compuestos aromáticos, con el objetivo de mejorar el bienestar
          psicológico o físico​​ para la cual no existe buena evidencia de
          eficacia
        </p>
        <button className="Button">Solicitar Turno</button>
        <div className="container_video_detail">
        <div className="box_video_detail">
            <video
              className=""
              autoPlay
              loop
              muted
              playsInline
              src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1708298907/ojos%20de%20cielo/aromaterapia/pexels-ekaterina-bolovtsova-6768211_Original_efczta.mov"
            ></video> {/* Aquí está el cambio */}
          </div>
        </div>
      </div>
     </div> 
  );
};

export default Aromaterapia;
