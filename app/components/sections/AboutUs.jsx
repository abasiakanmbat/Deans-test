import SectionHeader from "../ui/SectionHeader";

function AboutUs() {
	const nfts = [
		'/images/nft/Dean.svg',
		'/images/nft/Beeman.png',
		'/images/nft/Kai.png',
		'/images/nft/Taki.png',
		'/images/nft/Scientistjoe.png',
		'/images/nft/Untiedbear.png',
		'/images/nft/Moxie.png',
		'/images/nft/unknown.png',
		'/images/nft/Dean.svg',
		'/images/nft/Beeman.png',
		'/images/nft/Kai.png',
		'/images/nft/Taki.png',
		'/images/nft/Scientistjoe.png',
	]
	return (
		<div className="bg-[#090118] w-screen flex flex-col justify-center items-center text-white relative max-w-[1440px]" id="about-us">
	{/* Background blur effect  */}
	<div className="absolute  h-[1052px] w-[277px] bg-[#9A59BA] rounded-[100%] -top-[40rem] -left-[8rem] -rotate-[45deg] blur-[390px] "></div>
		<div className="absolute  h-[1052px] w-[277px] bg-[#9A59BA] rounded-[100%] -top-[30rem] -right-[8rem] rotate-[45deg] blur-[390px] "></div>
			
			{/*Heading*/}
			<SectionHeader title="About Us" />
			<div className="flex flex-col items-center p-5 mt-8">
				<h4 className="text-white text-[48px] font-bold mb-4">Redefining Excellence</h4>
				<h5 className="text-[20px]">We&apos;re committed to pushing boundaries and creating impactful solutions that drive progress. </h5>
			</div>

			{/*Content*/}

			<div className="flex flex-col md:flex-row mt-8  md:space-x-[180px]">
				{/*Left Content*/}

             <div className="md:w-[500px] text-[40px] leading-[45px] px-5 md:px-0 pt-5">
					<h4 className="text-white font-bold mb-4 tracking-[1px] ">Designed with a <span className="font-light font-editorial-new">distinct</span> <br /> and <span className="font-light font-editorial-new">outstanding </span>approach. <br /> <br /> </h4>
			 </div>

			 {/*Right content*/}
				<div className="p-5 text-[16px]  " >
					<div>
								<h3>Dean&apos;s List is a Service DAO consisting of Web3 power users who provide valuable <br /> feedback sessions, as well as a variety of other services and consultation to <br /> projects wishing to succeed in the space, or simply seeking to refine their products <br />for an overall better UX.</h3>
					</div>
					<div className="pt-2">
								<h3>Consider our community an ecosystem of feedback bounty opportunities. Dean’s <br />List is hired by clients for a rigorous feedback session, in which participants are paid <br /> USDC and $DEAN for work contributed.<br /></h3>
					</div>
					<div className="pt-2">
								<h3>Dean&apos;s List started as a subDAO from Grape Protocol in 2022 as Grape served as<br /> foundation to find core power users on the Solana blockchain which the core focus<br /> would be providing feedback sessions to new and upcoming protocols on the<br />Solana ecosystem.</h3>
					</div>
				</div>
			</div>

			{/*Base content */}
			<div className=" w-[1000px] flex flex-col items-center p-5">
				<h3 className="text-[20px]">Dean&apos;s List DAO doing numbers!</h3>
				<div className="pt-5">
					<ul className="flex flex-col md:flex-row items-center gap-8 md:gap-[300px]">
						<li className="text-center"><p className="text-[48px] font-editorial-new">200+</p><p className="text-[16px]">Project Reviewed</p></li>
						<li className="text-center"><p className="text-[48px] font-editorial-new">$500k+</p><p className="text-[16px]">Community GDP</p></li>
						<li className="text-center"><p className="text-[48px] font-editorial-new">100+</p><p className="text-[16px]">Citizens	</p></li>
				  </ul>
				</div>	

			</div>

			{/* Floating icons */}
			{[
				{ top: "10%", left: "5%" },
				{ top: "20%", left: "40%" },
				{ top: "15%", right: "10%" },
				{ bottom: "20%", left: "10%" },
				{ bottom: "30%", right: "20%" },
				{ top: "40%", left: "50%" },
				{ top: "50%", right: "30%" },
				{ bottom: "10%", left: "40%" },
				{ top: "60%", right: "10%" },
				{ bottom: "5%", left: "15%" },
				{ bottom: "40%", right: "5%" },
				{ top: "5%", right: "35%" },
				{ top: "50%", left: "30%" },
			].map((position, index) => (
				<img
					key={index}
					src={nfts[index]}
					alt="Floating Icon"
					className={`h-12 w-12 opacity-20 absolute animate-bounce`}
					style={{ ...position }}
				/>
			))}

		</div>
	);
}

export default AboutUs;