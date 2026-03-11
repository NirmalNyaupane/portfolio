import { Resend } from "resend"

interface EmailPaylod{
    email: string,
    fname: string,
    lname: string, 
    subject: string, 
    message: string
}
export default function sendMail(payload: EmailPaylod){
    const {email, fname, lname, subject, message} = payload
    const resend = new Resend(process.env.RESEND_KEY)

    resend.emails.send({
        from: email, 
        to: "neupanenirmal417@gmail.com",
        subject: subject,
        html: `
        <div>
        <p>
        <strong>First Name: </strong> <span>${fname} </span>
        </p>
            <p>
            <strong>Last Name: </strong> <span>${lname}</span>
        </p>
        <p>
            <strong>Email</strong> <span>${email}</span>
        </p>
        <p>
            <strong>Subject</strong> <span>${subject}</span>
        </p>
        <p>
            <strong>Message</strong> <span>${message}</span>
        </p>
        </div>
        `
    })
}   