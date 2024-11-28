"use client"
import React, { useState } from 'react';


function Footer() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

	return (
		<footer className="bg-[#090118] text-white p-16">
  <div className="flex justify-between items-center pb-6">
    <div className="flex items-center">
      <img src="dean.png" alt="DeansListDAO Logo" className="w-10 h-10 mr-2" />
      <span className="text-xl font-bold">DeansListDAO</span>
    </div>

    <nav className="flex space-x-4 gap-7">
      <a href="#" className="hover:text-gray-300">Home</a>
      <a href="#" className="hover:text-gray-300">Services</a>
      <a href="#" className="hover:text-gray-300">About Us</a>
      <a href="#" className="hover:text-gray-300">Events</a>
      <div className="relative inline-block">
    <button onClick={toggleDropdown} className="hover:text-gray-300 flex items-center">
      Network State
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1">
        <path d="M19 9l-7 7-7-7" />
      </svg>
       </button>
    <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} bg-gray-800 text-white rounded-md shadow-md mt-2 w-32`}>
      <a href="#" className="block px-4 py-2 hover:bg-gray-700 ">Deanslist NG</a>
      <a href="#" className="block px-4 py-2 hover:bg-gray-700">Deanslist BR</a>
      
    </div>
    </div>
 
    </nav>

    <div className="flex space-x-4">
      <a href="#" className="hover:text-gray-300">
        <img src="twitter.png" alt="Twitter" className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-gray-300">
        <img src="discord.png" alt="Discord" className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-gray-300">
        <img src="git.png" alt="GitHub" className="w-6 h-6" />
      </a>
    </div>
  </div>

  <hr className="border-t border-gray-700 my-4" />

  <div className="flex justify-between items-center mt-4 pt-6">
    <div className="flex space-x-4">
      <a href="#" className="hover:text-gray-300">Documentation</a>
      <a href="#" className="hover:text-gray-300">NFT Store</a>
      <a href="#" className="hover:text-gray-300">Privacy</a>
    </div>
    <p>&copy; {new Date().getFullYear()} DeanslistDAO All right reserved.</p>
  </div>
</footer>
	);
}

export default Footer;