"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const Services = () => {
	const draw = {
		hidden: { pathLength: 0, opacity: 0 },
		visible: (i) => {
			const delay = 1 + i * 0.5;
			return {
				pathLength: 1,
				opacity: 1,
				transition: {
					pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
					opacity: { delay, duration: 0.01 }
				}
			};
		}
	};

	return (
		<div className="bg-gradient-to-r from-purple-900 to-black text-white py-16 px-12">
			{/* Header Section */}
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold">
					Community of Web3 <span className="italic text-purple-400">power users</span>.
				</h2>
				<p className="text-gray-300 mt-4 max-w-3xl mx-auto">
					As experienced Web3 users, we provide in-depth feedback sessions and a suite of consulting services to
					projects looking to thrive in the space. From product quality to user experience, we’re here to elevate
					your project to the next level.
				</p>
			</div>

			{/* Services Section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

				{/* Feedback Review */}
				<div className="bg-purple-800 rounded-lg shadow-md p-6 flex flex-col space-y-4">
					<h3 className="text-2xl font-semibold">Feedback Review</h3>
					<p className="text-gray-300">
						Our goal is to make your product user-friendly with top-notch functionality that meets industry standards.
					</p>
					<Image
						src="/images/feedback-review-illustration.png" // Replace with the actual image path
						alt="Feedback Review"
						width={400}
						height={200}
						className="rounded-lg"
					/>
					{/* <motion.svg
						width="600"
						height="600"
						viewBox="0 0 600 600"
						initial="hidden"
						animate="visible"
					>
						<motion.circle
							cx="100"
							cy="100"
							r="80"
							stroke="#ff0055"
							variants={draw}
							custom={1}
						/>

						<motion.line
							x1="220"
							y1="30"
							x2="360"
							y2="170"
							stroke="#00cc88"
							variants={draw}
							custom={2}
						/>
						<motion.line
							x1="220"
							y1="170"
							x2="360"
							y2="30"
							stroke="#00cc88"
							variants={draw}
							custom={2.5}
						/>
						<motion.rect
							width="140"
							height="140"
							x="410"
							y="30"
							rx="20"
							stroke="#0099ff"
							variants={draw}
							custom={3}
						/>
						<motion.circle
							cx="100"
							cy="300"
							r="80"
							stroke="#0099ff"
							variants={draw}
							custom={2}
						/>
						<motion.line
							x1="220"
							y1="230"
							x2="360"
							y2="370"
							stroke="#ff0055"
							custom={3}
							variants={draw}
						/>
						<motion.line
							x1="220"
							y1="370"
							x2="360"
							y2="230"
							stroke="#ff0055"
							custom={3.5}
							variants={draw}
						/>
						<motion.rect
							width="140"
							height="140"
							x="410"
							y="230"
							rx="20"
							stroke="#00cc88"
							custom={4}
							variants={draw}
						/>
						<motion.circle
							cx="100"
							cy="500"
							r="80"
							stroke="#00cc88"
							variants={draw}
							custom={3}
						/>
						<motion.line
							x1="220"
							y1="430"
							x2="360"
							y2="570"
							stroke="#0099ff"
							variants={draw}
							custom={4}
						/>
						<motion.line
							x1="220"
							y1="570"
							x2="360"
							y2="430"
							stroke="#0099ff"
							variants={draw}
							custom={4.5}
						/>
						<motion.rect
							width="140"
							height="140"
							x="410"
							y="430"
							rx="20"
							stroke="#ff0055"
							variants={draw}
							custom={5}
						/>
					</motion.svg> */}
				</div>

				{/* Decentragrants */}
				<div className="bg-purple-800 rounded-lg shadow-md p-6 flex flex-col space-y-4">
					<h3 className="text-2xl font-semibold">Decentragrants</h3>
					<p className="text-gray-300">
						Empowering projects with grants to support innovative, solution-driven development tailored for DAO.
					</p>
					<div className="flex flex-wrap space-x-2 space-y-2 mt-4">
						{/* Grant Items */}
						<div className="bg-purple-900 text-purple-300 px-4 py-2 rounded-md">
							Publed $8,000
						</div>
						<div className="bg-purple-900 text-purple-300 px-4 py-2 rounded-md">
							Gib.Work $7,500
						</div>
						<div className="bg-purple-900 text-purple-300 px-4 py-2 rounded-md">
							SolonaHub $10,000
						</div>
					</div>
				</div>

				<div className="grid col-span-2 gap-4 grid-cols-[40%,1fr]">
					{/* Hackathon Judging */}
					<div className="bg-purple-800 rounded-lg shadow-md p-6 flex flex-col space-y-4">
						<h3 className="text-2xl font-semibold">Hackathon Judging</h3>
						<p className="text-gray-300">
							The collective knowledge of our power users ensures that each project is assessed with a keen understanding
							of the Web3 ecosystem.
						</p>
						<div className="flex space-x-2">
							{/* Hackathon Badges */}
							<div className="bg-purple-900 text-purple-300 px-4 py-2 rounded-md">
								Renaissance Hackathon
							</div>
							<div className="bg-purple-900 text-purple-300 px-4 py-2 rounded-md">
								Radar Hackathon
							</div>
							<div className="bg-purple-900 text-purple-300 px-4 py-2 rounded-md">
								Hyperdrive Hackathon
							</div>
						</div>
					</div>

					{/* Feedback Bonanza */}
					<div className="bg-purple-800 rounded-lg shadow-md p-6 flex flex-col space-y-4">
						<h3 className="text-2xl font-semibold">Feedback Bonanza: Live Feedback Session</h3>
						<p className="text-gray-300">
							Get real-time, in-depth reviews tailored to your project. Our live feedback sessions deliver actionable
							insights to help you refine and elevate your product.
						</p>
						<div className="relative w-full h-40">
							<Image
								src="/images/marshmallow-app.png" // Replace with the actual image path
								alt="Marshmallow App"
								layout="fill"
								objectFit="cover"
								className="rounded-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
