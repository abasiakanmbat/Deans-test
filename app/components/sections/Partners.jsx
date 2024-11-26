



function Partners() {
	return (
		<div className="w-screen bg-[#090118] h-96 flex justify-center items-center text-white" >
			<div className=" w-[1000px] flex flex-col items-center">
				<h6 className="text-white text-sm font-semibold mb-4">Partners</h6>
				<h4 className="text-white text-2xl font-bold mb-4">Our partners are our strength</h4>
				<div className="  p-10">
				<ul className='flex flex-row items-center gap-8'>
              <li className='flex items-center justify-between gap-4 px-2 py-2'><img src='realms.png' alt="realms" className="w-10 h-10"/>Realms</li>
              <li className='flex items-center justify-between gap-4 px-2 py-2'><img src='island.png' alt="islanddao" className="w-10 h-10"/>IslandDAO</li>
              <li className='flex items-center justify-between gap-4 px-2 py-2'><img src='pubkey.png' alt="pubkey" className="w-10 h-10"/>Pubkey</li>
              <li className='flex items-center justify-between gap-4 px-2 py-2'><img src='solana.png' alt="solana" className="w-10 h-10"/>Solana</li>
              <li className='flex items-center justify-between gap-4 px-2 py-2'><img src='coloseum.png' alt="colosseum" className="w-10 h-10"/>Colosseum</li>
              <li className='flex items-center justify-between gap-4 px-2 py-2'><img src='gib.png' alt="gibwork" className="w-10 h-10"/>Gib.work</li>
             
              
            </ul>
				</div>
			</div>
		</div>
	);
}

export default Partners;