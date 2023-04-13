import React from 'react';
import DonationStat from '../assets/Stats/DonationStat.jpg';
import MoneyStat from '../assets/Stats/MoneyStat.jpeg';
import OrgStat from '../assets/Stats/OrgStat.jpg';

// import headset from '../assets/examplePics/headset.svg';

const Stats = () => {
  const stats = [
    {
      id: 2,
      title: 'Raised',
      value: '$5000+',
      unit: '',
      image: MoneyStat,
    },
    {
      id: 1,
      title: 'Donated',
      value: '1800+',
      unit: 'pairs',
      image: DonationStat,
    },

    {
      id: 3,
      title: 'Worked with',
      value: '25+',
      unit: 'Orgs',
      image: OrgStat,
    },
  ];

  return (
    <section className="w-[100vw] h-full bg-[#89CFF0] pt-14 my-20 pb-28 -z-10 overflow-x-hidden">
      <h1 className="flex justify-center items-center text-3xl md:text-4xl lg:text-6xl text-[#060229] font-bold py-10">
        Our Accomplishments
      </h1>
      <div className="w-full max-w-screen-xl mt-10 mx-auto flex justify-center items-center flex-cols-1 md:grid-cols-3 gap-10">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="relative flex items-center justify-center h-[480px] w-[340px] overflow-hidden rounded-3xl"
          >
            <img
              src={stat.image}
              alt={stat.title}
              className="w-full h-full object-cover object-center transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-xl m-5  rounded-3xl "
              // style={{ margin: '10px', padding: '10px' }}
            />
            <div className="absolute bottom-0 p-6 justify-start w-full flex-col bg-black bg-opacity-50 rounded-b-3xl ">
              {/* <div className="flex justify-center items-center w-16 h-16 rounded-lg glassmorphism mb-6">
                <img
                  src={headset}
                  alt="headset"
                  className="w-1/2 h-1/2 object-contai"
                />
              </div> */}
              <p className="font-normal text-4xl text-white uppercase">
                {stat.title}
              </p>
              <h2 className="mt-2 font-semibold text-xl md:text-5xl text-white ">{`${stat.value} ${stat.unit}`}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
