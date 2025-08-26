"use client";

import Link from "next/link";
import { useState } from "react";

const Offerings = () => {
    const [offering, setOffering] = useState("small");
    return (
        <div className="bg-[#f3f0e1] py-12 md:py-24 mt-12 md:mt-20">
            <div className="max-w-7xl px-6 md:px-0 mx-auto">
                <div className="w-64 md:w-auto md:max-w-xl">
                    <p className="text-xl md:text-[43px] font-medium leading-tight">One platform, endless possibilities</p>
                </div>
                <div className="mt-10 md:hidden">
                    <div className="flex items-center">
                        <div
                            onClick={() => setOffering("small")}
                            className={`cursor-pointer w-1/3 border-b-3 pb-2 border-[#06060666] text-sm text-center ${offering === "small" ? "border-primary font-medium" : "hover:border-primary text-[#0606064D]"}`}
                        >
                            <div className="w-32">
                                <p>Blue-chip Businesses</p>
                            </div>
                        </div>
                        <div
                            onClick={() => setOffering("medium")}
                            className={`cursor-pointer w-1/3 border-b-3 pb-2 border-[#06060666] text-sm text-center ${offering === "medium" ? "border-primary font-medium" : "hover:border-primary text-[#0606064D]"}`}
                        >
                            <div className="w-32">
                                <p>Small/Medium Businesses</p>
                            </div>
                        </div>
                        <div
                            onClick={() => setOffering("large")}
                            className={`cursor-pointer w-1/3 border-b-3 pb-2 border-[#06060666] text-sm text-center ${offering === "large" ? "border-primary font-medium" : "hover:border-primary text-[#0606064D]"}`}
                        >
                            <div className="w-32">
                                <p>Investors/Fund Owner</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 md:hidden">
                        {offering === "small" && (
                            <div className="space-y-4">
                                <p className="text-sm font-medium">We help corporates identify and connect with new investors</p>
                                <p className="text-sm font-medium">Match with vetted financial service providers</p>
                                <p className="text-sm font-medium">Source funding to grow your business</p>
                                <p className="text-sm font-medium">Source for buyers or sellers of necessary licenses or products</p>
                                <Link href="" className="flex items-center space-x-2">
                                    <span className="text-sm">Learn more</span>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        )}
                        {offering === "medium" && (
                            <div className="space-y-4">
                                <p className="text-sm font-medium">Source for investors</p>
                                <p className="text-sm font-medium">Manage investor relationship</p>
                                <p className="text-sm font-medium">
                                    Provide business starting/continuity services which include; management consulting, legal, etc
                                </p>
                                <Link href="/services" className="flex items-center space-x-2">
                                    <span className="text-sm">Learn more</span>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        )}
                        {offering === "large" && (
                            <div className="space-y-4">
                                <p className="text-sm font-medium">Source tailored and pre-screened deals and investment opportunities</p>
                                <Link href="/services" className="flex items-center space-x-2">
                                    <span className="text-sm">Learn more</span>
                                    <span>
                                        <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
                <div className="grid-cols-8 gap-10 mt-20 hidden md:grid">
                    <div className="col-span-3">
                        <div
                            onClick={() => setOffering("small")}
                            className={`border-l-3 pl-6 h-32 flex flex-col justify-center border-[#06060666] cursor-pointer ${offering === "small" ? "border-primary" : "hover:border-primary"}`}
                        >
                            <div>
                                <p className="text-[#060606] font-bold text-3xl">Blue-chip Businesses</p>
                                {offering === "small" && (
                                    <Link href="/services" className="flex items-center space-x-2 mt-2 hover:underline">
                                        <span className="text-lg">Learn more</span>
                                        <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div
                            onClick={() => setOffering("medium")}
                            className={`border-l-3 pl-6 h-32 flex flex-col justify-center border-[#06060666] cursor-pointer ${offering === "medium" ? "border-primary" : "hover:border-primary"}`}
                        >
                            <div>
                                <p className="text-[#060606] font-bold text-3xl">Small/Medium Businesses</p>
                                {offering === "medium" && (
                                    <Link href="/services" className="flex items-center space-x-2 mt-2 hover:underline">
                                        <span className="text-lg">Learn more</span>
                                        <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                        <div
                            onClick={() => setOffering("large")}
                            className={`border-l-3 pl-6 h-32 flex flex-col justify-center border-[#06060666]  cursor-pointer ${offering === "large" ? "border-primary" : "hover:border-primary"}`}
                        >
                            <div>
                                <p className="text-[#060606] font-bold text-3xl">Investors/Fund Owners</p>
                                {offering === "large" && (
                                    <Link href="/services" className="flex items-center space-x-2 mt-2 hover:underline">
                                        <span className="text-lg">Learn more</span>
                                        <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    {offering === "small" && (
                        <div className="col-span-5">
                            <div className="grid grid-cols-4 gap-32">
                                <div className="col-span-2 border-t-3 border-primary">
                                    <p className="text-lg pt-6 font-medium">We help corporates identify and connect with new investors</p>
                                </div>
                                <div className="col-span-2 border-t-3 border-primary">
                                    <p className="text-lg pt-6 font-medium max-w-[250px]">Source funding to grow your business</p>
                                </div>
                                <div className="col-span-2 border-t-3 border-primary">
                                    <p className="text-lg pt-6 font-medium">Match with vetted financial service providers</p>
                                </div>
                                <div className="col-span-2 border-t-3 border-primary">
                                    <p className="text-lg pt-6 font-medium">Source for buyers or sellers of necessary licenses or products</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {offering === "medium" && (
                        <div className="col-span-5">
                            <div className="grid grid-cols-4 gap-32">
                                <div className="col-span-2 border-t-3 border-primary">
                                    <p className="text-lg pt-6 font-medium">Source for investors</p>
                                </div>
                                <div className="col-span-2 border-t-3 border-primary">
                                    <p className="text-lg pt-6 font-medium max-w-[250px]">Manage investor relationship</p>
                                </div>
                                <div className="col-span-2 border-t-3 border-primary">
                                    <p className="text-lg pt-6 font-medium">
                                        Provide business starting/continuity services which include; management consulting, legal, etc
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {offering === "large" && (
                        <div className="col-span-5">
                            <div className="grid grid-cols-4 gap-32">
                                <div className="col-span-2 border-t-3 border-primary">
                                    <p className="text-lg pt-6 font-medium">Source tailored and pre-screened deals and investment opportunities</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Offerings;
