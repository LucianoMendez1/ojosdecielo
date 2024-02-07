import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./presentacion.css";

const Presentacion = React.forwardRef(() => {

  return (
    <>
      <div className='mx-2'>
          <div className="box_canvas ">
            <div className="container_titleHero">
              <h1 className="titleHero">Ojos de Cielo</h1>
            </div>
          
            <video className='videoHero' src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1707151582/ojos%20de%20cielo/153976-806571973_1080p_a00dsd.mp4" autoPlay loop muted></video>

           {/*  <div className="container_arrow">
                <div className="arrow bounce">
                  <img src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" width="100"/></div>
                </div>
                <div className="below"></div>
            </div> */}
        </div>
        </div>
     </>
  );
});

export default Presentacion;
