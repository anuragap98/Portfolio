import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

export async function POST(req: NextRequest) {
	try {
		const { name, email, message } = await req.json();

		const formatName = name
			.split(" ")
			.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");

		// Example: Send email notification (You can integrate Twilio, Firebase, or other services)
		const msg = {
			to: process.env.RECIEVER_EMAIL as string, // Your email (who receives the messages)
			from: process.env.SENDGRID_VERIFIED_SENDER as string, // Must match a verified email/domain in SendGrid
			subject: `New Contact Form Submission from ${formatName}`,
			html: `
						<!DOCTYPE html>
						<html lang="en">
						<head>
							<meta charset="UTF-8">
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
							<title>New Contact Form Submission</title>
							<style>
								body {
									font-family: Arial, sans-serif;
									background-color: #f4f4f4;
									margin: 0;
									padding: 20px;
								}
								.container {
									max-width: 600px;
									margin: 0 auto;
									background: #ffffff;
									padding: 20px;
									border-radius: 8px;
									box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
								}
								h2 {
									color: #333;
									margin-bottom: 10px;
								}
								.details {
									background: #f9f9f9;
									padding: 10px;
									border-left: 4px solid #007BFF;
									margin-bottom: 20px;
								}
								.details p {
									margin: 5px 0;
								}
								.footer {
									text-align: center;
									margin-top: 20px;
									font-size: 12px;
									color: #777;
								}
							</style>
						</head>
						<body>
							<div class="container">
								<h2>📩 New Contact Form Submission</h2>
								<div class="details">
									<p><strong>Name:</strong> ${name}</p>
									<p><strong>Email:</strong> ${email}</p>
								</div>
								<p><strong>Message:</strong></p>
								<p>${message}</p>

								<div class="footer">
									<p>💡 This is an automated email. Please do not reply.</p>
								</div>
							</div>
						</body>
						</html>
				`,
		};

		await sgMail.send(msg);

		return NextResponse.json({
			success: true,
			message: "Your message has been sent successfully!",
		});
	} catch (error) {
		console.error("Error sending notification:", error);
		return NextResponse.json({
			success: false,
			error: (error as Error).message || "Failed to notification via email",
		});
	}
}
