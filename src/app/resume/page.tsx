import IconBox from "@/components/icon-box";
import { Book, Dot, Minus } from "lucide-react";

export default function Resume() {
	const educations = [
		{
			school: "Indian Institute Of Techonology, Kharagpur",
			period: "2017 — 2022",
			description:
				"Field of Study: Mechanical Engineering and Mechanical System Design.",
		},
		{
			school: "Maharishi Vidya Mandir",
			period: "2012 — 2016",
			description: "Field of Study: Science and Mathematics in CBSE Board.",
		},
	];

	const experiences = [
		{
			role: "Software Developer",
			company: "Innovation Labs, ICICI Bank",
			period: "2023 — Present",
			projects: [
				{
					id: 1,
					title: "NFT Rewards 360",
					category: "Blockchain",
					description: [
						"Developed a blockchain-based NFT Rewards 360 Platform frontend using Vite, accelerating page load speeds by 65% and enhancing user experience.",
						"Engineered a secure Web3 authentication system integrating MetaMask with private blockchain technology, reducing unauthorized access attempts by 98% through a robust 2FA solution.",
						"Implemented an NFT-based coupon redemption system, processing 10,000+ monthly transactions with 99.9% reliability and an average completion time of 3.2 seconds.",
						"Optimized smart contract integration for NFT minting and redemption, decreasing gas fees by 35% and improving transaction success rate to 99.7%.",
						"Designed a responsive UI/UX for blockchain interactions, increasing user engagement by 42% and lowering abandonment rate from 24% to 8%.",
					],
				},
				{
					id: 2,
					title: "Geolocation Analytics Platform",
					category: "Data Science",
					description: [
						"Developed a geospatial analytics platform processing 5M+ data points using GeoPandas and MongoDB, reducing query latency by 35%, enabling real-time location intelligence.",
						"Engineered an optimized database architecture, enhancing retrieval speeds by 40% and supporting high-volume geospatial queries for enterprise applications.",
						"Implemented clustering algorithms to identify geographic patterns, improving decision-making accuracy by 40% and uncovering actionable insights.",
						"Designed and deployed fraud detection analytics, visualizing anomalous geospatial behaviors and mitigating fraudulent activities by 25% through advanced geospatial modeling.",
						"Built an interactive visualization layer using Folium & Google Maps API, delivering real-time geospatial intelligence with sub-500ms latency, enhancing user experience and operational efficiency.",
					],
				},
				{
					id: 3,
					title: "ILabs Page",
					category: "Innovation Labs",
					description: [
						"Designed and developed responsive ILabs showcase platform using Next.js, improving stakeholder engagement with company innovation projects by 45%",
						"Implemented server-side rendering and image optimization techniques, decreasing page load times by 65% and increasing average session duration by 3.5 minutes",
						"Engineered dynamic project portfolio system displaying both current and past innovations, providing stakeholders with an instant access",
						"Created intuitive filtering and search functionality, enabling stakeholders to locate relevant innovation projects 4x faster than previous system",
						"Built responsive mobile-first design ensuring seamless experience across devices, resulting in 52% increase in mobile stakeholder engagement",
						"Implemented automated deployment pipeline, reducing release cycles from bi-monthly to weekly while maintaining 99.9% uptime",
					],
				},
				{
					id: 4,
					title: "HCR Platform",
					category: "ICICI Hackathon",
					description: [
						"Designed a full-stack web application (React & Django) in a tight 1-month timeframe, enhancing financial operations and internal efficiency.",
						"Led a 4-member development team, completing ideation and deployment 50% faster than industry benchmarks.",
						"Built authentication and role-based access controls, enhancing data security and regulatory compliance.",
						"Optimized API queries, reducing data retrieval times by 30%.",
					],
				},
			],
		},
		{
			role: "Frontend Developer",
			company: "Innovation Labs, ICICI Bank",
			period: "2022 — 2023",
			projects: [
				{
					id: 1,
					title: "Capital Market Onboarding Platform",
					category: "Web Development",
					description: [
						"Engineered a low-code, configurable onboarding platform, enabling 20+ teams to onboard 1M+ clients securely.",
						"Designed and implemented dynamic onboarding workflows, reducing onboarding time by 50%.",
						"Developed a reusable form component library, improving UI consistency and cutting development effort by 40%.",
						"Automated deployment processes using CI/CD pipelines, reducing production deployment failures by 30%.",
						"Integrated API validation and authentication mechanisms, ensuring 100% compliance with financial security regulations.",
					],
				},
				{
					id: 2,
					title: "State Machine as a Service",
					category: "Full Stack Development",
					description: [
						"Developed an interactive flow-diagram-based backend state machine, allowing financial teams to create and manage complex transaction workflows.",
						"Built a visual state management system for financial transactions, reducing manual configuration errors by 60%.",
						"Optimized backend state transitions, improving transaction processing speed by 35%.",
						"Deployed scalable AWS infrastructure, reducing server downtime by 20%.",
					],
				},
				{
					id: 3,
					title: "Foreign Exchange Trading Platform",
					category: "Web Development",
					description: [
						"Led the development of an internal trading dashboard, integrating FTXP APIs to support secure, real-time foreign exchange transactions.",
						"Developed a high-performance trading interface, increasing transaction efficiency by 25%.",
						"Implemented real-time exchange rate updates, reducing latency by 40%.",
						"Integrated end-to-end testing frameworks, achieving 90%+ test coverage and ensuring compliance with financial standards.",
					],
				},
			],
		},
	];

	return (
		<div className="container mx-auto px-4 space-y-12">
			<div>
				<h1 className="text-3xl font-bold">Resume</h1>
				<hr className="h-1 bg-amber-200 rounded-full w-10"></hr>
			</div>
			{/* Education */}
			<section className="relative mx-auto text-white">
				{/* Title Section */}
				<div className="mb-6 flex items-center gap-4">
					<IconBox icon={Book} iconSize={20} iconColor="primary">
						<div className="absolute left-1/2 top-full h-full w-[1px] -translate-x-1/2 bg-neutral-700"></div>
					</IconBox>
					<h2 className="text-2xl font-bold">Education</h2>
				</div>

				{/* Timeline List */}
				<ol className="relative ml-6">
					{educations.map((edx, index) => (
						<li key={index} className="relative pl-10 pb-6">
							{/* Timeline Vertical Line */}
							{index !== educations.length - 1 && (
								<div
									className="absolute left-[0px] top-[-25px] w-[1px] bg-neutral-700"
									style={{ height: "calc(100% + 40px)" }}
								></div>
							)}

							{/* Timeline Dot */}
							<div className="absolute top-2 -left-[4px] h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(52,52,52,1)]"></div>

							{/* Timeline Content */}
							<h4 className="text-lg font-bold">{edx.school}</h4>
							<span className="block text-sm font-semibold text-primary">
								{edx.period}
							</span>
							<p className="mt-2  text-neutral-400">{edx.description}</p>
						</li>
					))}
				</ol>
			</section>

			{/* Experience */}
			<section className="relative mx-auto text-white">
				{/* Title Section */}
				<div className="mb-6 flex items-center gap-4">
					<IconBox icon={Book} iconSize={20} iconColor="primary">
						<div className="absolute left-1/2 top-full h-full w-[1px] -translate-x-1/2 bg-neutral-700"></div>
					</IconBox>
					<h2 className="text-2xl font-bold">Experiences</h2>
				</div>

				{/* Timeline List */}
				<ol className="relative ml-6">
					{experiences.map((exp, index) => (
						<li key={index} className="relative pl-10 pb-6">
							{/* Timeline Vertical Line */}
							{index !== experiences.length - 1 && (
								<div
									className="absolute left-[0px] top-[-25px] w-[1px] bg-neutral-700"
									style={{ height: "calc(100% + 40px)" }}
								></div>
							)}

							{/* Timeline Dot */}
							<div className="absolute top-2 -left-[4px] h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(52,52,52,1)]"></div>

							{/* Timeline Content */}
							<h4 className="flex gap-1 items-center text-lg font-bold">
								<p>{exp.role}</p>
								<Minus />
								<p className="font-medium text-neutral-300">{exp.company}</p>
							</h4>
							<span className="block text-sm font-semibold text-primary">
								{exp.period}
							</span>
							{exp.projects.map((project, index) => (
								<div key={`${project.id}-` + index}>
									<div className="flex gap-1 items-center mt-2 text-base font-semibold text-blue-200">
										<span>{project.title}</span>
										<Minus size={16} />
										<span className="font-normal">{project.category}</span>
									</div>
									{project.description.map((desc, index) => (
										<div key={`${desc}-` + index} className="relative mt-2">
											<Dot
												size={32}
												className="absolute left-[-10px] top-[-3px]"
											/>
											<p className="relative left-5 text-neutral-400">{desc}</p>
										</div>
									))}
								</div>
							))}
						</li>
					))}
				</ol>
			</section>
		</div>
	);
}
