import React, { useEffect, useState } from "react";
import "../aromaterapia/aromaterapia.css";
import ButtonSolicitud from "../../button/ButtonSolicitud";
const Masajes = () => {
  const massage ="Hola me gustaria sacar un turno para la sesion de Masajes";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 550) {
      setIsMobile(true);
    }
  }, []);

  return (
    <div className="container_aromaterapia">
      <div className="box_text_biography-aromaterapia">
      <h2>Masajes </h2>
        <p>
          <span>Masajes descontracturantes </span>, aliviar la tensión muscular
          y reducir las contracturas que pueden causar molestias y limitaciones
          en el movimiento. 
          <br/>
          Durante un masaje
          descontracturante, <span>Silvina utiliza una combinación de movimientos
          profundos y presión focalizada </span> para trabajar sobre las áreas
          problemáticas, aflojando los músculos y restaurando la flexibilidad y
          la movilidad. Estos movimientos pueden incluir amasamiento, presión
          sostenida, estiramientos suaves y técnicas de liberación miofascial.
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

export default Masajes;
