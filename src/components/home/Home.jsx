import React, { useRef, useEffect, Suspense, lazy } from "react";
import "./home.css";
import { gsap } from "gsap";

const Presentacion = lazy(() => import("../scene/presentacion/Presentacion"));
const Biografia = lazy(() => import("../scene/biografia/Biografia"));
const Tarot = lazy(() => import("../scene/tarot/Tarot"));

const Home = () => {
  return (
    <div className="home">
      <Suspense fallback={<div>Loading...</div>}>
        <Presentacion />

        <Biografia />
        <Tarot />
      </Suspense>
    </div>
  );
};

export default Home;
