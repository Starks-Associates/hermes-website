import * as React from "react";
import { Html, Head, Body, Container, Text, Hr } from "@react-email/components";

interface EmailTemplateProps {
    name: string;
    email: string;
    phone?: string;
    company_name?: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, phone, company_name, message }) => (
    <Html>
        <Head />
        <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f6f6f6", padding: "20px" }}>
            <Container style={{ backgroundColor: "#ffffff", margin: "0 auto", padding: "20px", borderRadius: "8px", border: "1px solid #eee" }}>
                <Text style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>Contact Form Submission</Text>
                <Hr style={{ borderColor: "#eee", margin: "20px 0" }} />
                <Text style={{ fontSize: "16px", color: "#555" }}>
                    <strong>Name:</strong> {name}
                </Text>
                <Text style={{ fontSize: "16px", color: "#555" }}>
                    <strong>Email:</strong> {email}
                </Text>
                {phone && (
                    <Text style={{ fontSize: "16px", color: "#555" }}>
                        <strong>Phone Number:</strong> {phone}
                    </Text>
                )}
                {company_name && (
                    <Text style={{ fontSize: "16px", color: "#555" }}>
                        <strong>Company Name:</strong> {company_name}
                    </Text>
                )}
                <Text style={{ fontSize: "16px", color: "#555" }}>
                    <strong>Message:</strong> {message}
                </Text>
            </Container>
        </Body>
    </Html>
);
