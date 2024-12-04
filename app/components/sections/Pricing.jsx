

function Pricing() {
  const bonanzaItems = [
    'Resolve critical issues in real-time for immediate impact.',
    'Real-time testing and live insights from experts.',
    'Optimize visuals and layout with expert feedback.',
    'Analyze usability and design compared to competitors.',
    'Feature requests to enhance engagement.',
    'Actionable recommendations post-session.',
    'Sentiment Analysis for panel users.',
    'Mobile-only dApps reviewed with Solana SAGA DAO.',
  ];

  const bonanzaPlusItems = [
    'Everything in Feedback Bonanza.',
    'Enhanced analysis for usability and layout optimization.',
    'Comprehensive summaries and recommendations.',
    'Deeper insights for feature requests and engagement.',
    'Mobile-only dApps reviewed with Solana SAGA DAO.',
  ];

  const deepDiveItems = [
    'Includes Feedback Bonanza and PLUS features.',
    'Comprehensive 2-week review by diverse experts.',
    'Actionable insights for features and usability.',
    'Competition analysis and Go-To-Market recommendations.',
    'Governance structure insights for DAOs.',
    'Tokenomics and distribution strategies advice.',
    'Static code analysis with Sec3 for security.',
    'Collaboration with Waterloo Blockchain Club.',
    'Professional-grade final report.',
  ];


	return (
		<div className="w-screen bg-gradient-to-r from-purple-900 to-black flex flex-col justify-center items-center text-white">
			<div className="flex flex-col items-center p-10">
			<h6 className="text-white text-sm font-semibold mb-4">pricing</h6>
			  <h4 className="text-white text-2xl font-bold mb-4">Plans that fit your <em>scale</em></h4>
			  <h5>No additional fees or hidden costs.</h5>
			</div>
    
      <div className="flex flex-col items-center bg-gradient-to-r from-purple-900 to-black p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl">
    {/* Feedback Bonanza */}
          <div className="bg-[#1a0d2d] text-white p-6 shadow-lg flex flex-col h-full card-animated-border">
      <h2 className="text-xl font-bold mb-4">Feedback Bonanza</h2>
      <p className="text-sm mb-4">
        Live expert feedback on X, YouTube, and Twitch to optimize your dApp, improve usability, and outshine competitors!
      </p>
      <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-sm list-[url('/images/list-item-ind.svg')]">

              {bonanzaItems.map((item, index) => (
                <li className="flex items-start before:content-[''] before:inline-block before:w-4 before:h-4 before:bg-[url('/images/list-item-ind.svg')] before:bg-contain before:bg-no-repeat before:mr-2" key={index}>
                  {item}
                </li>
              ))}
      </ul>
      <hr className="border-t-2 border-gray-600 my-6" />
      <div className="mt-auto flex flex-row justify-center items-center">
        <p className="text-3xl font-bold">
          $999 <span className="text-sm">per session</span>
        </p>
        <button className="bg-[#70328F] hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-4 ml-10">
          Get Started
        </button>
      </div>
    </div>

    {/* Feedback Bonanza PLUS */}
          <div className="bg-purple-900 text-white p-6 shadow-lg flex flex-col h-full card-animated-border relative">
      <div className="absolute top-7 right-1.5 bg-purple-700 text-xs font-bold px-2 py-1 rounded-full ">
        Most Popular
      </div>
      <h2 className="text-xl font-bold mb-4">Feedback Bonanza PLUS</h2>
      <p className="text-sm mb-4">
        Live on X, YouTube, and Twitch, get professional reviews and a detailed report with actionable ideas to optimize your dApp.
      </p>
      <h3 className="text-lg font-semibold mb-4">Features</h3>
      <ul className="space-y-2 text-sm">
              {bonanzaPlusItems.map((item, index) => (
                <li className="flex items-start before:content-[''] before:inline-block before:w-4 before:h-4 before:bg-[url('/images/list-item-ind.svg')] before:bg-contain before:bg-no-repeat before:mr-2" key={index}>
                  {item}
                </li>
              ))}
      </ul>
      <hr className="border-t-2 border-gray-600 my-6 mt-32" />
      <div className="mt-auto flex flex-row justify-center items-center">
        <p className="text-3xl font-bold">
          $1499 <span className="text-sm">per session</span>
        </p>
        <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mt-4 ml-7">
          Get Started
        </button>
      </div>
    </div>

    {/* Deep Dive Assessment */}
          <div className="bg-[#1a0d2d] text-white p-6 shadow-lg flex flex-col h-full card-animated-border">
      <h2 className="text-xl font-bold mb-4">
        Deep Dive Assessment{" "}
        <span className="bg-purple-700 text-xs font-bold px-2 py-1 rounded-full ">
          Exclusive
        </span>
      </h2>
      <p className="text-sm mb-4">
        The ultimate 2-week review package for dApps on Solana, crafted for exceptional growth and optimization.
      </p>
      <h3 className="text-lg font-semibold mb-4">Features</h3>
      <ul className="space-y-2 text-sm">
              {deepDiveItems.map((item, index) => (
                <li className="flex items-start before:content-[''] before:inline-block before:w-4 before:h-4 before:bg-[url('/images/list-item-ind.svg')] before:bg-contain before:bg-no-repeat before:mr-2" key={index}>
                  {item}
                </li>
              ))}
      </ul>
      <hr className="border-t-2 border-gray-600 my-6 mt-14" />
      <div className="mt-auto flex flex-row justify-center items-center">
        <p className="text-3xl font-bold">
          $4,999 <span className="text-sm">per session</span>
        </p>
        <button className="bg-[#70328F] hover:bg-purple-600 text-white font-bold py-2 px-4 rounded mt-4 ml-5">
          Get Started
        </button>
      </div>
    </div>
  </div>
</div>


		</div>
	);
}

export default Pricing;