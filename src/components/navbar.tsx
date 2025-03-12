"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

interface NavbarProps {
	isDarkMode: boolean;
	setIsDarkMode: (value: boolean) => void;
}

export default function Navbar({ isDarkMode, setIsDarkMode }: NavbarProps) {
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
				onClick={() => setIsDarkMode(!isDarkMode)}
				className="p-2"
			>
				{isDarkMode ? (
					<Sun size={24} className=" text-yellow-500" />
				) : (
					<Moon size={24} />
				)}
			</Button>
		</nav>
	);
}
