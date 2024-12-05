import { CircleArrowUp } from "lucide-react";
import { ArrowDown } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

function Hero() {
	return (
		<div className="pt-20 px-4 md:text-center flex flex-col md:items-center">
			{/* Badge Section */}
			<div className="flex justify-center items-center space-x-4 mb-6 bg-[#9A59BA80] p-1 rounded-full cursor-pointer text-xs md:text-normal">
				<span className="bg-white text-[#9A59BA] md:text-sm py-1 px-3 rounded-full">
					New feature
				</span>
				<p
					className="flex gap-2 items-center"
				>
					Check out the Realms dashboard <ArrowRight size={16} />
				</p>
			</div>

			{/* Main Title */}
			<h1 className="text-4xl md:text-5xl font-bold mb-4">
				<p >Web3 Native <span className="italic font-light font-editorial-new">Network State,</span> </p>
				<p>Solana&rsquo;s Most Dedicated Power Users.</p>
			</h1>

			{/* Subtitle */}
			<p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
				Dean&rsquo;s List connects Web3 expertise with Solana protocols, driving
				ecosystem growth and elevating user experiences.
			</p>

			{/* Buttons */}
			<div className="flex self-start md:self-auto md:justify-center space-x-4">
			<a href="https://discord.gg/deanslist" target="blank"  rel="noopener noreferrer"><button className=" bg-[#9A59BA80] py-2 px-6 rounded-full border border-[#9A59BA] font-medium hover:bg-purple-400 transition flex gap-2 items-center">
					<CircleArrowUp className="hidden md:block"/>
					Get Started
				</button>
				</a>	
				<button className="text-white hidden py-2 px-6 rounded-lg font-medium hover:bg-white hover:text-purple-900 transition md:flex gap-2 items-center">
					Learn more <ArrowDown />
				</button>
			</div>

			<div className="w-full hidden md:flex justify-center mt-16 overflow-hidden h-[320px]">
				<div className="w-[1024px] h-[1024px] rounded-full border-t-8 border-[#351A45]">
					<img src="/continents.png" className="w-full" />
				</div>
			</div>
		</div>
	);
}

export default Hero;