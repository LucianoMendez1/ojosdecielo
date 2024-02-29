import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import isMobile from "is-mobile";
import "../biografia/biografia.css";

const Reiki = () => {
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
          <h2> Reiki </h2>
          <p>
            Las sesiones de <span>Reiki Angelical consisten en canalizar Energía Vital
            Universal mediante la conexión con los Ángeles </span> para pasársela a la
            persona que está siendo tratada. Luego de la sesión esta Energía
            sigue siendo absorbida por el receptor durante las próximas siete
            horas donde llega al pico de energía recibida.<br></br>
            Cuando contratan <span> sesiones de Reiki a distancia, acordamos un horario entre ustedes y
            nuestra Reikista,</span> y en el momento indicado van a tener que ubicarse
            en un lugar tranquilo donde no vayan a ser interrumpidxs al menos
            por una hora. También, si lo desean, pueden poner música suave y
            alguna esencia, sahumerio o hierbas para ayudar con el ambiente.
          </p>
        </div>
        {/*  <div className="img-container2">
          {" "}
          <img
            src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1707262216/ojos%20de%20cielo/klipartz.com_qlhotw.png"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default Reiki;
