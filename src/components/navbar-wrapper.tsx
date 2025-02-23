"use client";

import { useEffect, useState } from "react";
import Navbar from "./navbar";

export default function NavbarWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
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
		<>
			<Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
			<div className="my-4 px-6 scroll-sm">{children}</div>
		</>
	);
}
