import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="text-3xl text-bold m-8">Navbar</div>
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
