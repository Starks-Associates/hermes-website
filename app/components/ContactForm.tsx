"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address"),
    company_name: z.string().optional(),
    phone: z.string().optional(),
    message: z.string().min(1, "Message is required"),
    privacyPolicyAccepted: z.boolean().refine((val) => val === true, "You must accept the privacy policy"),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactFormSchema),
    });

    const [status, setStatus] = useState<"" | "loading" | "success" | "error">("");

    const onSubmit = async (data: ContactFormInputs) => {
        setStatus("loading");
        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus("success");
                reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatus("error");
        }
    };

    return (
        <div className="max-w-xl bg-white w-full md:absolute md:z-50 md:-right-48 p-7 md:p-14">
            {status === "success" && (
                <div className="rounded-md bg-green-600 p-4 mb-10">
                    <div className="flex">
                        <div className="shrink-0">
                            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 text-white">
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
                            <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 text-white">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                <div>
                    <input
                        {...register("name")}
                        type="text"
                        className="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary"
                        placeholder="NAME*"
                        id="name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                    <input
                        {...register("email")}
                        type="text"
                        className="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary"
                        placeholder="EMAIL*"
                        id="email"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                    <input
                        {...register("company_name")}
                        type="text"
                        className="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary"
                        placeholder="COMPANY NAME"
                        id="company_name"
                    />
                    {errors.company_name && <p className="text-red-500 text-sm mt-1">{errors.company_name.message}</p>}
                </div>
                <div>
                    <input
                        {...register("phone")}
                        type="text"
                        className="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary"
                        placeholder="PHONE NUMBER"
                        id="phone"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                    <textarea
                        {...register("message")}
                        className="focus:outline-none border w-full border-[#060606] pb-2 p-4 focus:border-primary h-32 md:h-64 resize-none"
                        placeholder="YOUR MESSAGE*"
                        id="message"
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <div>
                    <div className="flex items-center">
                        <input
                            {...register("privacyPolicyAccepted")}
                            type="checkbox"
                            className="focus:outline-none border-b border-[#060606] pb-2 px-2 focus:border-primary"
                            id="privacyPolicyAccepted"
                        />
                        <p className="text-[#060606] text-sm md:text-base ml-2">By checking this box, I accept the Privacy Policy of this site</p>
                    </div>
                    {errors.privacyPolicyAccepted && <p className="text-red-500 text-sm mt-1">{errors.privacyPolicyAccepted.message}</p>}
                </div>

                <button
                    type="submit"
                    className="flex items-center border-4 border-primary px-8 h-[55px] space-x-3 mt-10 opacity-75"
                    disabled={isSubmitting}
                >
                    <span className="text-lg  font-medium">{isSubmitting ? "SENDING..." : "SEND"}</span>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                            fill="#333"
                        />
                    </svg>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
