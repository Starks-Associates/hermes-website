import type { Metadata } from "next";

import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
    title: "Hermes Advisory Partner",
    description:
        "Hermes Advisory is an African-focused financial and investment advisory company. We handle the end-end process of building successful African ventures for both business owners and investors alike.",
    twitter: {
        card: "summary_large_image",
        site: "@hermesadvisorypartners",
        title: "Hermes Advisory Partners",
        description:
            "Hermes Advisory is an African-focused financial and investment advisory company. We handle the end-end process of building successful African ventures for both business owners and investors alike.",
        images: "/images/logo_icon.png",
        creator: "@hermesadvisorypartners",
    },
    icons: {
        icon: "/images/logo_icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
