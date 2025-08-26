"use client";

import Link from "next/link";

const Process = () => {
    return (
        <main>
            <div
                className="h-[500px] md:h-[700px] flex flex-col justify-end relative"
                style={{
                    backgroundImage: "url('/images/process.svg')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                }}
            >
                <div className="max-w-7xl px-6 md:px-0 md:mx-0 text-white">
                    <div className="max-w-4xl md:pl-52 pb-72 md:pb-64">
                        <p className="font-bold text-3xl md:text-7xl">
                            Our <br /> Process
                        </p>
                    </div>
                </div>
            </div>
            <div className=" -mt-48 z-10 relative">
                <div className="bg-white rounded-tr-[200px]">
                    <div className="max-w-7xl px-6 md:px-0 mx-auto  pt-24 pb-32">
                        <div className="flex flex-col md:flex-row md:items-center space-x-[70px]">
                            <div>
                                <img src="/images/process1.jpg" className="w-[699px]" />
                            </div>
                            <div className="max-w-xs md:max-w-sm mt-10 md:mt-0">
                                <p className="text-3xl md:text-5xl font-bold">Stellar process holds the key</p>
                                <p className="mt-3">
                                    We strive to bring stellar services to all clients, and we have simplified our transaction phases into multiple
                                    simple steps to help guide our client and partners along.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-8 mt-12 md:mt-20">
                            <div className="col-span-8 grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-8">
                                <div className="md:max-w-md col-span-2 md:col-span-6">
                                    <p className="text-2xl md:text-3xl font-semibold">Deep Africa-linked relationships</p>
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
                                        <p className="text-xl">ONBOARDING</p>
                                        <p className="mt-1">This is where we learn about your business and get to understand your needs.</p>
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
                                        <p className="text-xl">TRANSACTION INFO</p>
                                        <p className="mt-1">
                                            Based on information gathered from the onboarding we begin to advise on necessary documents required to
                                            carry out the transaction.
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
                                        <p className="text-xl">NETWORKING</p>
                                        <p className="mt-1">We begin to seek out possible partners with aligning goals</p>
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
                                        <p className="text-xl">OUTREACH</p>
                                        <p className="mt-1">Company transaction information is sent out for vetting and possible partnerships.</p>
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
                                        <p className="text-xl">FUND RAISING</p>
                                        <p className="mt-1">Secure investments and grow your business</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Process;
