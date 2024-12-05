"use client"
import React, { useState } from 'react';



function Footer() {

	return (
		<footer className="bg-[#1a0d2d] text-white p-16">
      {/*Top Footer*/}
  <div className="flex justify-between items-center pb-6">
    {/*Top left content*/}
    <div className="flex items-center">
      <img src="dean.png" alt="DeansListDAO Logo" className="w-10 h-10 mr-2" />
      <span className="text-xl font-bold">DeansListDAO</span>
    </div>
      
      {/*Top middle content*/}
    <nav className="flex space-x-4 gap-7">
      <a href="#" className="hover:text-gray-300">Home</a>
      <a href="#" className="hover:text-gray-300">Services</a>
      <a href="#" className="hover:text-gray-300">About Us</a>
      <a href="#" className="hover:text-gray-300">Events</a>
      <a href="#" className="hover:text-gray-300">Leaderboard</a>
    </nav>


     {/*Top right content*/}
    <div className="flex space-x-4">
      <a href="https://x.com/deanslistDAO" target='blank' className="hover:text-gray-300">
        <img src="twitter.png" alt="Twitter" className="w-6 h-6" />
      </a>
      <a href="https://discord.gg/deanslist" target='blank' className="hover:text-gray-300">
        <img src="discord.png" alt="Discord" className="w-6 h-6" />
      </a>
      <a href="https://github.com/dean-s-list"  target='blank' className="hover:text-gray-300">
        <img src="git.png" alt="GitHub" className="w-6 h-6" />
      </a>
    </div>
  </div>



  <hr className="border-t border-gray-700 my-4" />



    {/*Base content*/}
  <div className="flex justify-between items-center mt-4 pt-6">
    <div className="flex space-x-4">
      <a href="#" className="hover:text-gray-300">Documentation</a>
      <a href="https://www.tensor.trade/trade/deanslist" target='blank' className="hover:text-gray-300">NFT Store</a>
      <a href="#" className="hover:text-gray-300">Privacy</a>
    </div>
    <p>&copy; {new Date().getFullYear()} DeanslistDAO All right reserved.</p>
  </div>
</footer>
	);
}

export default Footer;