import React from 'react';
import Join from '../../assets/join.jpg';
import { HiUserGroup } from 'react-icons/hi';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const JoinUs = () => {
  const socials = [
    {
      id: 1,
      url: 'https://www.instagram.com/ufshoes4smiles/?hl=en',
      icon: <FaInstagram size={30} />,
      text: 'Instagram',
    },
    {
      id: 3,
      url: 'https://www.tiktok.com/@shoes4smiles',
      icon: <FaTiktok size={30} />,
      text: 'TikTok',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/@Shoes4Smiles',
      icon: <FaYoutube size={30} />,
      text: 'YouTube',
    },
    // {
    //   id: 5,
    //   url: 'mailto:ufshoes4smiles@gmail.com',
    //   icon: <HiOutlineMail size={30} />,
    //   text: 'Email',
    // },
    {
      id: 6,
      url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
      icon: <HiUserGroup size={30} />,
      text: 'GroupMe',
    },
  ];
  return (
    <div
      id="join"
      className="w-[100vw] h-[100vh] bg-[#060229] flex justify-center items-center "
    >
      <div className=" w-full md:flex md:grid-cols-2 md:p-8 mb-8 md:mx-16 m-0 grid-col-reverse  rounded-2xl mx-4 p-2">
        <div className="flex flex-col justify-center px-10 md:max-w-[65%] max-w-full pt-10 mt-5">
          <h1 className="lg:text-6xl md:text-4xl text-[#EAE3D2] text-3xl font-bold py-6 pb-4">
            Join Us
          </h1>
          <p className="md:py-3 py-1 font-bold text-[#EAE3D2] md:text-3xl text-xl">
            Looking to get involved?
          </p>
          <p className="text-sm md:text-lg text-[#EAE3D2] lg:text-2xl">
            We are always looking for new and dedicated members to join our
            organization! If you are interested in giving back to the community
            then follow our socials to stay up to date on our events and
            fundraisers. There are no requirements to join, you are welcome to
            join at any time!
          </p>
          {/* <div className="w-full flex items-center justify-center ">
            <ul className="md:w-[250px] w-[150px] flex md:p-6 p-4 bg-[#f7aa80] mt-4 md:mt-8 text-blue-700 rounded-full justify-between items-center duration-300 hover:scale-110 shadow-xl">
              {socials.map(({ id, url, icon, text }) => {
                return (
                  <li
                    className="hover:scale-125 hover:text-orange-600 duration-500"
                    key={id}
                  >
                    <a href={url} target="_blank" rel="noreferrer">
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
        <div className="flex justify-center items-center">
          <img
            src={Join}
            alt="about1"
            className="lg:w-[450px] lg:h-[500px] md:w-[260px] md:h-[310px] w-[175px] h-[210px] md:mt-8  m-5 object-cover rounded-2xl shadow-lg shadow-black"
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
