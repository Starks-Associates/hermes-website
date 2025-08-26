import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About us - Hermes Advisory Partner",
};

const About = () => {
    return (
        <main>
            <div
                className="h-[387px] md:h-[537px] flex flex-col justify-end relative"
                style={{
                    backgroundImage: "url('/images/about.jpg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <div className="max-w-7xl px-6 md:px-0 text-white">
                    <div className="max-w-4xl md:pl-40 pb-12 md:pb-24">
                        <p className="font-bold text-4xl md:text-7xl">About us</p>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl px-6 md:px-0 mx-auto mt-16 md:mt-32">
                <div className="grid grid-cols-4 md:grid-cols-8 gap-7 md:gap-14 items-center">
                    <div className="col-span-4">
                        <div className="max-w-xl">
                            <p className="text-4xl md:text-6xl font-bold">You first</p>
                            <p className="text-lg md:text-xl mt-5 md:mt-16 leading-normal">
                                Hermes Advisory is an African-focused financial and investment advisory company. We handle the end-end process of
                                building successful African ventures for both business owners and investors alike.
                            </p>
                            <p className="text-lg md:text-xl mt-8 leading-normal">
                                Connect with investors, business owners, and financial service providers required for your business success across
                                Africa through Hermes Advisory Partners.
                            </p>
                        </div>
                        <Link href="/contact">
                            <button className="flex items-center justify-center w-full md:w-auto border-4 border-primary px-8 h-[55px] space-x-3 mt-10">
                                <span className="text-lg  font-medium">GET IN TOUCH</span>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                        fill="#333"
                                    />
                                </svg>
                            </button>
                        </Link>
                    </div>
                    <div className="col-span-4">
                        <div className="relative">
                            <div className="uppercase font-bold text-2xl absolute bottom-10 left-10 max-w-xs bg-primary p-4">
                                championing innovative paths
                            </div>
                            <img src="/images/about1.jpg" className="w-[602px] object-cover" alt="" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4 md:mt-32 mt-24 pb-20 md:pb-48">
                    <div className="md:max-w-md col-span-2 md:col-span-6">
                        <p className="text-3xl font-semibold">Our Core Values</p>
                    </div>
                    <div className="flex items-center col-span-2 space-x-4 mt-6">
                        <div className="flex items-center">
                            <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="76" height="76.5614" rx="38" fill="#DFC72F" />
                                <path
                                    d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z"
                                    fill="#F3F0E1"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold">Insight</p>
                            <p className="mt-1 text-sm">
                                We have access to valuable african focused data, and a solid network of venture builders who care about Africa and its
                                development.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center col-span-2 space-x-4 mt-6">
                        <div className="flex items-center">
                            <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="76" height="76.5614" rx="38" fill="#DFC72F" />
                                <path
                                    d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z"
                                    fill="#F3F0E1"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold">Integrity</p>
                            <p className="mt-1 text-sm">
                                We function under a high level of integrity and transparency and would only engage in compliant business transactions.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center col-span-2 space-x-4 mt-6">
                        <div className="flex items-center">
                            <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="76" height="76.5614" rx="38" fill="#DFC72F" />
                                <path
                                    d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z"
                                    fill="#F3F0E1"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold">Ambition</p>
                            <p className="mt-1">
                                As much as we learn from our clients, we also have big dreams for clients and inspire them to take huge and informed
                                leaps for their businesses.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center col-span-2 space-x-4 mt-6">
                        <div className="flex items-center">
                            <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="76" height="76.5614" rx="38" fill="#DFC72F" />
                                <path
                                    d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z"
                                    fill="#F3F0E1"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold">Success driven</p>
                            <p>We believe in the the African dream, and are committed to the journey to success.</p>
                        </div>
                    </div>
                    <div className="flex items-center col-span-2 space-x-4 mt-6">
                        <div className="flex items-center">
                            <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="76" height="76.5614" rx="38" fill="#DFC72F" />
                                <path
                                    d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z"
                                    fill="#F3F0E1"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold">Time</p>
                            <p>
                                We understand the time and season of investment opportunities, and carry our clients on our backs until success is
                                achieved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default About;
