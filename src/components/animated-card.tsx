"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface AnimatedCardProps {
	index: number;
	children: React.ReactNode;
	className?: string;
}

export default function AnimatedCard({
	children,
	className,
	index,
	...props
}: AnimatedCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="h-full"
		>
			<Card className={className} {...props}>
				{children}
			</Card>
		</motion.div>
	);
}
