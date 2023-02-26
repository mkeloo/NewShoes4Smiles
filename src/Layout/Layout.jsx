import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Routers from '../routes/Routers';
import { ParallaxProvider } from 'react-scroll-parallax';
// import Hover from '../components/Hover';

const Layout = () => {
  return (
    <ParallaxProvider>
      <Navbar />
      {/* <Hover /> */}
      <div>
        <Routers />
      </div>
      <Footer />
    </ParallaxProvider>
  );
};

export default Layout;
