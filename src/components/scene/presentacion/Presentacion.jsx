import React from "react";
import "./presentacion.css";

const Presentacion = React.forwardRef(() => {
  return (
    <div className="mx-2">
      <div className="box_canvas">
        <div className="container_titleHero">
          <h1 className="titleHero">Ojos de Cielo</h1>
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
