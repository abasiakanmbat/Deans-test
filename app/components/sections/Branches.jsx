

function Branches() {
	return (
		<div className="w-screen  bg-[#090118] flex flex-row text-white  p-14 pt-40">
			<div className=" w-[500px] flex flex-col" >
				<h6 className="text-white text-sm font-semibold mb-4">Branches</h6>
				<h4 className="text-white text-2xl font-bold mb-4">Our Regional States</h4>
				<h5>Countries in which you can find us IRL and visit our branches.</h5>
			</div>
			<div className="flex flex-col gap-4 " >  
				<div className="flex flex-col w-[685px] h-36 border-2 border-green-500 rounded-lg pl-3 pt-1 pr-3 bg-gradient-to-r from-green-500 to-white p-6 rounded-lg relative " >
					<img src="dlngimage.png" alt="Image Description" className="absolute right-0 top-0 h-full w-1/2 object-cover mix-blend-multiply"/>
					<div className="relative z-10 mt-5">
						<div className="flex items-center">
						<h2>Deanslist NG </h2>
							<img src="flag-nigeria.png" alt="Nigeria Flag" className="absolute top-0 left-0 w-6 h-6 ml-24 " />
						</div>
					
					<div className="flex flex-row pt-5 gap-16  ">
					<h3>Visit our regional office to get in touch with DeanslistNG community members and learn more about us.</h3>
					<button className="border-2 border-[#51CC8B] rounded-full w-[200px] h-12 bg-green-500 ">Learn More!</button>
					</div>
					
					</div>
					
				</div>
				<div className="flex flex-col w-[685px] h-36 border-2 border-[#D6BE16] rounded-lg pl-3 pt-1 pr-3 bg-gradient-to-r from-[#B1B60D] to-[#238F4B] p-6 rounded-lg relative" >
					<img src="dlbrimage.png" alt="Image Description" className="absolute right-0 top-0 h-full w-1/2 object-cover mix-blend-multiply" />
				<div className="relative z-10 mt-5">
				<div className="flex items-center">
						<h2>Deanslist BR </h2>
							<img src="flag-brazil.png" alt="Brazil Flag" className="absolute top-0 left-0 w-6 h-6 ml-24 " />
						</div>
					<div className="flex flex-row pt-5 gap-16 ">
					<h3>Visit our regional office to get in touch with DeanslistBR community members and learn more about us.</h3>
					<button className="border-2 border-[#D6BE16] rounded-full w-[200px] h-12 bg-[#AD9907] ">Learn More!</button>
					</div>
				</div>
					

				</div>
			</div>
		</div>
	);
}

export default Branches;