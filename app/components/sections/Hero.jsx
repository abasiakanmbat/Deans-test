function Hero() {
	return (
		<div className="py-20 px-4 text-center">
			{/* Badge Section */}
			<div className="flex justify-center items-center space-x-4 mb-6">
				<span className="bg-purple-500 text-white text-sm py-1 px-3 rounded-full">
					New feature
				</span>
				<a
					href="/realms-dashboard"
					className="text-purple-300 underline hover:text-white transition"
				>
					Check out the Realms dashboard →
				</a>
			</div>

			{/* Main Title */}
			<h1 className="text-4xl md:text-5xl font-bold mb-4">
				<span className="text-purple-400">Web3 Native</span> <em>Network State</em>, <br />
				Solana&rsquo;s Most Dedicated Power Users.
			</h1>

			{/* Subtitle */}
			<p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
				Dean&rsquo;s List connects Web3 expertise with Solana protocols, driving
				ecosystem growth and elevating user experiences.
			</p>

			{/* Buttons */}
			<div className="flex justify-center space-x-4">
				<button className="bg-purple-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-purple-600 transition">
					Get Started
				</button>
				<button className="border border-white text-white py-2 px-6 rounded-lg font-medium hover:bg-white hover:text-purple-900 transition">
					Learn more ↓
				</button>
			</div>
		</div>
	);
}

export default Hero;