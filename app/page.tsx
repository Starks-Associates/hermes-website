import type { Metadata } from "next";
import Link from "next/link";
import Offerings from "./components/Offerings";

export const metadata: Metadata = {
    title: "Home - Hermes Advisory Partner",
};

const Home = () => {
    return (
        <main>
            {/* Hero */}
            <div
                className="h-[706px] md:h-[884px] relative flex flex-col justify-end"
                style={{
                    backgroundImage: "url('/images/hero.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            >
                <div className="max-w-xl md:max-w-2xl leading-4 pb-10 px-8 md:bottom-20 right-15 md:right-40 md:absolute">
                    <p className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white">African focused investments for the future</p>
                    <div className="mt-8">
                        <p className="text-xl md:text-[26px] text-white">Build only your Africa</p>
                        <div className="flex flex-col md:flex-row items-center mt-8 md:mt-16">
                            <Link href="/contact" className="w-full">
                                <button className="flex items-center w-full md:w-auto justify-center border-4 border-primary px-4 md:px-8 h-[52px] md:h-[72px] space-x-3">
                                    <span className="text-base md:text-lg text-white font-medium">APPLY TO INVEST</span>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                            fill="#F5F5F5"
                                        />
                                    </svg>
                                </button>
                            </Link>
                            <Link href="/process" className="w-full">
                                <button className="flex items-center border-4 w-full md:w-auto justify-center border-primary bg-primary  px-4 md:px-8 h-[52px] md:h-[72px] space-x-3 mt-4 md:mt-0">
                                    <span className="text-base md:text-lg font-medium">RAISE FUNDS</span>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                            fill="#333"
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Intro */}
            <div className="max-w-7xl mx-auto px-6 md:px-0">
                <div className="grid grid-cols-4 md:grid-cols-8 gap-10 md:gap-20 mt-16 md:mt-32 ">
                    <div className="col-span-4 order-2 md:order-1 ">
                        <img src="/images/img1.png" className="h-[428px] md:h-[520px] object-cover" alt="" />
                    </div>
                    <div className="col-span-4 flex items-center order-1 md:order-2">
                        <div className="max-w-[404px]">
                            <h1 className="font-black text-xl uppercase leading-tight">
                                Focus on building amazing products, let us do the groundwork
                            </h1>
                            <p className="mt-10 text-lg font-medium text-[#060606]">
                                Save time, and increase your chances of success by letting Hermes Advisory handle the difficult task of raising funds,
                                identifying quality investment opportunities, developing your corporate strategy and overall business operations
                                structuring.
                            </p>
                            <Link href="/process">
                                <button className="flex items-center border-4 border-primary w-full md:w-auto justify-center px-8 h-[60px] space-x-3 mt-10 hover:opacity-75">
                                    <span className="text-md font-medium">DISCOVER OUR PROCESS</span>
                                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                            fill="#333"
                                        />
                                    </svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Offerings */}
            <Offerings />

            {/* Companies */}
            <div className="py-24">
                <div>
                    <p className="text-base md:text-xl max-w-[250px] md:max-w-[250px] px-6 md:px-0 mx-auto text-center font-medium">
                        Partnering with ambitious companies and people
                    </p>
                </div>
                <div className="max-w-7xl mx-auto mt-10">
                    <div className="flex flex-wrap items-center justify-center space-x-5 md:space-x-10">
                        <div className="w-32 md:w-64 aspect-[3/1] flex items-center justify-center">
                            <img src="/images/company/africa_plus.svg" alt="Africa Plus" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="w-32 md:w-64 aspect-[3/1] flex items-center justify-center">
                            <img src="/images/company/smart_refill.svg" alt="Smart Refill" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="w-32 md:w-64 aspect-[3/1] flex items-center justify-center">
                            <img src="/images/company/capsa.svg" alt="Capsa" className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="w-32 md:w-64 aspect-[3/1] flex items-center justify-center">
                            <img src="/images/company/corva.svg" alt="Corva" className="max-h-full max-w-full object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
