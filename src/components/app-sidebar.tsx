import React from "react";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarSeparator,
} from "./ui/sidebar";
import {
	Calendar,
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import profile from "../app/assets/my-avatar.png";

export default function AppSidebar() {
	const contactInfo = [
		{
			icon: Mail,
			label: "email",
			value: "anuragporteiitkgp@gmail.com",
			link: "mailto:anuragporteiitkgp@gmail.com",
		},
		{
			icon: Phone,
			label: "phone",
			value: "+91-9827982727",
			link: "#",
		},
		{
			icon: Calendar,
			label: "birthday",
			value: "May 04, 1998",
			link: "#",
		},
		{
			icon: MapPin,
			label: "location",
			value: "Mumbai, India",
			link: "#",
		},
	];

	const socialLinks = [
		{ icon: Facebook, href: "#" },
		{ icon: Twitter, href: "#" },
		{ icon: Instagram, href: "#" },
	];
	return (
		<Sidebar variant="floating" className="py-10">
			<SidebarHeader>
				<div className="flex flex-col items-center">
					<Image
						src={profile}
						width={150}
						height={150}
						alt="Profile"
						className="bg-neutral-700 rounded-[20px] mb-4"
					/>
					<h1 className="text-2xl font-bold mb-2">Anurag Porte</h1>
					<p className="bg-neutral-700/60 px-4 py-2 rounded-xl text-sm text-gray-200 mb-4">
						Software Developer
					</p>
				</div>
			</SidebarHeader>
			<SidebarSeparator className="mx-auto mb-6" />
			<SidebarContent>
				<motion.aside
					initial={{ x: -300, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<div className="flex flex-col space-y-4">
						{contactInfo.map((item, index) => (
							<div
								key={index}
								className="flex justify-start items-center gap-3 overflow-hidden"
							>
								<div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md bg-gradient-to-br from-neutral-700 via-neutral-700/0 to-transparent">
									<item.icon size={18} color="hsl(45, 100%, 72%)" />
								</div>
								<div className="flex flex-col overflow-hidden">
									<div className="text-neutral-400 uppercase text-xs">
										{item.label}
									</div>
									<a
										href={item.link}
										className="text-neutral-100 text-sm whitespace-nowrap text-ellipsis overflow-hidden hover:text-yellow-500 transition-colors"
									>
										{item.value}
									</a>
								</div>
							</div>
						))}
					</div>
				</motion.aside>
			</SidebarContent>
			<SidebarSeparator className="mx-auto mb-2" />
			<SidebarFooter>
				<div className="flex gap-2 mb-4 justify-center space-x-4">
					{socialLinks.map((link, index) => (
						<a
							key={index}
							href={link.href}
							className="p-2 text-neutral-400 hover:text-neutral-100"
						>
							<link.icon size={20} />
						</a>
					))}
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
