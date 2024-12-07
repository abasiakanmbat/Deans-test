import SectionHeader from "../ui/SectionHeader";


function Branches() {
	return (
		<div className="w-screen flex flex-col md:flex-row pt-40 mb-12">
			{/*Left Content*/}

			<div className="md:w-[500px] flex flex-col relative" >
				<SectionHeader title="Branches" />
				<div className="md:p-14 p-4">
					<h4 className="text-white text-2xl font-bold mb-4 mt-12">Our Regional <span className="font-light font-editorial-new">States</span></h4>
					<h5>Countries in which you can find us IRL and visit our branches.</h5>
				</div>
			</div>

			{/*Branch card*/}
			<div div className="flex flex-col gap-8 md:p-14 p-4" >  
				{/*Card1*/}
				<div className="flex flex-col min-w-[280px] md:w-[685px] md:h-36 border-2 [border-image:linear-gradient(to_right,white,green)_50] rounded-lg pl-3 pt-1 pr-3 p-6 relative ">
					<img src="dlngimage.png" alt="Image Description" className="absolute right-0 top-0 h-full w-1/2 object-cover" />
					<div className="relative z-10 mt-5">
						<div className="flex items-center">
						<h2>Deanslist NG </h2>
							<img src="flag-nigeria.png" alt="Nigeria Flag" className="absolute top-0 left-0 w-6 h-6 ml-24 " />
						</div>
					
					<div className="flex flex-col md:flex-row pt-5 gap-16  ">
					<h3>Visit our regional office to get in touch with DeanslistNG community members and learn more about us.</h3>
							<a href="https://deanslistng.com/" target="blank" rel="noopener noreferrer"><button className="border-2 border-[#51CC8B] rounded-full w-full md:w-[200px] h-12 bg-green-500 hover:bg-green-300 transition ">Learn More!</button></a>
					</div>
					
					</div>
					
					<div className="w-full h-full bg-gradient-to-r from-green-500 from-50% to-75% to-transparent top-0 left-0 absolute">
					</div>
				</div>
				{/*Card2*/}
				<div className="relative flex flex-col min-w-[280px] md:w-[685px] md:h-36 border-2 pl-3 pt-1 pr-3 p-6 rounded-lg [border-image:linear-gradient(to_right,#4d9f0c,#f6b73c)_50]" >
					<img src="dlbrimage.png" alt="Image Description" className="absolute right-0 top-0 h-full w-1/2 object-cover" />
					<div className="relative z-10 mt-5">
						<div className="flex items-center">
							<h2>Deanslist BR </h2>
							<img src="flag-brazil.png" alt="Brazil Flag" className="absolute top-0 left-0 w-6 h-6 ml-24 " />
						</div>
						<div className="flex flex-col md:flex-row pt-5 gap-16 ">
							<h3>Visit our regional office to get in touch with DeanslistBR community members and learn more about us.</h3>
							<a href="https://web-site-deanslist.vercel.app/" target="blank" rel="noopener noreferrer"><button className="border-2 border-[#D6BE16] rounded-full w-full md:w-[200px] h-12 bg-[#AD9907] hover:bg-yellow-300 transition">Learn More!</button></a>
						</div>
					</div>
					
					<div className="w-full h-full bg-gradient-to-r from-[#B1B60D] via-green-600 via-50% to-75% to-[transparent] top-0 left-0 absolute">

					</div>
				</div>

			</div>
		</div>
	);
}

export default Branches;