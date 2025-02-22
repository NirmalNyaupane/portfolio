"use server";

import sgMail from "@sendgrid/mail";

// Set your SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
const senderMail = process.env.SENDGRID_SENDING_MAIL as string;
const receiverMail = process.env.RECEIVING_MAIL as string;

interface EmailData {
  email: string;
  name: string;
  message: string;
}

interface SendEmailResponse {
  success: boolean;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<SendEmailResponse> {
  const msg = {
    to: receiverMail, // Change to your recipient
    from: senderMail, // Change to your verified sender
    subject: "New Message from Contact Form",
    text: `Email: ${data.email}\nMessage: ${data.email}\nName: ${data.name}`,
  };

  try {
    sgMail.send(msg);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email." };
  }
}
