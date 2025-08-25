import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

async function validateEmail(email: string): Promise<{ isValid: boolean; error?: string }> {
    try {
        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return { isValid: false, error: "Invalid email format" }
        }

        // Comprehensive list of disposable email domains
        const disposableDomains = [
            "10minutemail.com",
            "tempmail.org",
            "guerrillamail.com",
            "mailinator.com",
            "yopmail.com",
            "temp-mail.org",
            "throwaway.email",
            "getnada.com",
            "maildrop.cc",
            "sharklasers.com",
            "guerrillamail.info",
            "guerrillamail.biz",
            "guerrillamail.de",
            "grr.la",
            "guerrillamail.net",
            "guerrillamail.org",
            "guerrillamailblock.com",
            "pokemail.net",
            "spam4.me",
            "bccto.me",
            "chacuo.net",
            "dispostable.com",
            "fake-mail.ml",
            "fakeinbox.com",
            "incognitomail.org",
            "mytrashmail.com",
            "no-spam.ws",
            "noclickemail.com",
            "trashmail.at",
            "trashmail.com",
            "trashmail.io",
            "trashmail.me",
            "trashmail.net",
            "wegwerfmail.de",
            "wegwerfmail.net",
            "wegwerfmail.org",
        ]

        const domain = email.split("@")[1]?.toLowerCase()
        if (!domain) {
            return { isValid: false, error: "Invalid email format" }
        }

        if (disposableDomains.includes(domain)) {
            return {
                isValid: false,
                error: "Disposable email addresses are not allowed. Please use a permanent email address.",
            }
        }

        return { isValid: true }
    } catch (error) {
        return { isValid: false, error: "Email validation failed" }
    }
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, message } = body

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    error: "All fields are required",
                    details: "Name, email, and message are mandatory fields",
                },
                { status: 400 },
            )
        }

        // Validate field lengths
        if (name.length > 100 || email.length > 254 || message.length > 2000) {
            return NextResponse.json(
                {
                    error: "Field length exceeded",
                    details: "Name (max 100), email (max 254), or message (max 2000) is too long",
                },
                { status: 400 },
            )
        }

        // Sanitize inputs
        const sanitizedName = name.trim()
        const sanitizedEmail = email.trim().toLowerCase()
        const sanitizedMessage = message.trim()

        // Validate email
        const emailValidation = await validateEmail(sanitizedEmail)
        if (!emailValidation.isValid) {
            return NextResponse.json(
                {
                    error: emailValidation.error || "Invalid email address",
                },
                { status: 400 },
            )
        }

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json(
                {
                    error: "Email service not configured",
                },
                { status: 500 },
            )
        }

        // Send email using Resend
        try {
            await resend.emails.send({
                from: "Portfolio Contact <onboarding@resend.dev>",
                to: ["muhammadaffansheikh21@gmail.com"],
                subject: `Portfolio Contact from ${sanitizedName}`,
                html: "...",
                replyTo: sanitizedEmail,
            });
        } catch (err) {
            console.error("Resend error:", err);
            return NextResponse.json(
                { error: "Failed to send email. Please try again later." },
                { status: 500 }
            );
        }


        return NextResponse.json(
            {
                message: "Message sent successfully! Thank you for reaching out.",
                success: true,
            },
            { status: 200 },
        )
    } catch (error) {
        return NextResponse.json(
            {
                error: "Internal server error. Please try again later.",
            },
            { status: 500 },
        )
    }
}
