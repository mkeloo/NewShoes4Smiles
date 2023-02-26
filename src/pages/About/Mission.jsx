import React from 'react';
import about1 from '../../assets/about1.jpg';

const Mission = () => {
  return (
    <section className="w-[100vw] h-[100vh] bg-[#89CFF0] flex justify-center items-center  -z-10">
      <div className=" w-full md:flex md:grid-cols-2 md:p-8 md:m-16 m-0 grid-col-reverse rounded-2xl   mx-4 p-2 ">
        <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full z-10">
          <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-3xl font-bold py-6 pb-4">
            Mission
          </h1>
          <p className="text-sm md:text-lg my-4 text-[#060229] lg:text-2xl z-10">
            Shoes 4 Smiles is on a mission to improve the lives of disadvantaged
            communities in our local area by providing basic necessities like
            shoes. Through our annual shoe drive, we work with local
            organizations to distribute donations directly to those who need
            them most. With the support of our dedicated volunteers and
            partners, we're making a real impact in our community, one step at a
            time.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={about1}
            alt="about1"
            className="lg:w-[450px] z-10 lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8 m-5 object-cover rounded-2xl shadow-lg shadow-black"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;

// Mission Statement
// Shoes 4 Smiles is on a mission to improve the lives of disadvantaged communities in our local area by providing basic necessities like shoes. Through our annual shoe drive, we work with local organizations to distribute donations directly to those who need them most. With the support of our dedicated volunteers and partners, we're making a real impact in our community, one step at a time.
