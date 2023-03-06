import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Home from '../components/Home';
import AboutMain from '../pages/About/AboutMain';
import Contact from '../pages/Contact';
import EventsMain from '../pages/Events/EventsMain';
import GetInvolved from '../pages/GetInvolved/GetInvolved';
import WhatWeDo from '../pages/ShoeDrive/WhatWeDo';
import Donate from '../pages/Donate';
import Page404 from '../pages/Page404';

import { AnimatePresence } from 'framer-motion';

function Routers() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<AboutMain />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<EventsMain />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Routers;
