import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/home'
import Testing from './pages/testing/testing';
import Error from './pages/error/error';
import Header from './components/header/header';

function App() {
  return (
    <> 
      <Header />
      <main className="content">
        <Routes>
            <Route index  element={<Home />} />
            <Route path="/testing" element={<Testing/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;