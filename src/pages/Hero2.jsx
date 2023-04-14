import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import logo from '../assets/HomeLogo.png';
import FrontPagePic from '../assets/FrontPage.jpeg';
import { motion } from 'framer-motion';

const Hero2 = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-[100vw] md:h-[100vh] h-full bg-[#060229] pl-24 md:pt-[60px] pt-[50px] flex flex-col md:flex-row items-center md:justify-center -z-10 overflow-hidden"
    >
      {/* <div className="absolute md:hidden block -z-1 w-[80%] h-[50%]  darkblue__gradient" />
      <div className="absolute md:hidden block -z-2 w-[60%] h-[60%]  violet__gradient" />
      <div className="absolute md:hidden block -z-1 w-[60%] h-[40%]  pink__gradient" /> */}

      <div className="md:w-1/2 p-8 z-10 mt-8 ">
        <h1 className=" text-4xl md:text-6xl font-bold    text-[#F9F5EB] mb-8">
          {/* Help Donate Shoes to People in Need */}
          {/* Donating Shoes to Community */}
          <span className="text-orange-500">
            From your closet to their feet:{' '}
          </span>
          Donate your shoes to those in need.
        </h1>
        <p className="text-lg md:text-2xl text-[#F9F5EB] mb-10 ">
          Providing shoes and other necessities to people in Gainesville's
          underserved communities.
        </p>
        <div className="flex flex-col md:flex-row ">
          <button className="text-white font-poppins font-bold p-4 lg:px-3 px-8 lg:text-xl text-lg lg:mx-20 mx-8 group md:text-lg border-4 lg:py-4 py-2 flex items-center bg-[#0a00c1] border-[#00035d] hover:bg-orange-600 hover:font-bold hover:border-orange-900 duration-300 hover:scale-110 rounded-xl">
            Checkout our Events
            <span className="duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-2 lg:ml-3" size={30} />
            </span>
          </button>
          {/* <div className="absolute md:block hidden -z-10 w-[50%] h-[50%] right-100 bottom-20 overflow-x-hidden blue__gradient" /> */}
        </div>
        {/* <div className=" my-6 flex items-center p-3 group">
          <div className="text-5xl font-bold text-orange-500 mr-4 hover:scale-110 duration-300">
            1200+
          </div>
          <div className="text-xl text-[#F9F5EB] font-poppins font-bold">
            pairs of shoes donated
          </div>
        </div> */}
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>
      <div className="md:w-1/2 h-auto overflow-hidden hidden md:flex ">
        <img src={FrontPagePic} alt="shoe1" className="object-contain" />
        {/* <div className="absolute -z-2 w-[40%] h-[35%] top-0 right-50 pink__gradient" /> */}
        {/* <div className="absolute -z-2 w-[80%] h-[80%] left-100 rounded-full white__gradient" /> */}

        {/* Gradient */}
        {/* <div className="absolute md:block hidden -z-2 w-[50%] h-[35%] top-0 right-50 violet__gradient" />
        <div className="absolute md:block hidden -z-1 w-[50%] h-[50%] right-100 bottom-20 overflow-x-hidden blue__gradient" /> */}
        {/* Home End */}

        {/* <div className="absolute md:block hidden -z-1 w-[100%] h-[50%] right-100 bottom-20 violet__gradient" /> */}
        {/* <div className="absolute md:block hidden -z-1 w-[100%] h-[50%] right-100 bottom-20 blue__gradient" /> */}
      </div>
    </motion.section>
  );
};

export default Hero2;
