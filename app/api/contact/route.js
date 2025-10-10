import nodemailer from "nodemailer";

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "abhayachimneyservices@gmail.com",
            pass: "abhaya@#&123",
        },
    });

    try {
        await transporter.sendMail({
            from: email,
            to: "abhayachimneyservices@gmail.com",
            subject: subject || `Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(
            JSON.stringify({ success: false, error: error.message }),
            { status: 500 }
        );
    }
}
