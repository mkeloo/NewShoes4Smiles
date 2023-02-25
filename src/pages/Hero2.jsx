import React from 'react';
// import logo from '../assets/HomeLogo.png';
import Shoe1 from '../assets/shoeDr1.jpg';
import Shoe2 from '../assets/shoeDr2.jpg';
import Shoe3 from '../assets/shoeDr3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const images = [
  {
    id: 1,
    src: Shoe2,
    alt: 'shoe2',
  },
  {
    id: 2,
    src: Shoe1,
    alt: 'shoe1',
  },
  {
    id: 3,
    src: Shoe3,
    alt: 'shoe3',
  },
];

const Hero2 = () => {
  return (
    <section className="w-[100vw] h-[100vh] bg-[#060229] px-24 pt-[80px] flex flex-col md:flex-row items-center md:justify-center -z-10">
      <div className="md:w-1/2 p-8 z-10 mt-8 ">
        <h1 className="text-5xl md:text-6xl font-bold  text-[#F9F5EB] mb-8">
          Help Donate Shoes to People in Need
        </h1>
        <p className="text-lg md:text-xl text-[#F9F5EB] mb-8">
          Providing shoes and other necessities to people in local,
          disadvantaged communities.
        </p>
        <div className="flex flex-col md:flex-row">
          <button className="p-4 px-8 text-xl bg-lime-600 font-poppins font-bold rounded-lg text-blue-900  shadow-md hover:shadow-cyan-500 hover:bg-blue-600 hover:shadow-lg hover:text-white duration-300">
            Join Us
          </button>
          <button className="p-4 px-8 text-xl mx-20 bg-lime-600 font-poppins font-bold rounded-lg text-blue-900  shadow-md hover:shadow-cyan-500 hover:bg-blue-600 hover:shadow-lg  hover:text-white duration-300">
            Events
          </button>
        </div>
        <div className=" my-8 flex items-center p-4">
          <div className="text-5xl font-bold text-orange-500 mr-4">500+</div>
          <div className="text-xl text-[#F9F5EB] font-poppins font-bold">
            pairs of shoes donated
          </div>
        </div>
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>
      <div className="md:w-1/2 h-auto overflow-hidden">
        {/* <div className="absolute -z-2 w-[40%] h-[35%] top-0 right-50 pink__gradient" /> */}
        {/* <div className="absolute -z-2 w-[80%] h-[80%] left-100 rounded-full white__gradient" /> */}

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className=" flex object-contain md:w-[450px] md:h-[590px] mb-24 w-[200px] h-[310px] z-10  "
        >
          {images.map(({ id, src, alt }) => {
            return (
              <SwiperSlide key={id} className="z-back">
                <div className="z-back">
                  <img
                    src={src}
                    alt={alt}
                    className="object-cover md:mt-20 mt-10 h-full w-full rounded-3xl "
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="absolute -z-1 w-[50%] h-[50%] right-100 bottom-20 blue__gradient" />
        <div className="absolute -z-2 w-[40%] h-[35%] top-0 right-50 pink__gradient" />
      </div>
    </section>
  );
};

export default Hero2;
