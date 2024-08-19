'use client';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-white">
        <img src="/img/Amazon_Web_Services_logo_AWS.png" alt="AWS Logo" width="160" height="160" />
      </div>
      <div className="relative">
        <input
          type="text"
          className="pl-3 pr-10 py-2 rounded-lg text-sm bg-gray-700 text-white placeholder-gray-400"
          placeholder="Search for..."
        />
        <button className="absolute right-0 top-0 mt-2 mr-3">
          <i className="fas fa-search text-white"></i>
        </button>
      </div>
      <div className="relative">
        <button onClick={toggleDropdown} className="relative flex items-center text-white focus:outline-none">
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
          />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-[#000000] py-1 shadow-lg ring-1 ring-black ring-opacity-5">
            <Link href="/profile" className="block px-4 py-2 text-sm text-white">
              Profile
            </Link>
            <button onClick={signOut} className="block w-full text-left px-4 py-2 text-sm text-white">Sign out</button>
       
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
