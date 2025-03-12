"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { useThemeStore } from "@/lib/theme.store";
export default function Navbar() {
	const { theme, setTheme } = useThemeStore();
	const pathname = usePathname();
	const links = [
		{ href: "/", label: "About" },
		{ href: "/resume", label: "Resume" },
		{ href: "/portfolio", label: "Portfolio" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "Contact" },
	];

	return (
		<nav
			className={`sticky top-0 z-10 w-full flex justify-between items-center px-4 py-4 transition-all duration-300 
			backdrop-filter backdrop-blur-xl shadow-[0px_4px_30px_rgba(96,96,97,0.1)]`}
		>
			{/* Navigation */}
			<ul className="flex space-x-4">
				{links.map((link) => (
					<li key={link.href}>
						<Link
							href={link.href}
							className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
								pathname === link.href
									? "bg-primary text-indigo-100 dark:text-neutral-800"
									: "text-indigo-500 dark:text-neutral-400 hover:text-indigo-800 dark:hover:text-neutral-100"
							}`}
						>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
			{/* Dark mode */}
			<Button
				variant="ghost"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
				className="p-2"
			>
				{theme === "dark" ? (
					<Sun size={24} className=" text-yellow-500" />
				) : (
					<Moon size={24} />
				)}
			</Button>
		</nav>
	);
}
