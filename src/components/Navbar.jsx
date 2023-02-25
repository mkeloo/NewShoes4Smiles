import React, { useState, useRef, useEffect } from 'react';
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
    {
      id: 5,
      url: 'mailto:ufshoes4smiles@gmail.com',
      icon: <HiOutlineMail size={30} />,
      text: 'Email',
    },
    {
      id: 6,
      url: 'https://web.groupme.com/join_group/89159667/TU2zA1rK',
      icon: <HiUserGroup size={30} />,
      text: 'GroupMe',
    },
  ];

  const links = [
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
      title: 'Join Us',
      url: 'join',
    },
    {
      id: 4,
      title: 'Contact',
      url: 'contact',
    },
    {
      id: 5,
      title: 'Calendar',
      url: 'calendar',
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
      url: 'shoedrive',
    },
    {
      id: 4,
      title: 'Join Us',
      url: 'join',
    },
    {
      id: 5,
      title: 'Contact',
      url: 'contact',
    },
    {
      id: 6,
      title: 'Calendar',
      url: 'calendar',
    },
  ];
  return (
    <nav>
      {/* <div className="text-3xl text-bold m-8">Navbar</div> */}
      <div>
        <ul className="flex m-2">
          <li className="p-2">
            <Link to="/home">Home</Link>
          </li>
          <li className="p-2">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2">
            <Link to="/events">Events</Link>
          </li>
          <li className="p-2">
            <Link to="/join-us">Join Us</Link>
          </li>
          <li className="p-2">
            <Link to="/shoe-drive">Shoe Drive</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
