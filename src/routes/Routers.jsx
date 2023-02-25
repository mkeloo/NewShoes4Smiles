import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../components/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Events from '../pages/Events';
import JoinUs from '../pages/JoinUs';
import ShoeDrive from '../pages/ShoeDrive';
import Donate from '../pages/Donate';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/join-us" element={<JoinUs />} />
      <Route path="/shoe-drive" element={<ShoeDrive />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Routers;
