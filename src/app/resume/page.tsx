import IconBox from "@/components/icon-box";
import { Book } from "lucide-react";

export default function Resume() {
	const education = [
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

	const experience = [
		{
			role: "Software Developer",
			period: "2022 — Present",
			description:
				"Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
		},
		{
			role: "Art Director",
			period: "2013 — 2015",
			description:
				"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
		},
		{
			role: "Web Designer",
			period: "2010 — 2013",
			description:
				"Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
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
					{education.map((item, index) => (
						<li key={index} className="relative pl-10 pb-6">
							{/* Timeline Vertical Line */}
							{index !== education.length - 1 && (
								<div
									className="absolute left-[0px] top-[-25px] w-[1px] bg-neutral-700"
									style={{ height: "calc(100% + 40px)" }}
								></div>
							)}

							{/* Timeline Dot */}
							<div className="absolute top-2 -left-[4px] h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(52,52,52,1)]"></div>

							{/* Timeline Content */}
							<h4 className="text-lg font-bold">{item.school}</h4>
							<span className="block text-sm font-semibold text-primary">
								{item.period}
							</span>
							<p className="mt-2  text-neutral-400">{item.description}</p>
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
					{experience.map((item, index) => (
						<li key={index} className="relative pl-10 pb-6">
							{/* Timeline Vertical Line */}
							{index !== experience.length - 1 && (
								<div
									className="absolute left-[0px] top-[-25px] w-[1px] bg-neutral-700"
									style={{ height: "calc(100% + 40px)" }}
								></div>
							)}

							{/* Timeline Dot */}
							<div className="absolute top-2 -left-[4px] h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(52,52,52,1)]"></div>

							{/* Timeline Content */}
							<h4 className="text-lg font-bold">{item.role}</h4>
							<span className="block text-sm font-semibold text-primary">
								{item.period}
							</span>
							<p className="mt-2  text-neutral-400">{item.description}</p>
						</li>
					))}
				</ol>
			</section>
		</div>
	);
}
