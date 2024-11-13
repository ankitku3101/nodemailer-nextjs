import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user,
                pass,
            },
        });

        const mailOptions = {
            from: user, 
            to: "ankit.file2002@gmail.com",
            subject: `${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            msg: "Message sent successfully",
            status: 200,
        });
    } catch (error) {
        console.error("Error sending email:", error); 
        return new NextResponse("Failed to send message.", { status: 500 });
    }
}
