import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Routers from '../routes/Routers';
import { ParallaxProvider } from 'react-scroll-parallax';

const Layout = () => {
  return (
    <ParallaxProvider>
      <Navbar />
      <div>
        <Routers />
      </div>
      <Footer />
    </ParallaxProvider>
  );
};

export default Layout;
