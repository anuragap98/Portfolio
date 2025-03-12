import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import { Toaster } from "sonner";
import NavbarWrapper from "@/components/navbar-wrapper";

const interSans = Inter({
	subsets: ["latin"],
	variable: "--font-inter-sans",
});

export const metadata = {
	title: "Anurag's Portfolio",
	description: "Anurag's personal portfolio application",
	icons: {
		icon: "./favicon.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${interSans.variable} antialiased`}>
				<SidebarProvider>
					<AppSidebar />
					<main className="relative flex-1 flex flex-col h-screen px-4 py-10">
						<div className="overflow-y-scroll bg-sidebar dark:bg-sidebar rounded-2xl h-full">
							<NavbarWrapper>{children}</NavbarWrapper>
						</div>
					</main>
				</SidebarProvider>
				<Toaster />
			</body>
		</html>
	);
}
