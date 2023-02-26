import React from 'react';
import Nelay from '../../assets/Board/Nelay.jpeg';
import Leanne from '../../assets/Board/Leanne.jpeg';
import Shamir from '../../assets/Board/Shamir.jpeg';
import Jake from '../../assets/Board/Jake.jpeg';
import Phillipe from '../../assets/Board/Phillipe.jpeg';
import Sarah from '../../assets/Board/Sarah.jpeg';
import Max from '../../assets/Board/Max.jpeg';
import Caitlin from '../../assets/Board/Caitlin.jpeg';
import Leah from '../../assets/Board/Leah.jpeg';

const images = [
  {
    id: 1,
    src: Nelay,
    alt: 'Nelay Govan',
    position: 'President',
  },
  {
    id: 2,
    src: Leanne,
    alt: 'Leanne Rosenbusch',
    position: 'Internal Vice President',
  },
  {
    id: 3,
    src: Shamir,
    alt: 'Shamir Menon',
    position: 'External Vice President',
  },
  {
    id: 4,
    src: Jake,
    alt: 'Jake Flothe',
    position: 'Treasurer',
  },
  {
    id: 5,
    src: Phillipe,
    alt: 'Phillipe Fernandes',
    position: 'Fundraising Director',
  },
  {
    id: 6,
    src: Sarah,
    alt: 'Sarah Schuster',
    position: 'Public Relations',
  },
  {
    id: 7,
    src: Max,
    alt: 'Max Genova',
    position: 'Public Relations',
  },
  {
    id: 8,
    src: Caitlin,
    alt: 'Caitlin Lee',
    position: 'Event Director',
  },
  {
    id: 9,
    src: Leah,
    alt: 'Leah Thai',
    position: 'Secretary',
  },
];

const Team = () => {
  return (
    <section className="w-full h-full bg-[#89CFF0] flex justify-center items-center">
      <div className="w-full max-w-screen-xl md:p-8 md:mx-16 m-10 grid-col-reverse rounded-2xl mx-4 p-2">
        <h1 className="lg:text-6xl md:text-4xl text-[#060229] items-center flex justify-center  text-3xl font-bold pb-10">
          Meet the Team
        </h1>
        <div className="grid grid-cols-3 gap-4 w-full">
          {images.map(({ id, src, alt, position }) => (
            <div key={id} className="flex flex-col items-center m-2 py-5">
              <img src={src} alt={alt} className="h-50 w-50 rounded-3xl" />
              <div className="text-center">
                <p className="text-2xl font-bold text-[#060229] pt-4">{alt}</p>
                <p className="text-xl font-bold  text-[#211e76]">{position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
