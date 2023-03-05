import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
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
    <section className="w-[100vw] md:h-[100vh] h-full bg-[#060229] px-24 md:pt-[60px] pt-[50px] flex flex-col md:flex-row items-center md:justify-center -z-10">
      <div className="absolute md:hidden block -z-1 w-[30%] h-[80%]  blue__gradient" />
      <div className="absolute md:hidden block -z-2 w-[60%] h-[60%]  pink__gradient" />
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
          <button className="text-white font-poppins font-bold p-4 lg:px-3 px-8 lg:text-xl text-lg lg:mx-20 mx-8 group md:text-lg border-4 lg:py-4 py-2 flex items-center bg-violet-800 border-violet-900 hover:bg-orange-600 hover:font-bold hover:border-orange-900 duration-300 hover:scale-110 rounded-xl">
            Checkout our Events
            <span className="duration-300 group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-2 lg:ml-3" size={30} />
            </span>
          </button>
        </div>
        <div className=" my-6 flex items-center p-3 group">
          <div className="text-5xl font-bold text-orange-500 mr-4 hover:scale-110 duration-300">
            1200+
          </div>
          <div className="text-xl text-[#F9F5EB] font-poppins font-bold">
            pairs of shoes donated
          </div>
        </div>
        {/* <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */}
      </div>
      <div className="md:w-1/2 h-auto overflow-hidden hidden md:flex ">
        {/* <div className="absolute -z-2 w-[40%] h-[35%] top-0 right-50 pink__gradient" /> */}
        {/* <div className="absolute -z-2 w-[80%] h-[80%] left-100 rounded-full white__gradient" /> */}

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          className=" object-contain md:w-[450px] md:h-[590px] mb-24 w-[200px] h-[310px] z-10"
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
        <div className="absolute md:block hidden -z-1 w-[50%] h-[50%] right-100 bottom-20 blue__gradient" />
        <div className="absolute md:block hidden -z-2 w-[40%] h-[35%] top-0 right-50 pink__gradient" />
      </div>
    </section>
  );
};

export default Hero2;
