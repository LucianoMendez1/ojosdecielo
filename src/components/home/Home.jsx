import React, { useRef, useEffect, Suspense, lazy } from "react";
import "./home.css";
import { gsap } from "gsap";

const Presentacion = lazy(() => import("../scene/presentacion/Presentacion"));
const Biografia = lazy(() => import("../scene/biografia/Biografia"));
const Tarot = lazy(() => import("../scene/tarot/Tarot"));
const Pendulohebreo = lazy(() => import( "../scene/pendulohebreo/Pendulohebreo"));
const Aromaterapia = lazy(() => import( "../scene/aromaterapia/Aromaterapia")); 
const Masajes = lazy(() => import( "../scene/masajes/Masajes"));
const FloresBach = lazy(() => import( "../scene/floresdeBach/FloresBach"));


const Home = () => {
  return (
    <div className="home">
      <Suspense fallback={<div>Loading...</div>}>
        <Presentacion />

        <Biografia />
        <Tarot />
        <Pendulohebreo/>
        <Aromaterapia />
      </Suspense>
     {/*  <FloresBach/> */}
      <Masajes/>
    
    </div>
  );
};

export default Home;
