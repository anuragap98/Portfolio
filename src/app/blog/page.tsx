import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import AnimatedCard from "@/components/animated-card";
import blog1 from "../assets/project-1.jpg";
import blog2 from "../assets/project-2.png";
import blog3 from "../assets/project-3.jpg";
import { Glow, GlowArea } from "@/components/glow";

const posts = [
	{
		title: "Design Conferences in 2022",
		category: "Design",
		date: "Feb 23, 2022",
		image: blog1,
		excerpt:
			"Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.",
	},
	{
		title: "Best Fonts Every Designer",
		category: "Design",
		date: "Feb 23, 2022",
		image: blog2,
		excerpt:
			"Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.",
	},
	{
		title: "Design Digest #80",
		category: "Design",
		date: "Feb 23, 2022",
		image: blog3,
		excerpt:
			"Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem.",
	},
];

export default function Blog() {
	return (
		<div className="container mx-auto px-4 space-y-8">
			<div>
				<h1 className="text-3xl font-bold">Blog</h1>
				<hr className="h-1 bg-amber-200 rounded-full w-10"></hr>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
				{posts.map((post, index) => (
					<GlowArea key={index} className="h-full">
						<Glow
							color="white"
							className="rounded-xl h-full flex flex-col flex-grow"
						>
							<AnimatedCard
								index={index}
								className="bg-neutral-800/50 border-neutral-700 overflow-hidden rounded-xl h-full flex flex-col"
							>
								<CardContent className="p-0 m-0 h-full flex flex-col">
									<Image
										src={post.image || "/placeholder.svg"}
										alt={post.title}
										width={400}
										height={300}
										className="w-full aspect-video object-cover"
									/>
									<div className="p-6 flex flex-col flex-grow">
										<div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
											<span>{post.category}</span>
											<span>•</span>
											<span>{post.date}</span>
										</div>
										<h3 className="text-xl font-bold mb-2">{post.title}</h3>
										<p className="text-gray-400 flex-grow">{post.excerpt}</p>
									</div>
								</CardContent>
							</AnimatedCard>
						</Glow>
					</GlowArea>
				))}
			</div>
		</div>
	);
}
