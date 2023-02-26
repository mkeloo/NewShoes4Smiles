import React from 'react';
import Shoe1 from '../../assets/shoeDr1.jpg';
import Shoe2 from '../../assets/shoeDr2.jpg';
import Shoe3 from '../../assets/shoeDr3.jpg';

const Procedure = () => {
  return (
    <section className="w-full h-full bg-[#89CFF0]  ">
      <section className="w-full h-full bg-[#89CFF0] flex justify-center items-center  -z-10">
        <div className=" w-full md:flex md:grid-cols-2 md:px-8 md:mx-16 md:py-4 md:my-4 grid-col-reverse rounded-2xl   mx-4 p-2 ">
          <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full z-10">
            <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-3xl font-bold py-6 pb-4">
              Collection
            </h1>
            <p className="text-sm md:text-lg my-4 text-[#060229] lg:text-2xl z-10">
              Distribute donation bins on campus and promote the shoe drive to
              students, encouraging them to donate any gently-used shoes they no
              longer need. Store the donated shoes in a secure location until
              they are ready to be cleaned and sorted.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Shoe1}
              alt="about1"
              className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-[#89CFF0] flex justify-center items-center  -z-10">
        <div className=" w-full md:flex md:grid-cols-2 md:px-8 md:mx-16 md:py-4 md:my-4 m-0 grid-col-reverse rounded-2xl   mx-4 p-2 ">
          <div className="flex justify-center items-center">
            <img
              src={Shoe3}
              alt="about1"
              className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black"
            />
          </div>
          <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full z-10">
            <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-3xl font-bold py-6 pb-4">
              Cleaning
            </h1>
            <p className="text-sm md:text-lg my-4 text-[#060229] lg:text-2xl z-10">
              Clean and refurbish the donated shoes, removing any dirt or debris
              and polishing them to restore their appearance. Dry the shoes
              thoroughly before moving on to the assembly phase.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-[#89CFF0] flex justify-center items-center  -z-10">
        <div className=" w-full md:flex md:grid-cols-2 md:px-8 md:mx-16 md:py-4 md:my-4 grid-col-reverse rounded-2xl   mx-4 p-2 ">
          <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full z-10">
            <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-3xl font-bold py-6 pb-4">
              Assembly
            </h1>
            <p className="text-sm md:text-lg my-4 text-[#060229] lg:text-2xl z-10">
              Inspect each cleaned shoe for any defects or issues, label them by
              size, gender, and condition, and sort them accordingly. Package
              the shoes into groups by size, gender, and condition, making them
              easier to distribute to the local charities and organizations.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Shoe3}
              alt="about1"
              className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black"
            />
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-[#89CFF0] flex justify-center items-center  -z-10">
        <div className=" w-full md:flex md:grid-cols-2 md:px-8 md:mx-16 md:py-4 md:my-4 m-0 grid-col-reverse rounded-2xl   mx-4 p-2 ">
          <div className="flex justify-center items-center">
            <img
              src={Shoe2}
              alt="about1"
              className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black"
            />
          </div>
          <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full z-10">
            <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-3xl font-bold py-6 pb-4">
              Donation
            </h1>
            <p className="text-sm md:text-lg my-4 text-[#060229] lg:text-2xl z-10">
              Deliver the packaged shoes to local charities and organizations,
              making sure to document the type and quantity of shoes donated.
              Thank the volunteers and donors for their contributions, and
              consider soliciting feedback to improve the shoe drive for future
              iterations.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Procedure;
