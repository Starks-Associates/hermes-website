import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="h-[884px] relative" style={{ backgroundImage: "url('/images/hero.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="max-w-2xl leading-4 bottom-20 right-40 absolute">
          <p className="text-7xl font-extrabold text-white">African focused investments for the future</p>
          <div className="mt-8">
            <p className="text-[26px] text-white">Build only your Africa</p>
            <div className="flex items-center space-x-4 mt-16">
              <button className="flex items-center border-4 border-primary px-8 h-[72px] space-x-3">
                <span className="text-lg text-white font-medium">APPLY TO INVEST</span>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#F5F5F5"/>
                </svg>
              </button>
              <button className="flex items-center border-4 border-primary bg-primary px-8 h-[72px] space-x-3">
                <span className="text-lg font-medium">APPLY TO INVEST</span>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#333"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-8 gap-20 mt-32 ">
          <div className="col-span-4">
            <Image src="/images/img1.png" width={520} height={520} className="h-[520px] object-cover" alt="" />
          </div>
          <div className="col-span-4 flex items-center ">
            <div className="max-w-[404px]">
              <h1 className="font-black text-xl uppercase leading-tight">
                Focus on building amazing products, let us do the groundwork
              </h1>
              <p className="mt-10 text-lg font-medium text-[#060606]">
                Save time, and increase your chances of success by letting Hermes Advisory handle the difficult task of raising funds, identifying quality investment opportunities, developing your corporate strategy and overall business operations structuring.
              </p>
              <button className="flex items-center border-4 border-primary px-8 h-[60px] space-x-3 mt-10 hover:opacity-75">
                <span className="text-md font-medium">DISCOVER OUR PROCESS</span>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#333"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* What we offer */}
      <div className="bg-[#f3f0e1] py-24 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl">
            <p className="text-[43px] font-medium leading-tight">One platform, endless possibilities</p>
          </div>
          <div className="grid grid-cols-8 gap-10 mt-20">
            <div className="col-span-3">
              <div className="border-l-3 pl-6 h-32 flex flex-col justify-center border-[#06060666] hover:border-primary cursor-pointer">
                <div>
                  <p className="text-[#060606] font-bold text-3xl">Blue-chip Businesses</p>
                  <a href="#" className="flex items-center space-x-2 mt-2 hover:underline">
                    <span className="text-lg">Learn more</span>
                    <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="black"/></svg>
                  </a>
                </div>
              </div>
              <div className="border-l-3 pl-6 h-32 flex flex-col justify-center border-[#06060666] hover:border-primary cursor-pointer">
                <div>
                  <p className="text-[#060606] font-bold text-3xl">Small/Medium Businesses</p>
                  <a href="#" className="flex items-center space-x-2 mt-2 hover:underline">
                    <span className="text-lg">Learn more</span>
                    <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="black"/></svg>
                  </a>
                </div>
              </div>
              <div className="border-l-3 pl-6 h-32 flex flex-col justify-center border-[#06060666] hover:border-primary cursor-pointer">
                <div>
                  <p className="text-[#060606] font-bold text-3xl">Investors/Fund Owners</p>
                  <a href="#" className="flex items-center space-x-2 mt-2 hover:underline">
                    <span className="text-lg">Learn more</span>
                    <svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="black"/></svg>
                  </a>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>

      {/* Companies */}
      <div className="py-24">
        <div>
          <p className="text-xl max-w-[250px] mx-auto text-center font-medium">
            Partnering with ambitious companies and people
          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-10">
          <div className="flex items-center justify-center space-x-10">
            <div className="w-64 aspect-[3/1] flex items-center justify-center">
              <Image src="/images/company/africa_plus.svg" alt="Africa Plus" width={256} height={85} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="w-64 aspect-[3/1] flex items-center justify-center">
              <Image src="/images/company/smart_refill.svg" alt="Smart Refill" width={256} height={85} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="w-64 aspect-[3/1] flex items-center justify-center">
              <Image src="/images/company/capsa.svg" alt="Capsa" width={256} height={85} className="max-h-full max-w-full object-contain" />
            </div>
            <div className="w-64 aspect-[3/1] flex items-center justify-center">
              <Image src="/images/company/corva.svg" alt="Corva" width={256} height={85} className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}