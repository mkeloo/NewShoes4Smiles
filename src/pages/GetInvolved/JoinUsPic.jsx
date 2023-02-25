import React from 'react';
import pic from '../../assets/pic3.jpg';

const JoinUsPic = () => {
  return (
    <section className="w-[100vw] h-[100vh]">
      <div className="relative">
        <img
          src={pic}
          alt="pic"
          className=" object-conver h-full w-full mt-20 "
        />
        {/* <div className="bg-black/30 absolute top-0 left-0 w-full h-screen mt-20"  -translate-x-1/2 -translate-y-1/2  /> */}
        <div className="absolute text-2xl md:text-7xl text-white bottom-80 left-40 opacity-90 ">
          <h1 className=" px-10 py-7 bg-black text-white text-6xl  rounded-2xl mb-24 font-poppins">
            Get Involved
          </h1>
        </div>
      </div>
    </section>
  );
};

export default JoinUsPic;
