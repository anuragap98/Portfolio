import { Code, Palette, Smartphone, Camera } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import AnimatedCard from "@/components/animated-card";

export default function About() {
	const services = [
		{
			icon: <Palette className="w-8 h-8 text-primary" />,
			title: "Web Design",
			description:
				"The most modern and high-quality design made at a professional level.",
		},
		{
			icon: <Code className="w-8 h-8 text-primary" />,
			title: "Web Development",
			description:
				"High-quality development of sites at the professional level.",
		},
		{
			icon: <Smartphone className="w-8 h-8 text-primary" />,
			title: "Mobile Apps",
			description:
				"Professional development of applications for iOS and Android.",
		},
		{
			icon: <Camera className="w-8 h-8 text-primary" />,
			title: "Photography",
			description:
				"I make high-quality photos of any category at a professional level.",
		},
	];

	return (
		<div className="space-y-12">
			{/* About Me */}
			<section>
				<h2 className="text-3xl font-bold">About Me</h2>
				<hr className="h-1 bg-indigo-800 dark:bg-amber-200 rounded-full w-10"></hr>
				<div className="space-y-4 text-neutral-700 dark:text-neutral-300 mt-8">
					<p>
						{`Hi, I'm Anurag, a passionate software developer with three years of experience in building innovative digital solutions. My expertise lies in web development, design, and crafting product strategies that drive meaningful user experiences..`}
					</p>
					<p>
						{`I thrive at the intersection of technology and creativity, constantly exploring new technologies to push the boundaries of what's possible. Whether it's designing intuitive user interfaces, optimizing backend performance, or strategizing product growth, I enjoy solving complex problems with elegant solutions.`}
					</p>
					<p>
						{`Innovation is at the core of my work — I love staying ahead of industry trends and leveraging cutting-edge tools to create impactful applications. My goal is to build seamless, user-centric products that not only meet business objectives but also enhance everyday digital experiences.`}
					</p>
					<p>{`Let’s connect and create something great together!`}</p>
				</div>
			</section>
			{/* Services */}
			<section>
				<h2 className="text-2xl font-bold mb-6">{`What I'm Doing`}</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
					{services.map((service, index) => (
						<AnimatedCard
							key={index}
							index={index}
							className="shadow-2xl border-indigo-100 dark:border-neutral-700/50 bg-gradient-to-br from-neutral-100 via-neutral-100/0 to-transparent dark:from-neutral-700 dark:via-neutral-700/0 dark:to-transparent"
						>
							<CardContent className="relative p-6">
								<div className="absolute -top-2 -left-4 flex justify-center items-center p-2 rounded-md w-10 h-10 bg-indigo-100 dark:bg-neutral-700">
									{service.icon}
								</div>
								<h3 className="text-xl font-bold mb-2">{service.title}</h3>
								<p className="text-neutral-600 dark:text-neutral-300 font-medium">
									{service.description}
								</p>
							</CardContent>
						</AnimatedCard>
					))}
				</div>
			</section>
		</div>
	);
}
