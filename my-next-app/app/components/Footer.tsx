import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#060606]">
            <div className="max-w-7xl mx-auto py-24 border-b border-[#F5F5F5]">
                <div className="flex items-center space-x-32">
                    <div>
                        <img src="/images/hermes_icon.svg" className="w-48" alt="Hermes Icon" />
                    </div>
                    <div>
                        <p className="font-medium text-4xl text-white">Let’s have a conversation</p>
                        <button className="flex items-center border-4 border-primary px-12 h-[72px] space-x-3 mt-6 hover:bg-primary">
                            <span className="text-lg text-white font-medium">GET IN TOUCH</span>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#F5F5F5"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-24 text-white">
                <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-2">
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
                    <div className="col-span-2 flex flex-col justify-between">
                        <div className="space-y-4">
                            <p className="font-semibold text-lg">LinkedIn</p>
                            <p className="font-semibold text-lg">Facebook</p>
                            <p className="font-semibold text-lg">Instagram</p>
                        </div>
                        <div className="">
                            <p className="font-semibold text-lg">HOTLINE</p>
                            <p className="text-light mt-2">+234 701 3179 218</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <Link href="#">
                            <div className="border border-primary text-left h-40 p-10">
                                <p className="w-32 font-semibold">Subscribe to our newsletter</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
