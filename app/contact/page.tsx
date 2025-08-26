import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us - Hermes Advisory Partner",
    description: "Get in touch with Hermes for inquiries and collaborations",
};

const Contact = () => {
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
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Contact;
