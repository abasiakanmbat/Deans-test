function AboutUs() {
	return (
		<div className="w-screen bg-[#1a0d2d] flex flex-col justify-center items-center text-white">
			<div className="flex flex-col items-center p-5">
              <h6 className="text-white text-sm font-semibold mb-4">About us</h6>
			  <h4 className="text-white text-2xl font-bold mb-4">Redefining Excellence</h4>
			  <h5>We're committed to pushing boundaries and creating impactful solutions that drive progress. </h5>
			</div>
			<div className="flex flex-row  items-center ">
             <div className="w-[500px]">
               <h4 className="text-white text-2xl font-bold mb-4">Designed with a <em>distinct</em> <br /> and <em>outstanding </em>approach <br /> <br /> </h4>
			 </div>
			 <div className="p-5">
			 <div>
               <h3>Dean's List is a Service DAO consisting of Web3 power users who provide valuable <br /> feedback sessions, as well as a variety of other services and consultation to <br /> projects wishing to succeed in the space, or simply seeking to refine their products <br />for an overall better UX.</h3>
			 </div>
			 <div className="pt-2">
               <h3>Consider our community an ecosystem of feedback bounty opportunities. Dean’s <br />List is hired by clients for a rigorous feedback session, in which participants are paid <br /> USDC and $DEAN for work contributed.<br /></h3>
			 </div>
			 <div className="pt-2">
               <h3>Dean's List started as a subDAO from Grape Protocol in 2022 as Grape served as<br /> foundation to find core power users on the Solana blockchain which the core focus<br /> would be providing feedback sessions to new and upcoming protocols on the<br />Solana ecosystem.</h3>
			 </div>
			 </div>
			</div>
			<div className=" w-[1000px] flex flex-col items-center p-5">
				<h3>Dean's List DAO doing numbers!</h3>
				<div className="pt-5">
                  <ul className="flex flex-row items-center gap-72">
					<li><em><h5>200+</h5></em> Project received</li>
					<li><em><h5>$500k+</h5></em> Community GDP</li>
					<li><em><h5>100+</h5></em> Citizens</li>
				  </ul>
				</div>

			 </div>
		</div>
	);
}

export default AboutUs;