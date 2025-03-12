"use client";

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
				<div className="flex flex-col items-center gap-2">
					<div className="relative w-[150px] h-[150px] overflow-hidden rounded-[20px] dark:bg-neutral-700  mb-2">
						<Image
							src={profile}
							alt="Profile"
							fill={true}
							security="restricted"
							sizes="100%"
							priority
							className="object-cover"
						/>
					</div>
					<h1 className="text-2xl font-bold mb-2">Anurag Porte</h1>
					<p className="bg-[#FFF2F2]/60 dark:bg-neutral-700/60 px-4 py-2 rounded-xl text-sm text-neutral-600  dark:text-gray-200 mb-4">
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
								<div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-neutral-200 via-neutral-100/0 to-transparent dark:from-neutral-700 dark:via-neutral-700/0 dark:to-transparent">
									<item.icon
										size={18}
										className="text-indigo-700 dark:text-primary"
									/>
								</div>
								<div className="flex flex-col overflow-hidden">
									<div className="text-indigo-600 dark:text-neutral-400 uppercase text-xs">
										{item.label}
									</div>
									<a
										href={item.link}
										className="text-neutral-600 dark:text-neutral-100 text-sm whitespace-nowrap text-ellipsis overflow-hidden hover:text-indigo-800 dark:hover:text-yellow-500 transition-colors"
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
							className="p-2 text-indigo-400 hover:text-indigo-800 dark:text-neutral-400 dark:hover:text-yellow-500"
						>
							<link.icon size={20} />
						</a>
					))}
				</div>
			</SidebarFooter>
		</Sidebar>
	);
}
