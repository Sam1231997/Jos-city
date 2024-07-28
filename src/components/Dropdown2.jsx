import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dropdown2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative " ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        
      >
       <img src="/images/arrow.png" className="h-2 w-3 mt-2" />
      </button>
      {isOpen && (
        <div className="absolute left-1 mt-2  w-35 bg-white border border-gray-200 rounded shadow-lg">
          <Link to="/accomodation" className="block px-4 py-2 text-green-800 hover:bg-gray-200">Hotels</Link>
          <Link to="/hospital" className="block px-4 py-2 text-green-800 hover:bg-gray-200">Hospitals</Link>
          <Link to="/appartment" className="block px-4 py-2 text-green-800 hover:bg-gray-200">Appartments</Link>
         
        </div>
      )}
    </div>
  );
};

export default Dropdown2;
