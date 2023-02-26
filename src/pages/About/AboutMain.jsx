import React from 'react';
import AboutUsPic from './AboutUsPic';
// import About from './About';
import Mission from './Mission';
import OriginStory from './OriginStory';
import Team from './Team';

const AboutMain = () => {
  return (
    <section>
      <AboutUsPic />
      {/* <About /> */}
      <Mission />
      <OriginStory />
      <Team />
    </section>
  );
};

export default AboutMain;

// import { Link } from 'react-scroll';
// Use react-scroll to scroll to for the about page using props

// Exampl of how to use react-scroll
// <Link
//   activeClass="active"
//   to="test1"
//   spy={true}
//   smooth={true}
//   offset={-70}
//   duration={500}
// >
//   Test 1
// </Link>
// <Link
//   activeClass="active"
//   to="test2"
//   spy={true}
//   smooth={true}
//   offset={-70}
//   duration={500}
// >

// {links.map(({ id, url, title }) => {
//   return (
//     <Link
//       to={url}
//       smooth={true}
//       duration={1100}
//       spy={true}
//       exact="true"
//       offset={-80}
//     >
//       <li
//         key={id}
//         className="p-4 hover:text-orange-400 lg:text-[18px]  md:text-sm font-bold duration-300 link link-underline link-underline-black"
//       >
//         {title}
//       </li>
//     </Link>
//   );
// })}
// <Link
//   to={'shoedrive'}
//   smooth={true}
//   duration={500}
//   spy={true}
//   exact="true"
//   offset={-90}
// ></Link>
