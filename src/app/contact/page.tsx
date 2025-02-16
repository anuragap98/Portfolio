import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
	return (
		<div className="space-y-8">
			<h1 className="text-4xl font-bold mb-8">Contact</h1>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<Card className="bg-gray-800/50 border-gray-700">
					<CardContent className="p-6">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
							width="100%"
							height="300"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							className="rounded-lg"
						/>
					</CardContent>
				</Card>

				<Card className="bg-gray-800/50 border-gray-700">
					<CardContent className="p-6">
						<h2 className="text-2xl font-bold mb-6">Contact Form</h2>
						<form className="space-y-6">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input
									type="text"
									placeholder="Full name"
									className="bg-gray-900/50 border-gray-700"
								/>
								<Input
									type="email"
									placeholder="Email address"
									className="bg-gray-900/50 border-gray-700"
								/>
							</div>
							<Textarea
								placeholder="Your Message"
								className="bg-gray-900/50 border-gray-700 min-h-[150px]"
							/>
							<Button className="w-full md:w-auto bg-yellow-500 text-gray-900 hover:bg-yellow-600">
								Send Message
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
