"use client";

import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        phone_number: "",
        name: "",
        email: "",
        company_name: "",
        message: "",
        accept: false,
    });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({
                    phone_number: "",
                    name: "",
                    email: "",
                    company_name: "",
                    message: "",
                    accept: false,
                });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <main>
            <div
                className="h-[90rem] relative overflow-hidden"
                style={{
                    backgroundImage: "url('/images/contact.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <div className="max-w-7xl px-6 md:px-0 mx-auto flex items-center justify-start">
                    <div className="max-w-xl pt-24 pb-10 text-white">
                        <p className="text-[#333] md:text-white font-medium text-2xl md:text-4xl">Would you like to meet us? Contact Us below</p>
                    </div>
                </div>
                <div className="px-6 md:px-0">
                    <div className="md:h-[90rem] bg-primary md:max-w-4xl  w-full">
                        <div className="md:ml-56 md:pt-40 relative">
                            <div className="flex flex-wrap flex-row md:flex-col">
                                <div className="w-full md:w-auto p-6">
                                    <div className="md:max-w-[229px] space-y-6">
                                        <div>
                                            <p className="font-bold">Nigeria</p>
                                            <p className="mt-2 md:mt-4 text-light">Plot 4, Megamound Estate, Ikate Lekki</p>
                                        </div>
                                        <div>
                                            <p className="font-bold">Kenya</p>
                                            <p className="mt-2 md:mt-4 text-light">
                                                Woodvale Grove Building, Krishna Centre, Westlands, Nairobi, Kenya
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-bold">United Kingdom</p>
                                            <p className="mt-2 md:mt-4 text-light">
                                                71 - 75 Shelton Street, Covent Garden, Lancashire, United Kingdom
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="max-w-xl bg-white w-full md:absolute md:z-50 md:-right-48 p-7 md:p-14">
                                    {status === "success" && (
                                        <div className="rounded-md bg-green-600 p-4 mb-10">
                                            <div className="flex">
                                                <div className="shrink-0">
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        data-slot="icon"
                                                        aria-hidden="true"
                                                        className="size-5 text-white"
                                                    >
                                                        <path
                                                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                                            clipRule="evenodd"
                                                            fillRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="ml-3">
                                                    <h3 className="text-sm font-medium text-white">Message sent! we will be in touch</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    {status === "error" && (
                                        <div className="rounded-md bg-red-600 p-4 mb-10">
                                            <div className="flex">
                                                <div className="shrink-0">
                                                    <svg
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                        data-slot="icon"
                                                        aria-hidden="true"
                                                        className="size-5 text-white"
                                                    >
                                                        <path
                                                            d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                                                            clipRule="evenodd"
                                                            fillRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <div className="ml-3">
                                                    <h3 className="text-sm font-medium text-white">Something went wrong. Please try again.</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} className="space-y-10">
                                        <div>
                                            <input
                                                value={formData.phone_number}
                                                onChange={handleChange}
                                                type="text"
                                                className="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary"
                                                placeholder="PHONE NUMBER*"
                                                name="phone_number"
                                                id="phone_number"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                                className="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary"
                                                placeholder="NAME*"
                                                name="name"
                                                id="name"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="text"
                                                className="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary"
                                                placeholder="EMAIL*"
                                                name="email"
                                                id="email"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                value={formData.company_name}
                                                onChange={handleChange}
                                                type="text"
                                                className="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary"
                                                placeholder="COMPANY NAME*"
                                                name="company_name"
                                                id="company_name"
                                            />
                                        </div>
                                        <div>
                                            <textarea
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="focus:outline-none border w-full border-[#060606] pb-2 p-4 focus:border-primary h-32 md:h-64 resize-none"
                                                placeholder="YOUR MESSAGE*"
                                                name="message"
                                                id="message"
                                            ></textarea>
                                        </div>
                                        <div>
                                            <div className="flex items-center">
                                                <input
                                                    checked={formData.accept}
                                                    onChange={handleChange}
                                                    type="checkbox"
                                                    className="focus:outline-none border-b border-[#060606] pb-2 px-2 focus:border-primary"
                                                    name="accept"
                                                    id="accept"
                                                />
                                                <p className="text-[#060606] text-sm md:text-base ml-2">
                                                    By checking this box, I accept the Privacy Policy of this site
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            className="flex items-center border-4 border-primary px-8 h-[55px] space-x-3 mt-10 opacity-75"
                                            disabled={status === "loading"}
                                        >
                                            <span className="text-lg  font-medium">{status === "loading" ? "SENDING..." : "SEND"}</span>
                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                                    fill="#333"
                                                />
                                            </svg>
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
