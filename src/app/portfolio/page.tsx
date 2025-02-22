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
import { Eye, Github } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
	{
		title: "Wingman Store",
		category: "Web Development",
		image: project1,
		url: "https://github.com/anuragap98/Wingman-Store",
	},
	{
		title: "Orizon",
		category: "Web Development",
		image: project2,
	},
	{
		title: "Fundo",
		category: "Web Design",
		image: project3,
	},
	{
		title: "AI Email Classifier",
		category: "Applications",
		image: project4,
		url: "https://github.com/anuragap98/Ai-Email-Classifier",
	},
	{
		title: "DSM.",
		category: "Web Design",
		image: project5,
	},
	{
		title: "MetaSpark",
		category: "Web Design",
		image: project6,
	},
];

export default function Portfolio() {
	const [activeFilter, setActiveFilter] = useState("All");
	const filters = ["All", "Web Design", "Applications", "Web Development"];

	const filteredProjects = projects.filter((project) =>
		activeFilter === "All" ? true : project.category === activeFilter
	);

	return (
		<div className="container mx-auto px-4 space-y-8">
			<div>
				<h1 className="text-3xl font-bold">Portfolio</h1>
				<hr className="h-1 bg-amber-200 rounded-full w-10"></hr>
			</div>
			<div className="flex flex-wrap gap-4 mb-8">
				{filters.map((filter) => (
					<button
						key={filter}
						onClick={() => setActiveFilter(filter)}
						className={`min-w-20 text-sm px-4 py-2 rounded-full transition-colors ${
							activeFilter === filter
								? "bg-amber-200 text-gray-900"
								: "text-gray-400 hover:text-white"
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
						className="bg-gray-800/50 border-gray-700 overflow-hidden group"
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
											<Eye className="cursor-pointer" />
											<Github
												className="cursor-pointer ml-2"
												onClick={() => window.open(project.url, "_blank")}
											/>
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
