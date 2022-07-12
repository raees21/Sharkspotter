import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';
import Home from './pages/home/home'
import Testing from './pages/testing/testing';
import Error from './pages/error/error';
import Header from './components/header/header';
import Spotting from './pages/spotting/spotting';
import Sightings from './pages/past-sightings/sightings';
import Loading from './components/loading';

function App() {
  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <> 
      <Header />
      <main className="content">
        <Routes>
            <Route index  element={<Home />} />
            <Route path="/testing" element={<Testing/>} />
            <Route path="/spotting" element={<Spotting/>} />
            <Route path="/sighting" element={<Sightings/>} />
            <Route path="*" element={<Error/>} />
        </Routes>
      </main>
    </>
  );
}

export default App;