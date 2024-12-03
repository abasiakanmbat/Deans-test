import SectionHeader from "../ui/SectionHeader";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const FAQs = [
	{
		question: 'What\'s DeanslistDAO?',
		answer: 'Dean\'s List is a Service DAO consisting of Web3 power users who provide valuable feedback sessions, as well as a variety of other services and consultation to projects wishing to succeed in the space, or simply seeking to refine their products for an overall better UX.'
	},
	{
		question: "How can i join the community?",
		answer: "Cillum laborum sunt commodo reprehenderit quis aliqua commodo pariatur ex. Fugiat ad irure excepteur consectetur nisi consequat sint occaecat cillum. Exercitation in proident elit aute officia dolore eu fugiat Lorem proident velit voluptate ea nostrud. Incididunt nisi aute dolor id."
	},
	{
		question: "The different between basic feedback and feedback bonanza?",
		answer: "Laborum quis voluptate ipsum aliqua Lorem mollit ex eu incididunt. Commodo quis occaecat dolore commodo excepteur ad qui ad in. Aliquip elit nisi nostrud incididunt laborum. Consectetur laborum cupidatat voluptate eiusmod proident est fugiat duis enim.",
	},
	{
		question: "What th benefits of joining the community?",
		answer: "Proident est aliqua id sint labore in ad non ullamco esse pariatur proident. Sit occaecat Lorem aute veniam labore nisi incididunt aute do fugiat amet ipsum do in. Eu aliqua aute nulla excepteur incididunt excepteur eu."
	},
	{
		question: "When is the grant program available?",
		answer: "Proident adipisicing reprehenderit incididunt ex exercitation cillum aute dolor nulla eiusmod amet incididunt. Exercitation est dolore tempor adipisicing qui esse in ea est id aliqua mollit officia nisi. Lorem fugiat dolor quis adipisicing incididunt nulla quis. Nulla magna non est ipsum ea anim consequat ad voluptate. Cillum ullamco esse eu cupidatat in eiusmod labore dolor dolor magna deserunt."
	}
]

function FAQ() {
	return (
		<div className="grid grid-cols-2">
			<div className="pl-16">
				<SectionHeader title="FAQ" />
				<p className="text-2xl font-semibold">All the <i>A&rsquo;s</i> to your <i>Q&rsquo;s</i></p>
				<p className="font-extralight">Everything you need to know about our community.</p>
			</div>

			<div className="pr-16">
				<Accordion type="single" collapsible className="w-full">
					{
						FAQs.map((faq, i) => <AccordionItem value={`item-${i}`} key={i}>
							<AccordionTrigger>{faq.question}</AccordionTrigger>
							<AccordionContent>
								{faq.answer}
							</AccordionContent>
						</AccordionItem>)
					}

				</Accordion>
			</div>

		</div>
	);
}

export default FAQ;