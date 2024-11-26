function Branches() {
	return (
		<div className="w-screen  bg-[#090118] flex flex-row text-white  p-14 pt-40">
			<div className=" w-[500px] flex flex-col" >
				<h6 className="text-white text-sm font-semibold mb-4">Branches</h6>
				<h4 className="text-white text-2xl font-bold mb-4">Our Regional States</h4>
				<h5>Countries in which you can find us IRL and visit our branches.</h5>
			</div>
			<div className="flex flex-col gap-4" >  
				<div className="flex flex-col w-[665px] h-32 border-2 border-green-500 rounded-lg pl-3 pt-1 pr-3" >
					<h2>Deanslist NG</h2>
					<div className="flex flex-row pt-3 gap-16 ">
					<h3>Visit our regional office to get in touch with DeanslistNG community <br /> members and learn more about us.</h3>
					<button className="border-2 border-green-500 rounded-full w-[120px] h-12">Learn More!</button>
					</div>
					

				</div>
				<div className="flex flex-col w-[665px] h-32 border-2 border-green-500 rounded-lg pl-3 pt-1 pr-3 " >
					<h2>Deanslist NG</h2>
					<div className="flex flex-row pt-3 gap-16 ">
					<h3>Visit our regional office to get in touch with DeanslistNG community <br /> members and learn more about us.</h3>
					<button className="border-2 border-green-500 rounded-full w-[120px] h-12">Learn More!</button>
					</div>
					

				</div>
			</div>
		</div>
	);
}

export default Branches;