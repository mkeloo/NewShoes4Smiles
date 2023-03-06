import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const dropdownMenu = [
    {
      id: 1,
      title: 'Mission',
      url: 'mission',
    },
    {
      id: 2,
      title: 'Origin Story',
      url: 'origin-story',
    },
    {
      id: 3,
      title: 'Board of Directors',
      url: 'team',
    },
    {
      id: 4,
      title: 'Shoe Drive',
      url: 'shoe-drive',
    },
    {
      id: 5,
      title: 'Procedure',
      url: 'procedure',
    },
    {
      id: 6,
      title: 'Join Us',
      url: 'Socials',
    },
    {
      id: 7,
      title: 'Upcoming Events',
      url: 'upcoming-events',
    },
  ];

  return (
    <div className="relative">
      <button
        className="text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={handleToggle}
      >
        <svg
          className={`${
            isOpen ? 'transform rotate-180' : ''
          } transition-transform duration-200 w-4 h-4`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 14l6-6-1.414-1.414L10 11.172l-4.586-4.586L4 8l6 6z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 w-48 mt-2 py-2 bg-white rounded-md shadow-lg">
          {dropdownMenu.map(({ id, title, url }) => (
            <a
              key={id}
              href={url}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
