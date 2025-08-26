import { Resend } from "resend";
import { EmailTemplate } from "../../components/EmailTemplate";

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, phone_number, company_name, message } = body;

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);

        const data = await resend.emails.send({
            from: "site@send.hermesadvisorypartners.co",
            to: "phillip-hope@starksassociate.com", // "info@hermesadvisorypartners.co",
            subject: "Contact Form Submission",
            react: await EmailTemplate({ name, email, phone_number, company_name, message }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
