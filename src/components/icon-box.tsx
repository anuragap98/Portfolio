import { LucideIcon } from "lucide-react";
import React from "react";

interface IconBoxProps {
	icon: LucideIcon;
	iconSize?: number;
	iconColor?: string;
	customColor?: string;
	children?: React.ReactNode;
}

const IconBox = ({
	icon: Icon,
	iconSize,
	iconColor,
	customColor,
	children,
}: IconBoxProps) => {
	return (
		<div
			className={`relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-700 via-neutral-700/0 to-transparent text-${iconColor} shadow`}
		>
			<div className="absolute inset-0 m-[1px] rounded-xl bg-neutral-800/50"></div>
			<Icon size={iconSize} color={customColor} className="relative" />
			{children}
		</div>
	);
};

export default IconBox;
