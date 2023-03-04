import React from 'react';
import pic from '../../assets/tabling.png';

const EventsPic = () => {
  return (
    <section className="w-[100vw] h-[100vh]">
      <div className="relative">
        <img
          src={pic}
          alt="pic"
          className=" object-cover h-[100vh] w-[100vw] mt-5 "
        />
        {/* <div className="bg-black/30 absolute top-0 left-0 w-full h-screen mt-20"  -translate-x-1/2 -translate-y-1/2  /> */}
        <div className="absolute text-2xl md:text-7xl text-white bottom-40 left-20 opacity-90 ">
          <h1 className=" px-10 py-7 bg-black text-white text-6xl  rounded-2xl mb-24 font-poppins">
            Come Meet Us
          </h1>
        </div>
      </div>
    </section>
    // <section className="w-full h-screen md:h-auto">
    //   <div className="relative h-full">
    //     <img
    //       src={pic}
    //       alt="pic"
    //       className="object-cover h-full w-full md:w-auto md:max-h-full md:max-w-full"
    //     />
    //     <div className="absolute bottom-12 md:bottom-28 left-5 md:left-10 right-5 md:right-10 text-center">
    //       <h1 className="text-4xl md:text-7xl text-white font-poppins px-4 md:px-10 py-7 md:py-14 bg-black/70 rounded-2xl">
    //         Come Meet Us
    //       </h1>
    //     </div>
    //   </div>
    // </section>
  );
};

export default EventsPic;
