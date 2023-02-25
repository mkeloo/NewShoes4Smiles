import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../components/Home';
import AboutMain from '../pages/About/AboutMain';
import Contact from '../pages/Contact';
import Events from '../pages/Events';
import GetInvolved from '../pages/GetInvolved/GetInvolved';
import WhatWeDo from '../pages/ShoeDrive/WhatWeDo';
import Donate from '../pages/Donate';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutMain />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/what-we-do" element={<WhatWeDo />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}

export default Routers;
