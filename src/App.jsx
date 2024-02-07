import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Home from './components/home/Home';





const App = () => {
  return (
  <div className='app'>
    <div className="background"></div>
 
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    </div>
  );
};

export default App;
