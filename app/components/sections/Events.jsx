import React from 'react';

const Events = () => {
	return (
		<section className="bg-gradient-to-b from-purple-900 to-black text-white py-20">
			{/* Title Section */}
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold mb-4">Community <span className="italic">events</span> and <span className="italic">conferences</span>.</h2>
				<p className="text-lg max-w-3xl mx-auto">
					Stay informed on recent DAO events and gatherings featuring our members. Get exclusive recaps from our community's latest engagements.
				</p>
			</div>

			{/* Events Cards */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
				{/* Card 1 */}
				<div className="bg-gradient-to-tr from-blue-900 to-blue-500 rounded-lg p-6 shadow-lg">
					<img
						src="/path/to/image1.jpg" // Replace with your image path
						alt="IslandDAOx Event"
						className="rounded-lg mb-4"
					/>
					<h3 className="text-2xl font-bold mb-2">IslandDAOx</h3>
					<p className="text-sm mb-4">Everything you need to know about the event.</p>
					<p className="text-base mb-6">
						The community-run conference focused on DAOs and digital Governance Tools. Experience the highlights of AthensDAOx conference!
					</p>
					<button className="bg-white text-blue-800 px-4 py-2 rounded-full font-semibold hover:bg-blue-200">
						Explore the fun!
					</button>
				</div>

				{/* Card 2 */}
				<div className="bg-gradient-to-tr from-green-900 to-green-500 rounded-lg p-6 shadow-lg">
					<img
						src="/path/to/image2.jpg" // Replace with your image path
						alt="IslandDAOx Event"
						className="rounded-lg mb-4"
					/>
					<h3 className="text-2xl font-bold mb-2">IslandDAOx</h3>
					<p className="text-sm mb-4">Everything you need to know about the event.</p>
					<p className="text-base mb-6">
						A one-month co-working event on the island. Experience the highlights of IslandDAOx live event presented by DeansListDAO!
					</p>
					<button className="bg-white text-green-800 px-4 py-2 rounded-full font-semibold hover:bg-green-200">
						Explore the fun!
					</button>
				</div>
			</div>
		</section>
	);
};

export default Events;
