const { default: Image } = require("next/image");

const TestimonialCard = ({ testimonial }) => {
	return (
		<div
			className="bg-purple-800 text-white rounded-lg shadow-md p-6 min-w-[300px] md:min-w-[400px] grid grid-rows-[1fr,fit] space-y-4"
		>
			<p className="text-lg">“{testimonial.quote}”</p>
			<div className="flex items-center space-x-4">
				{/* Use next/image here */}
				<div className="relative w-10 h-10">
					<Image
						src={testimonial.logo}
						alt={`${testimonial.company} logo`}
						layout="fill"
						objectFit="cover"
						className="rounded-full"
					/>
				</div>
				<div>
					<h3 className="font-semibold">{testimonial.company}</h3>
					<p className="text-sm text-gray-300">{testimonial.description}</p>
				</div>
			</div>
		</div>
	);
}

export default TestimonialCard;
