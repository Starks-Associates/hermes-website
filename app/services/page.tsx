import Image from 'next/image';

export default function Services() {
  return (
    <>
      <div className="h-[884px] flex flex-col justify-end relative" style={{ backgroundImage: "url('/images/services.jpg')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
        <div className="max-w-7xl text-white">
          <div className="max-w-4xl pl-40 pb-40">
            <p className="font-bold text-7xl">
              Bespoke services for your capital raise
            </p>
            <p className="text-xl mt-10">
              Built for businesses aiming for global growth and investors betting on the future of the African market.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-32">
        <div className="grid grid-cols-8 gap-x-10 items-center">
          <div className="col-span-4">
            <div className="max-w-lg bg-primary py-20">
              <div className="flex font-bold">
                <div className="bg-white w-20 p-2 flex justify-end">OUR</div> <div className="p-2">
                  NUANCE
                </div>
              </div>
              <div className="px-10 mt-6">
                <p className="text-lg font-medium">
                  We develop and implement strategies by experts with experience in Market Research, Financial Advisory, Business Advisory, Management Consulting and Wealth Management. We have built a successful and diverse portfolio working with startups, e-commerce solutions, industrial firms, multinationals, oil & gas companies, healthcare and innovative problem solvers proving that we always hit a home run no matter the platform, industry or the complexity.
                </p>
                <button className="flex items-center border-4 border-white px-8 h-14 space-x-3 mt-8">
                  <span className="text-md  font-medium">APPLY TO INVEST</span>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#333"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <Image src="/images/grouped.png" width={600} height={600} className="w-full" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-[#f3f0e1] py-32 mt-32">
        <div className="max-w-7xl mx-auto">
          <div>
            <p className="text-lg font-medium">Our</p>
            <p className="text-4xl font-bold">Value Preposition</p>
            <div className="grid grid-cols-8 mt-20">
              <div className="col-span-1"></div>
              <div className="col-span-7 grid grid-cols-6 gap-4">
                <div className="max-w-md col-span-6">
                  <p className="text-3xl font-semibold">Deep Africa-linked relationships</p>
                </div>
                <div className="flex items-center col-span-2 space-x-4 mt-6">
                  <div className="flex items-center">
                    <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="76" height="76.5614" rx="38" fill="#DFC72F"/><path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/></svg>
                  </div>
                  <div><p>Existing operations relationships across Africa</p></div>
                </div>
                <div className="flex items-center col-span-2 space-x-4 mt-6">
                    <div className="flex items-center"><svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="76" height="76.5614" rx="38" fill="#DFC72F"/><path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/></svg></div>
                    <div><p className="font-semibold">Africa Enterprise</p><p className="mt-1">Our core operations are set up in Kenya, Ghana, Rwanda, South Africa, Uganda, UK and Nigeria</p></div>
                </div>
                <div className="flex items-center col-span-2 space-x-4 mt-6">
                    <div className="flex items-center"><svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="76" height="76.5614" rx="38" fill="#DFC72F"/><path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/></svg></div>
                    <div><p className="font-semibold">Proven Expertise</p><p className="mt-1">We have partners with at least 10 years of experience across all sectors.</p></div>
                </div>
                <div className="flex items-center col-span-2 space-x-4 mt-6">
                    <div className="flex items-center"><svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="76" height="76.5614" rx="38" fill="#DFC72F"/><path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/></svg></div>
                    <div><p>We have access to valuable african focused data, and a solid network of venture builders who care about Africa and its development.</p></div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-8 mt-20">
                <div className="col-span-1"></div>
                <div className="col-span-7 grid grid-cols-6 gap-4">
                    <div className="max-w-[250px] col-span-6"><p className="text-3xl font-semibold">Companies we work with</p></div>
                    <div className="flex items-center col-span-2 space-x-4 mt-6">
                        <div className="flex items-center"><svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="76" height="76.5614" rx="38" fill="#DFC72F"/><path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/></svg></div>
                        <div><p className="text-xl font-semibold">Ealy stage</p></div>
                    </div>
                    <div className="flex items-center col-span-2 space-x-4 mt-6">
                        <div className="flex items-center"><svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="76" height="76.5614" rx="38" fill="#DFC72F"/><path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/></svg></div>
                        <div><p className="text-xl font-semibold">Growth Phase</p></div>
                    </div>
                    <div className="flex items-center col-span-2 space-x-4 mt-6">
                        <div className="flex items-center"><svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="76" height="76.5614" rx="38" fill="#DFC72F"/><path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/></svg></div>
                        <div><p className="text-xl font-semibold">Established</p></div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-32">
        <div className="max-w-7xl mx-auto">
          <div><p className="max-w-sm font-black text-6xl">Full range of services</p></div>
          <div className="grid grid-cols-6 gap-8 mt-20">
            <div className="col-span-2"><div className="flex items-start justify-start space-x-2"><Image src="/images/work.jpg" width={40} height={40} className="w-10" alt="" /><div><p className="font-semibold">Trade and investment advisory services</p><p>Transaction advisor I Financial modelling I Listing services</p></div></div></div>
            <div className="col-span-2"><div className="flex items-start justify-start space-x-2"><Image src="/images/work.jpg" width={40} height={40} className="w-10" alt="" /><div><p className="font-semibold">Legal/Corporate structuring</p><p>Fund administration | Fund raising</p></div></div></div>
            <div className="col-span-2"><div className="flex items-start justify-start space-x-2"><Image src="/images/work.jpg" width={40} height={40} className="w-10" alt="" /><div><p className="font-semibold">Management consulting</p><p>Business Strategy | Finance | Marketing</p></div></div></div>
            <div className="col-span-2"><div className="flex items-start justify-start space-x-2"><Image src="/images/work.jpg" width={40} height={40} className="w-10" alt="" /><div><p className="font-semibold">Accounting and Auditing</p><p>Tax & compliance I Audit & assurance to Advisory</p></div></div></div>
            <div className="col-span-2"><div className="flex items-start justify-start space-x-2"><Image src="/images/work.jpg" width={40} height={40} className="w-10" alt="" /><div><p className="font-semibold">Business Development</p><p>Relationship management | Client Management </p></div></div></div>
            <div className="col-span-2"><div className="flex items-start justify-start space-x-2"><Image src="/images/work.jpg" width={40} height={40} className="w-10" alt="" /><div><p className="font-semibold">Insurance</p><p>Credit insurance I Political risk I Non-payment I General & life</p></div></div></div>
            <div className="col-span-2"><div className="flex items-start justify-start space-x-2"><Image src="/images/work.jpg" width={40} height={40} className="w-10" alt="" /><div><p className="font-semibold">Regulatory Relationships</p><p>Licenses and Compliance</p></div></div></div>
          </div>
        </div>
      </div>
      <div className="pb-32">
        <div className="max-w-7xl mx-auto">
          <div>
            <div>
              <p className="text-5xl font-bold max-w-md leading-tight">Seeking growth capital (2022)</p>
              <div className="flex items-center">
                <div className="w-1/4"><p className="text-3xl text-primary mt-10">$ <span className="text-7xl font-black">50</span> million</p><p className="font-bold text-xl">Investment size</p></div>
                <div><Image src="/images/target.png" width={500} height={300} alt="" /></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}
