import * as React from "react";

interface EmailTemplateProps {
    name: string;
    email: string;
    phone?: string;
    company_name?: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, phone, company_name, message }) => (
    <div>
        <h1>Contact Form Submission</h1>
        <p>
            <strong>Name:</strong> {name}
        </p>
        <p>
            <strong>Email:</strong> {email}
        </p>
        {phone && (
            <p>
                <strong>Phone Number:</strong> {phone}
            </p>
        )}

        <p>
            <strong>Company Name:</strong> {company_name}
        </p>
        <p>
            <strong>Message:</strong> {message}
        </p>
    </div>
);
