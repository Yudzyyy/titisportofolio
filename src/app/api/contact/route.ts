import { NextResponse } from "next/server";

export interface ContactRequest {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function POST(request: Request) {
    try {
        const body: ContactRequest = await request.json();

        // Validation
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Missing required fields: name, email, and message are required",
                    timestamp: new Date().toISOString(),
                },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid email address",
                    timestamp: new Date().toISOString(),
                },
                { status: 400 }
            );
        }

        // In a real application, you would:
        // 1. Send email via service like SendGrid, Resend, or Nodemailer
        // 2. Store in database
        // 3. Send notification to admin
        // For now, we'll just log and return success

        console.log("Contact form submission:", {
            name: body.name,
            email: body.email,
            subject: body.subject || "No subject",
            message: body.message,
            timestamp: new Date().toISOString(),
        });

        // Simulate async processing
        await new Promise((resolve) => setTimeout(resolve, 500));

        return NextResponse.json(
            {
                success: true,
                message: "Thank you for your message! I'll get back to you soon.",
                timestamp: new Date().toISOString(),
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : "Unknown error",
                timestamp: new Date().toISOString(),
            },
            { status: 500 }
        );
    }
}
