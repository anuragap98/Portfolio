"use client";

import { useState } from "react";
import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";
import AnimatedCard from "@/components/animated-card";
import { Eye, Figma, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
	{
		title: "Wingman Store",
		category: "Web Development",
		image: project2,
		website: "https://wingman-store-one.vercel.app/",
		url: "https://github.com/anuragap98/Wingman-Store",
	},
	{
		title: "Orizon",
		category: "Web Development",
		image: project1,
	},
	{
		title: "ILabs Page",
		category: "Web Design",
		image: project3,
		url: "https://www.figma.com/design/JmH3PQ75qMQT9zjrld1ALh/ILabs-Page?node-id=265-1009&t=s01jta31mFzYqnp8-1",
	},
	{
		title: "NFT Rewards 360",
		category: "Web Design",
		image: project4,
		url: "https://www.figma.com/design/PIFltBXiue1xtzPRumoZle/NFT-UI?node-id=0-1&t=8RWwTlFIeI3U0Rss-1",
	},
	{
		title: "Hiring Platform",
		category: "Web Design",
		image: project5,
		url: "https://www.figma.com/design/MxMcRb4nwwEa4wa4Rvj6AF/Hiring-Platform?node-id=267-2&t=pOqdLpHi4Y4xnN8h-1",
	},
	{
		title: "FXTP Demo",
		category: "Web Design",
		image: project6,
		url: "https://www.figma.com/design/IbCEzF7bEfdOX2KBmqGK2r/FXTP-Demo?node-id=0-1&t=sYsbKKqikf8SAF94-1",
	},
	{
		title: "AI Email Classifier",
		category: "Applications",
		image: project4,
		url: "https://github.com/anuragap98/Ai-Email-Classifier",
	},
];

export default function Portfolio() {
	const [activeFilter, setActiveFilter] = useState("All");
	const filters = ["All", "Web Design", "Applications", "Web Development"];

	const filteredProjects = projects.filter((project) =>
		activeFilter === "All" ? true : project.category === activeFilter
	);

	return (
		<div className="container mx-auto px-2 space-y-8">
			<div>
				<h1 className="text-3xl font-bold">Portfolio</h1>
				<hr className="h-1 bg-indigo-800 dark:bg-amber-200 rounded-full w-10"></hr>
			</div>
			<div className="flex flex-wrap gap-4 mb-8">
				{filters.map((filter) => (
					<button
						key={filter}
						onClick={() => setActiveFilter(filter)}
						className={`min-w-20 text-sm px-4 py-2 rounded-full transition-colors ${
							activeFilter === filter
								? "bg-indigo-800 text-white dark:bg-amber-200 dark:text-gray-900"
								: "text-indigo-800 hover:text-white dark:text-gray-400 dark:hover:text-gray-100"
						}`}
					>
						{filter}
					</button>
				))}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{filteredProjects.map((project, index) => (
					<AnimatedCard
						key={index}
						index={index}
						className="bg-indigo-200/50 dark:bg-neutral-800/50 border-indigo-200 dark:border-neutral-700 overflow-hidden group"
					>
						<CardContent className="p-0">
							<div className="relative">
								<Image
									src={project.image || "/placeholder.svg"}
									alt={project.title}
									width={400}
									height={300}
									className="w-full aspect-video object-cover"
								/>
								<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<div className="flex flex-col gap-2 text-center">
										<h3 className="text-xl font-bold">{project.title}</h3>
										<p className="text-gray-400">{project.category}</p>
										<p
											className={cn("flex place-content-center text-gray-400", {
												hidden: !project.url,
											})}
										>
											{project.category === "Web Design" ? (
												<Figma
													className="cursor-pointer ml-2"
													onClick={() => window.open(project.url, "_blank")}
												/>
											) : (
												<>
													<Eye
														className={`${
															project.website ? "cursor-pointer" : "hidden"
														} ml-2`}
														onClick={() =>
															window.open(project.website, "_blank")
														}
													/>
													<Github
														className={`${
															project.url ? "cursor-pointer" : "hidden"
														} ml-2`}
														onClick={() => window.open(project.url, "_blank")}
													/>
												</>
											)}
										</p>
									</div>
								</div>
							</div>
						</CardContent>
					</AnimatedCard>
				))}
			</div>
		</div>
	);
}
