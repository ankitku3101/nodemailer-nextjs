import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

const user = process.env.EMAIL
const pass = process.env.PASSWORD

export async function POST(request: Request) {
    try {
        const {name, email, message} = await request.json();
        
        const transporter = nodemailer.createTransport({
            service: "",
            host: "",
            port: 465,
            secure: true,
            auth: {
                user,
                pass,
            }
        });

        const mailOptions = {
            from: "user",
            to: "testerguy3101@gmail.com",
            subject: "Testing Nodemailer",
            text: `Name: ${name}\nEmail: ${email}\n Message: ${message}`
        };

        await transporter.sendMail(mailOptions)

        return NextResponse.json({
            msg: "Message sent succesfully",
            status: 200,
        })

    } catch (error) {
        return new NextResponse("Failed to send message.", {status: 500})
    }
}



