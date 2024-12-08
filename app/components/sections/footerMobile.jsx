import Image from 'next/image'
import React from 'react'

export default function FooterMobile() {
  return (
    <div className='md:hidden'>

        <div className="mb-10 flex items-center gap-2 px-10 ">
            <Image src="logo.svg" alt="logo" width={28} height={28} />
            <span className="text-xl font-semibold">DeansListDAO</span>
            </div>

<div className='flex justify-between px-10'>
    <nav>
        <ul className='flex flex-col space-y-5'>
            <a href="#hero" className='hover:text-[#D896F7] active:text-[#D896F7] focus:text-[#D896F7]'>Home</a>
            <a href="#about-us" className='hover:text-[#D896F7] active:text-[#D896F7] focus:text-[#D896F7]'>About us</a>
            <a href="#events" className='hover:text-[#D896F7] active:text-[#D896F7] focus:text-[#D896F7]'>Events</a>
            <a href="#services" className='hover:text-[#D896F7] active:text-[#D896F7] focus:text-[#D896F7]'>Services</a>
        </ul>
    </nav>

    <div>
    <ul className='flex flex-col space-y-5'>
            <li>Leaderboard</li>
            <li>Documentation</li>
            <li>NFT Store</li>
            <li>Privacy</li>
        </ul>
    </div>

</div>

<div className='my-10'>
<div className="flex justify-center space-x-4 border-t border-[#191028]  pt-10 pb-5">
          <a href="https://x.com/deanslistDAO" target="blank" className="hover:text-gray-300">
            <img src="twitter.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://discord.gg/deanslist" target="blank" className="hover:text-gray-300">
            <img src="discord.png" alt="Discord" className="w-6 h-6" />
          </a>
          <a href="https://github.com/dean-s-list" target="blank" className="hover:text-gray-300">
            <img src="git.png" alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
<p className="text-center">&copy; {new Date().getFullYear()} DeanslistDAO. All rights reserved.</p>

</div>


    </div>
  )
}
