import React from 'react';
import about1 from '../assets/about1.jpg';

const About = () => {
  return (
    //  md:mt-6 mt-4 issue
    // text-[#EAE3D2]
    <div
      id="about"
      // translateX={['-100px', '100px']}
      data-aos="fade-down"
      data-aos-duration="600"
      data-aos-delay="300"
      className="w-[100vw] h-[100vh] bg-[#89CFF0] mb-8 md:mb-0 mt-4  py-5 flex justify-center items-center -z-10   "
    >
      {/* gradients
      <div className="absolute -z-1 w-[50%] h-[50%] left-20 top-20 white__gradient" />
      <div className="absolute -z-2 w-[50%] h-[50%] left-20 top-20 blue__gradient" /> */}
      {/* content */}
      <div className=" w-full md:flex md:grid-cols-2 md:p-8 md:m-16 m-0 grid-col-reverse  rounded-2xl   mx-4 p-2 z-10">
        <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full ">
          <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-3xl font-bold py-6 pb-4">
            About Us
          </h1>
          <p className="text-sm md:text-lg text-[#060229] lg:text-2xl z-10">
            Shoes 4 Smiles is a student organization dedicated to fundraising
            and providing shoes and other basic necessities to people in local,
            disadvantaged communities. We were founded in 2018 and have donated
            over 500 pairs of shoes and thousands of dollars to people in the
            Gainesville community.
          </p>
        </div>
        <div
          className="flex justify-center items-center"
          data-aos="fade-up"
          data-aos-duration="400"
          data-aos-delay="300"
        >
          <img
            src={about1}
            alt="about1"
            className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black"
          />
        </div>
        {/* <div className="absolute -z-1 w-[50%] h-[50%] right-20 bottom-20 pink__gradient" /> */}
      </div>
    </div>
  );
};

export default About;
