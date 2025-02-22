"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const resetForm = () => {
		setFormData({
			name: "",
			email: "",
			message: "",
		});
	};

	const sendNotification = async (
		name: string,
		email: string,
		message: string
	) => {
		try {
			const response = await fetch("/api/notify", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name, email, message }),
			});

			if (!response.ok) {
				throw new Error("Failed to send notification");
			}

			const data = await response.json();

			toast.success("Message sent", {
				icon: "✅",
				description: data.message,
				duration: 3000,
			});
		} catch (error) {
			console.error("Notification error:", error);
			toast.error("Error", {
				icon: "❌",
				description: (error as Error).message || "Something went wrong",
				duration: 3000,
			});
		}
	};

	const handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();
		setLoading(true);

		const name = formData["name"] as string;
		const email = formData["email"] as string;
		const message = formData["message"] as string;

		if (!name || !email || !message) {
			toast.error("Error", {
				icon: "❌",
				description: "Please fill in all the fields",
				duration: 3000,
			});
			setLoading(false);
			return;
		}

		try {
			await sendNotification(name, email, message);
			resetForm();
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container mx-auto px-4 space-y-8">
			<div>
				<h1 className="text-3xl font-bold">Contact</h1>
				<hr className="h-1 bg-amber-200 rounded-full w-10"></hr>
			</div>
			<div className="grid grid-cols-1 gap-8">
				<Card>
					<CardContent className="p-0">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d285140.37342901854!2d72.81440588990273!3d19.10897149019543!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1740143503615!5m2!1sen!2sin"
							width="100%"
							height="350"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-lg"
						></iframe>
					</CardContent>
				</Card>
				<Card className="bg-neutral-800 border-neutral-700/50">
					<CardContent className="p-6">
						<h2 className="text-xl font-bold mb-6">Message Me</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input
									type="text"
									name="name"
									placeholder="Full name"
									className="bg-neutral-900/50 border-neutral-700"
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
								/>
								<Input
									type="email"
									name="email"
									placeholder="Email address"
									className="bg-neutral-900/50 border-neutral-700"
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
								/>
							</div>
							<Textarea
								name="message"
								placeholder="Your Message"
								className="bg-neutral-900/50 border-neutral-700 min-h-[100px]"
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
							/>
							<Button
								type="submit"
								className="w-full md:w-auto bg-amber-200 text-gray-900 hover:bg-amber-300"
								disabled={loading}
							>
								{loading ? "Sending..." : "Send Message"}
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
