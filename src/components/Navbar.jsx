import React, { useState, useRef, useEffect } from 'react';
import Donate from '../pages/Donate';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMail, HiUserGroup } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Navbar State
  const [nav] = useState(true);

  // navbar hide
  const ref = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  const socials = [
    {
      id: 1,
      url: 'https://www.instagram.com/ufshoes4smiles/?hl=en',
      icon: <FaInstagram size={30} />,
      text: 'Instagram',
    },
    {
      id: 2,
      url: 'https://www.facebook.com/ufshoes4smiles',
      icon: <FaFacebook size={30} />,
      text: 'Facebook',
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
    // {
    //   id: 6,
    //   url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
    //   icon: <HiUserGroup size={30} />,
    //   text: 'GroupMe',
    // },
  ];

  const links = [
    {
      id: 1,
      title: 'Home',
      url: 'home',
    },
    {
      id: 2,
      title: 'Who We Are',
      url: 'about',
    },
    {
      id: 3,
      title: 'What We Do',
      url: 'what-we-do',
    },
    {
      id: 4,
      title: 'Get Involved',
      url: 'get-involved',
    },
    {
      id: 5,
      title: 'Contact',
      url: 'contact',
    },
    {
      id: 6,
      title: 'Events',
      url: 'events',
    },
  ];

  const mobileLinks = [
    {
      id: 1,
      title: 'Home',
      url: 'home',
    },
    {
      id: 2,
      title: 'About',
      url: 'about',
    },
    {
      id: 3,
      title: 'Shoe Drive',
      url: 'shoe-drive',
    },
    {
      id: 4,
      title: 'Join Us',
      url: 'join-us',
    },
    {
      id: 5,
      title: 'Contact',
      url: 'contact',
    },
    {
      id: 6,
      title: 'Events',
      url: 'events',
    },
  ];
  // return (
  //   <nav>
  //     {/* <div className="text-3xl text-bold m-8">Navbar</div> */}
  //     <div>
  //       <ul className="flex m-2">
  //         <li className="p-2">
  //           <Link to="/home">Home</Link>
  //         </li>
  //         <li className="p-2">
  //           <Link to="/about">About</Link>
  //         </li>
  //         <li className="p-2">
  //           <Link to="/contact">Contact</Link>
  //         </li>
  //         <li className="p-2">
  //           <Link to="/events">Events</Link>
  //         </li>
  //         <li className="p-2">
  //           <Link to="/join-us">Join Us</Link>
  //         </li>
  //         <li className="p-2">
  //           <Link to="/shoe-drive">Shoe Drive</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );

  return (
    // lg screen classes: md:rounded-none md:mt-0  border-[5px] border-orange-600
    <nav
      className="fixed z-front bg-[#060229] shadow-md  h-[80px] flex justify-between w-screen items-center px-2 pr-4 
    text-white font-poppins "
    >
      <Link to="/home">
        <img
          src={logo}
          alt="logo"
          className="w-[220px] lg:ml-5 ml-2 h-[70px] hover:scale-110 duration-500"
        />
      </Link>

      {/* <img src={logo} alt="/" className="object-fit w-[120px] h-[120px]" /> */}
      <ul className="hidden md:flex">
        {links.map(({ id, url, title }) => {
          return (
            <Link
              to={url}
              // // smooth={true}
              // duration={1100}
              // spy={true}
              // exact="true"
              // offset={-80}
            >
              <li
                key={id}
                className="p-4 hover:text-orange-400 lg:text-[18px]  md:text-sm font-bold duration-300 link link-underline link-underline-black"
              >
                {title}
              </li>
            </Link>
          );
        })}
      </ul>
      <Link
        to={'donate'}
        // // smooth={true}
        // duration={500}
        // spy={true}
        // // exact="true"
        // offset={-90}
      >
        <button className="p-3 px-7 mx-5 bg-lime-600 font-bold rounded-lg text-blue-900  shadow-md hover:shadow-cyan-500 hover:bg-blue-600 hover:shadow-lg hover:scale-110 hover:text-white duration-300">
          Donate
        </button>
      </Link>

      {/* Hamburger Menu */}
      <div
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden z-[100] text-orange-800 cursor-pointer"
      >
        {isMenuOpen && nav ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </div>

      {/* Mobile Menu */}
      {/* Floating Navbar Design */}
      <div
        className={`${nav ? 'flex' : 'hidden'} p-6 md:hidden z-front text-xl ${
          isMenuOpen && 'bg-black-gradient '
        }  absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        ref={ref}
      >
        {isMenuOpen && (
          <ul className="list-non flex flex-col justify-end items-center flex-1 ">
            {mobileLinks.map(({ id, title, url }) => (
              <Link
                to={url}
                smooth={true}
                duration={900}
                spy={true}
                exact="true"
                offset={-50}
              >
                <li
                  key={id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] ${
                    id === mobileLinks.length ? 'mr-0' : 'mb-4'
                  } text-[#FFF5E4]`}
                >
                  <span className="font-bold hover:text-blue-500 pb-2 ">
                    <a href={url}>{title}</a>
                  </span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </div>

      {/* Social icons */}
      {/* Fixed Media Query for Medium devices */}

      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          {socials.map((social) => {
            const { id, url, icon, text } = social;
            return (
              <li
                key={id}
                className="w-[180px] h-[60px] flex justify-between items-center ml-[-125px] hover:ml-[-2px] duration-500 rounded-md  bg-cyan-800 "
                // bg-[#f7aa80]
              >
                <a
                  className="flex justify-between text-xl px-2 m-2 items-center w-full font-bold hover:text-orange-300 text-white"
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {text} {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
