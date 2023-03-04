import React from 'react';
import pic from '../../assets/tabling.png';

const EventsPic = () => {
  return (
    <section className="w-[100vw] h-[100vh] flex justify-center items-center ">
      <div className="relative">
        <img
          src={pic}
          alt="pic"
          className="object-cover h-[100vh] w-[100vw] mt-5"
        />

        <div className="absolute text-white md:m-0 m-3  md:bottom-40 md:left-20 top-40 md:top-80 left-0 mt-20 md:mt-12 opacity-90 ">
          <h1 className=" lg:px-10 lg:py-7 px-6 py-4  bg-black text-white lg:text-6xl text-4xl rounded-2xl mb-24 font-poppins">
            Come Meet Us
          </h1>
        </div>
      </div>
    </section>
  );
};

export default EventsPic;
