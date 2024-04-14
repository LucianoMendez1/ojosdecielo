import React from "react";
import "./presentacion.css";

const Presentacion = React.forwardRef(() => {
  return (
    <div className="mx-2">
      <div className="box_canvas">
        <div className="container_titleHero">
          <div className="img"><img src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1713068353/1_atdoir.png" alt="" /></div>
        </div>

        <video
          className="videoHero"
          src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1710010544/ojos%20de%20cielo/sunrise_-_7127_1080p_vtjltn.mp4"
          autoPlay
          loop
          muted // Asegúrate de tener el atributo muted para dispositivos móviles
          playsInline // Necesario para iOS para reproducir videos en línea
        ></video>

        {/* Flecha y otros elementos */}
      </div>
    </div>
  );
});

export default Presentacion;
