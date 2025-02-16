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

const projects = [
	{
		title: "Finance",
		category: "Web development",
		image: project1,
	},
	{
		title: "Orizon",
		category: "Web development",
		image: project2,
	},
	{
		title: "Fundo",
		category: "Web design",
		image: project3,
	},
	{
		title: "Brawlhalla",
		category: "Applications",
		image: project4,
	},
	{
		title: "DSM.",
		category: "Web design",
		image: project5,
	},
	{
		title: "MetaSpark",
		category: "Web design",
		image: project6,
	},
];

export default function Portfolio() {
	const [activeFilter, setActiveFilter] = useState("All");
	const filters = ["All", "Web design", "Applications", "Web development"];

	const filteredProjects = projects.filter((project) =>
		activeFilter === "All" ? true : project.category === activeFilter
	);

	return (
		<div className="space-y-8">
			<h1 className="text-4xl font-bold mb-8">Portfolio</h1>

			<div className="flex flex-wrap gap-4 mb-8">
				{filters.map((filter) => (
					<button
						key={filter}
						onClick={() => setActiveFilter(filter)}
						className={`px-4 py-2 rounded-full transition-colors ${
							activeFilter === filter
								? "bg-yellow-500 text-gray-900"
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
								<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
									<div className="text-center">
										<h3 className="text-xl font-bold">{project.title}</h3>
										<p className="text-gray-400">{project.category}</p>
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
