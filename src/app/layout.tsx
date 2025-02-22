"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import Navbar from "@/components/navbar";
import { Toaster } from "sonner";

const interSans = Inter({
	subsets: ["latin"],
	variable: "--font-inter-sans",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		const root = window.document.documentElement;
		if (isDarkMode) {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
	}, [isDarkMode]);

	return (
		<html lang="en">
			<body className={`${interSans.variable} antialiased`}>
				<SidebarProvider>
					<AppSidebar />
					<main className="relative flex-1 flex flex-col h-screen px-4 pt-10 pb-4">
						<div className="overflow-y-scroll bg-sidebar rounded-2xl h-full">
							<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
							<div className="my-4 px-6 scroll-sm">{children}</div>
						</div>
					</main>
				</SidebarProvider>
				<Toaster />
			</body>
		</html>
	);
}
