import { Resend } from "resend";
import * as z from "zod";
import { render } from "@react-email/render";
import { EmailTemplate } from "@/app/components/EmailTemplate";

const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    company_name: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(1, "Message is required"),
    privacyPolicyAccepted: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = contactFormSchema.parse(body);

        if (!process.env.RESEND_API_KEY) {
            console.log("Resend API key is not configured");

            return new Response(JSON.stringify({ error: "Error occurred" }), { status: 500 });
        }

        const { name, email, phone, company_name, message } = validatedData;

        const resend = new Resend(process.env.RESEND_API_KEY);
        const data = await resend.emails.send({
            from: "site@send.hermesadvisorypartners.co",
            to: "phillip-hope@starksassociate.com", // "info@hermesadvisorypartners.co",
            subject: "Contact Form Submission",
            react: await render(await EmailTemplate({ name, email, phone, company_name, message })),
        });

        return Response.json(data);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return new Response(JSON.stringify({ errors: error }), { status: 400 });
        }
        return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
    }
}
