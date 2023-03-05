import React from 'react';
// import Hero from '../pages/Hero';
import Hero2 from '../pages/Hero2';
// import About from '../pages/About/About';
import Events from '../pages/Events/Events';
import Stats from '../pages/Stats';
import OriginStory from '../pages/About/OriginStory';

const Home = () => {
  return (
    <section>
      <Hero2 />
      <Stats />
      <OriginStory />
      <Events />
    </section>
  );
};

export default Home;
