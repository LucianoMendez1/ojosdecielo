import React, { useEffect, useState } from "react";

import "./tarot.css";

const Tarot = () => {
  const [isMobile, setIsMobile] = useState(false);

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
      </div>

      {isMobile ? (
        <div className="box_video">
         {/*  <video
            className="video_animala_mobile"
            autoPlay
            loop
            muted
            playsInline
            src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907149/ProyectAgustin/2_gtnfou.mp4"
          ></video> */}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Tarot;

/* 

   <div className="bio-wrapper-animala">
      <div className="bio-content-animala">
        <div className="bio-portfolio-animala">
          <div className="bio-container-animala">
            <div className="bio-gallery-animala">
              <div className="bio-item-animala">
                <div className="bio-text-animala">
                  <h2 className="bio-animala">
                    <div className="title"><h2>Animala</h2></div>
                    <div className="bio-text-animala">
                      En 2023, se convirtió en un lugar emocionante
                      para <span className="highlighted-text">500 personas. </span><br/><br/> Conocido por su música innovadora y
                      apoyo a talentos locales, lo que ha dejado una marca
                      importante en la escena musical.

                    </div>
                  </h2>
                  <video
                    className="bio-video-animala"
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://res.cloudinary.com/dvnhn35l4/video/upload/v1696907149/ProyectAgustin/2_gtnfou.mp4"
                  ></video>

                </div>
             
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala"> 
                  <img
                    className="bio-image-static-animala" // Cambiado a ".bio-image-static-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951746/Animala/349575254_1452085322226359_8168062326411260196_n_zl5jog.jpg"
                    alt="Image 1"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static2-animala" // Cambiado a ".bio-image-static2-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699064819/PHOTO-2023-05-18-15-22-47_2_t18qgl.jpg "
                    alt="image 2"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static3-animala" // Cambiado a ".bio-image-static3-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951745/Animala/350091469_771875407930011_1637485298770860654_n_mwasyp.jpg"
                    alt="Image 3"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static4-animala" // Cambiado a ".bio-image-static3-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1699064819/4c24c54f-ec80-4e18-b996-db4ce2302057_zqc63b.jpg"
                    alt="Image 4"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static5-animala" // Cambiado a ".bio-image-static3-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1697951743/Animala/350271788_563412029304349_3884554252112040800_n_j4slng.jpg"
                    alt="Image 5"
                  />
                </div>
              </div>
              <div className="bio-item-animala"> 
                <div className="bio-image-animala">
                  <img
                    className="bio-image-static6-animala" // Cambiado a ".bio-image-static3-animala"
                    src="https://res.cloudinary.com/dvnhn35l4/image/upload/v1698271045/NicoLivingStereo/IMG_2938_xziijt.jpg"
                    alt="Image 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
*/
