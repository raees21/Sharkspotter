import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/home'
import Testing from './pages/testing/testing';
import Error from './pages/error/error';
import Header from './components/header/header';
import Spotting from './pages/spotting/spotting';

function App() {
  return (
    <> 
      <Header />
      <main className="content">
        <Routes>
            <Route index  element={<Home />} />
            <Route path="/testing" element={<Testing/>} />
            <Route path="/spotting" element={<Spotting/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;