"use client";

import { useEffect } from "react";
import Navbar from "./navbar";
import { useThemeStore } from "@/lib/theme.store";
export default function NavbarWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const hydrate = useThemeStore((state) => state.hydrate);

	useEffect(() => {
		hydrate();
	}, [hydrate]);

	return (
		<>
			<Navbar />
			<div className="my-4 px-6 scroll-sm">{children}</div>
		</>
	);
}
