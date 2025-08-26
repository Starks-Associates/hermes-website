import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#060606] pb-8">
            <div className="max-w-7xl px-6 md:px-0 mx-auto py-16 md:py-24 md:border-b border-[#F5F5F5]">
                <div className="flex flex-col md:flex-row items-center space-x-32">
                    <div className="flex items-center space-x-6 md:space-x-0">
                        <img src="/images/hermes_icon.svg" className="w-20 md:w-48" alt="" />
                        <div className="max-w-sm md:hidden">
                            <p className="font-medium text-3xl text-white md:hidden">Let’s have a conversation</p>
                        </div>
                    </div>
                    <div className="w-full md:w-auto">
                        <p className="font-medium text-4xl text-white hidden md:block">Let’s have a conversation</p>
                        <Link href="/contact" className="w-full">
                            <button className="flex items-center justify-center border-4 border-primary w-full md:w-auto px-12 h-[72px] space-x-3 mt-8 md:mt-6 hover:bg-primary">
                                <span className="text-lg text-white font-medium">GET IN TOUCH</span>
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z"
                                        fill="#F5F5F5"
                                    />
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl px-6 md:px-0 mx-auto md:py-24 text-white">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                    <div className="col-span-2 order-2 md:order-1">
                        <div className="max-w-[229px] space-y-6">
                            <div>
                                <p className="font-bold">Nigeria</p>
                                <p>Plot 4, Megamound Estate, Ikate Lekki</p>
                            </div>
                            <div>
                                <p className="font-bold">Kenya</p>
                                <p>Woodvale Grove Building, Krishna Centre, Westlands, Nairobi, Kenya</p>
                            </div>
                            <div>
                                <p className="font-bold">United Kingdom</p>
                                <p>71 - 75 Shelton Street, Covent Garden, Lancashire, United Kingdom</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 flex flex-col justify-between order-3 md:order-2">
                        <div className="space-y-4">
                            <div>
                                <a target="_blank" href="https://www.linkedin.com/company/hermes-advisory-partners-africa/">
                                    <p className="font-semibold text-lg">LinkedIn</p>
                                </a>
                            </div>
                            <div>
                                <a target="_blank" href="https://www.instagram.com/hermes_advisory_partners">
                                    <p className="font-semibold text-lg">Instagram</p>
                                </a>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <p className="font-semibold text-lg">HOTLINE</p>
                            <p className="text-light mt-2">+234 701 3179 218</p>
                        </div>
                    </div>
                    <div className="col-span-2 order-1 md:order-3">
                        <Link href="/contact">
                            <div className="border hover:bg-primary hover:text-white border-primary text-left h-20 md:h-40 p-4 md:p-10">
                                <p className="w-32 font-semibold">Contact us</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
