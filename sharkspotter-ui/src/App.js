import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/home'
import Testing from './pages/testing/testing';
import Error from './pages/error/error';
import Header from './components/header/header';
import Spotting from './pages/spotting/spotting';
import Sightings from './pages/past-sightings/sightings'

function App() {
  return (
    <> 
      <Header />
      <main className="content">
        <Routes>
            <Route index  element={<Home />} />
            <Route path="/testing" element={<Testing/>} />
            <Route path="/spotting" element={<Spotting/>} />
            <Route path="/sightings/:beachId" element={<Sightings/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;