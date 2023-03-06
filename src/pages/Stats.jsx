// import React from 'react';

// const Stats = () => {
//   return (
//     <section className="w-[100vw] h-[100vh] bg-[#89CFF0]  md:mb-0 mt-4  py-10 flex justify-center items-center -z-10 ">
//       <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-3xl font-bold py-6 pb-4">
//         Stats
//       </h1>
//     </section>
//   );
// };

// export default Stats;

// import React from 'react';
// import pic1 from '../assets/examplePics/planet-01.png';
// import pic2 from '../assets/examplePics/planet-02.png';
// import pic3 from '../assets/examplePics/planet-03.png';

// import headset from '../assets/examplePics/headset.svg';

// const Stats = () => {
//   const stats = [
//     {
//       id: 1,
//       title: 'Stat 1',
//       value: '100',
//       unit: 'units',
//       image: pic1,
//     },
//     {
//       id: 2,
//       title: 'Stat 2',
//       value: '200',
//       unit: 'units',
//       image: pic2,
//     },
//     {
//       id: 3,
//       title: 'Stat 3',
//       value: '300',
//       unit: 'units',
//       image: pic3,
//     },
//   ];

//   return (
//     <section className="w-[100vw] h-[100vh] bg-[#89CFF0]  md:mb-0 mt-4  py-10 flex justify-center items-center -z-10 ">
//       <h1 className="lg:text-6xl md:text-4xl text-[#060229]  text-3xl font-bold py-6 pb-4">
//         Stats
//       </h1>
//       <div className="relative lg:flex-3.5 flex-10 flex items-center justify-center min-w-170px h-700px transition-flex duration-0.7s ease-out-flex cursor-pointer">
//         <img
//           src={pic1}
//           alt="pic"
//           className="absolute w-full h-full object-cover rounded-24px"
//         />
//         <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-rgba(0,0,0,0.5) rounded-b-24px">
//           <div className="flex justify-center items-center w-60 h-60 rounded-24px glassmorphism mb-16px">
//             <img
//               src={headset}
//               alt="headset"
//               className="w-1/2 h-1/2 object-contain"
//             />
//           </div>
//           <p className="font-normal text-16px leading-20px text-white uppercase">
//             Enter the Metaverse
//           </p>
//           <h2 className="mt-24px font-semibold sm:text-32px text-24px text-white">
//             Example Stat
//           </h2>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;

import React from 'react';
import pic1 from '../assets/examplePics/planet-01.png';
import pic2 from '../assets/examplePics/planet-02.png';
import pic3 from '../assets/examplePics/planet-05.png';

import headset from '../assets/examplePics/headset.svg';

const Stats = () => {
  const stats = [
    {
      id: 1,
      title: 'Stat 1',
      value: '100',
      unit: 'units',
      image: pic1,
    },
    {
      id: 2,
      title: 'Stat 2',
      value: '200',
      unit: 'units',
      image: pic2,
    },
    {
      id: 3,
      title: 'Stat 3',
      value: '300',
      unit: 'units',
      image: pic3,
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
              <div className="flex justify-center items-center w-16 h-16 rounded-lg glassmorphism mb-6">
                <img
                  src={headset}
                  alt="headset"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
              <p className="font-normal text-4xl text-white uppercase">
                {stat.title}
              </p>
              <h2 className="mt-2 font-semibold text-xl md:text-5xl text-white animate-bounce">{`${stat.value} ${stat.unit}`}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
