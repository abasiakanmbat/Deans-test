import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { ChevronDown } from "lucide-react";

function NavBar() {
	return (
		<header className="flex justify-between mx-20 mt-10 bg-[#814D9A1A] bg-opacity-10 px-8 py-4 items-center rounded-lg">
			{/* Logo */}
			<Link href="/">
				<div className="flex items-center gap-2">
					<Image src="logo.svg" alt="logo" width={36} height={36} />
					<span className="text-2xl font-semibold">DeansListDAO</span>
				</div>
			</Link>


			{/* Navs */}
			<nav>
				<ul className="flex gap-8 font-semibold">
					<li><Link href="#">Home</Link></li>
					<li><Link href="#services">Services</Link></li>
					<li><Link href="#about-us">About Us</Link></li>
					<li><Link href="#events">Events</Link></li>
					<li><Link href="#states" className="flex items-center gap-1">Leaderboard </Link></li>
				</ul>
			</nav>

			<div>
			<button className=" bg-[#9A59BA80] py-2 px-6 rounded-full border border-[#9A59BA] font-medium hover:bg-purple-400 transition flex gap-2 items-center">
					
					Get Started
				</button>
			</div>
		</header>
	);
}

export default NavBar;