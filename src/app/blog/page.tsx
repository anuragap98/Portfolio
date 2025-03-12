import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import AnimatedCard from "@/components/animated-card";
import blog1 from "../assets/project-1.jpg";
import { Glow, GlowArea } from "@/components/glow";

const posts = [
	{
		title: "How to sign git commits and tags with GPG on macOS",
		category: "Technology",
		date: "Mar 12, 2025",
		image: blog1,
		url: "https://anuragap.medium.com/how-to-sign-git-commits-and-tags-with-gpg-macos-97dd7de73c8d",
		excerpt:
			"This article will guide you through the process of signing git commits and tags using GPG on macOS.",
	},
];

export default function Blog() {
	return (
		<div className="container mx-auto px-2 space-y-8">
			<div>
				<h1 className="text-3xl font-bold">Blog</h1>
				<hr className="h-1 bg-indigo-800 dark:bg-amber-200 rounded-full w-10"></hr>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
				{posts.map((post, index) => (
					<GlowArea key={index} className="h-full">
						<Glow
							color={"blue"}
							className="rounded-xl h-full flex flex-col flex-grow"
						>
							<AnimatedCard
								index={index}
								className="bg-indigo-100/50 dark:bg-neutral-800/50 border-indigo-200 dark:border-neutral-700 overflow-hidden rounded-xl h-full flex flex-col"
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
										<div className="flex items-center gap-2 text-sm dark:text-gray-400 text-gray-800 mb-3">
											<span>{post.category}</span>
											<span>•</span>
											<span>{post.date}</span>
										</div>
										<h3 className="text-xl font-bold mb-2">
											<a
												href={post.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-indigo-500 hover:text-indigo-600 dark:text-neutral-100 dark:hover:text-amber-200"
											>
												{post.title}
											</a>
										</h3>
										<p className="dark:text-gray-400 text-gray-600 flex-grow">
											{post.excerpt}
										</p>
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
