import { Resend } from "resend"

export const runtime = "nodejs"

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY")
      return Response.json(
        { success: false, error: "Server configuration error." },
        { status: 500 }
      )
    }

    const body = await req.json()
    const name = body?.name?.trim()
    const email = body?.email?.trim()
    const message = body?.message?.trim()

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Please complete all fields." },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(email)) {
      return Response.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      )
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

    const ownerEmail = "cesarpumayallaf@gmail.com"
    const senderEmail = "cesarpumayalla@ninan-studio.com"

    // 1) Email para ti
    const ownerResult = await resend.emails.send({
      from: `Ninan Studio <${senderEmail}>`,
      to: ownerEmail,
      replyTo: email,
      subject: `Portfolio inquiry — ${name}`,
      text: `New message from ninan-studio.com

Name: ${name}
Email: ${email}

Message:
${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 16px;">New portfolio inquiry</h2>
          <p style="margin: 0 0 8px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
          <div style="margin-top: 20px;">
            <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
            <p style="margin: 0;">${safeMessage}</p>
          </div>
        </div>
      `,
    })

    if (ownerResult.error) {
      console.error("Owner email error:", ownerResult.error)
      return Response.json(
        { success: false, error: "Could not send message." },
        { status: 500 }
      )
    }

    // 2) Auto-reply para el usuario
    const autoReplyResult = await resend.emails.send({
      from: `Ninan Studio <${senderEmail}>`,
      to: email,
      subject: "Thanks for reaching out — Ninan Studio",
      text: `Hi ${name},

Thank you for reaching out.

I’ve received your message and I’ll get back to you by email as soon as possible.

Best,
Cesar Pumayalla
Ninan Studio`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7; color: #111;">
          <p>Hi ${safeName},</p>

          <p>Thank you for reaching out.</p>

          <p>
            I’ve received your message and I’ll get back to you by email as soon as possible.
          </p>

          <p style="margin-top: 24px;">
            Best,<br />
            Cesar Pumayalla<br />
            Ninan Studio
          </p>
        </div>
      `,
    })

    if (autoReplyResult.error) {
      console.error("Auto-reply error:", autoReplyResult.error)
    }

    return Response.json({
      success: true,
      message: "Message sent successfully.",
    })
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error)

    return Response.json(
      {
        success: false,
        error: error?.message || "Something went wrong.",
      },
      { status: 500 }
    )
  }
}