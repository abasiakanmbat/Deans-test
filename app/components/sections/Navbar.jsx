import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { ChevronDown } from "lucide-react";

function NavBar() {
	return (
		<header className="flex justify-between md:mx-20 md:mt-10 bg-[#814D9A1A] bg-opacity-10 px-8 py-4 items-center rounded-lg relative">
			{/* Logo */}
			<Link href="/">
				<div className="flex items-center gap-2">
					<Image src="logo.svg" alt="logo" width={36} height={36} />
					<span className="text-2xl font-semibold">DeansListDAO</span>
				</div>
			</Link>

			<div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
       
        <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span class="absolute -inset-0.5"></span>
          <span class="sr-only">Open main menu</span>
          
          <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg class="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

			{/* Navs */}
			<nav className="hidden md:block">
				<ul className="flex gap-8 font-semibold">
					<li><Link href="#">Home</Link></li>
					<li><Link href="#services">Services</Link></li>
					<li><Link href="#about-us">About Us</Link></li>
					<li><Link href="#events">Events</Link></li>
					<li><Link href="https://leaderboard.deanslist.services/" className="flex items-center gap-1">Leaderboard </Link></li>
				</ul>
			</nav>

			<div className="hidden md:block">
			<a href="https://discord.gg/deanslist" target="blank"  rel="noopener noreferrer"><button className=" bg-[#9A59BA80] py-2 px-6 rounded-full border border-[#9A59BA] font-medium hover:bg-purple-400 transition flex gap-2 items-center">
					
					Get Started
				</button>
				</a>

			</div>

			<div class="hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
      <a href="#" class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a>
    </div>
  </div>
		</header>
	);
}

export default NavBar;