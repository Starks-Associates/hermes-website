@extends('layouts.app', ['page'=>'Home'])
@section('content')
	{{-- Hero --}}
	<div class="h-[706px] md:h-[884px] relative flex flex-col justify-end" style="background: url('/images/hero.png') no-repeat; background-size: cover;">
		<div class="max-w-xl md:max-w-2xl leading-4 pb-10 px-8 md:bottom-20 right-15 md:right-40 md:absolute">
			<p class="text-5xl sm:text-6xl md:text-7xl font-extrabold text-white">African focused investments for the future</p>
			<div class="mt-8">
				<p class="text-xl md:text-[26px] text-white">Build only your Africa</p>
				<div class="flex flex-col md:flex-row items-center mt-8 md:mt-16">
					<a href="/contact" class="w-full">
						<button class="flex items-center w-full md:w-auto justify-center border-4 border-primary px-4 md:px-8 h-[52px] md:h-[72px] space-x-3">
							<span class="text-base md:text-lg text-white font-medium">APPLY TO INVEST</span>
							<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#F5F5F5"/>
							</svg>
						</button>
					</a>
					<a href="/process" class="w-full">
						<button class="flex items-center border-4 w-full md:w-auto justify-center border-primary bg-primary  px-4 md:px-8 h-[52px] md:h-[72px] space-x-3 mt-4 md:mt-0">
							<span class="text-base md:text-lg font-medium">RAISE FUNDS</span>
							<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#333"/>
							</svg>
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>
	{{-- Intro --}}
	<div class="max-w-7xl mx-auto px-6 md:px-0">
		<div class="grid grid-cols-4 md:grid-cols-8 gap-10 md:gap-20 mt-16 md:mt-32 ">
			<div class="col-span-4 order-2 md:order-1 ">
				<img src="{{ asset('images/img1.png') }}" class="h-[428px] md:h-[520px] object-cover" alt="">
			</div>
			<div class="col-span-4 flex items-center order-1 md:order-2">
				<div class="max-w-[404px]">
					<h1 class="font-black text-xl uppercase leading-tight">
						Focus on building amazing products, let us do the groundwork
					</h1>
					<p class="mt-10 text-lg font-medium text-[#060606]">
						Save time, and increase your chances of success by letting Hermes Advisory handle the difficult task of raising funds, identifying quality investment opportunities, developing your corporate strategy and overall business operations structuring.
					</p>
					<a href="/process">
						<button class="flex items-center border-4 border-primary w-full md:w-auto justify-center px-8 h-[60px] space-x-3 mt-10 hover:opacity-75">
							<span class="text-md font-medium">DISCOVER OUR PROCESS</span>
							<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#333"/>
							</svg>
						</button>
					</a>
				</div>
			</div>
		</div>
	</div>

	{{-- What we offer --}}
	<div class="bg-[#f3f0e1] py-12 md:py-24 mt-12 md:mt-20">
		<div class="max-w-7xl px-6 md:px-0 mx-auto">
			<div class="w-64 md:w-auto md:max-w-xl">
				<p class="text-xl md:text-[43px] font-medium leading-tight">One platform, endless possibilities</p>
			</div>
			<div class="mt-10 md:hidden">
				<div class="flex items-center">
					<div x-on:click="offering = 'small'" x-bind:class="offering == 'small' ? 'border-primary font-medium' : 'hover:border-primary text-[#0606064D]'" class="cursor-pointer w-1/3 border-b-3 pb-2 border-[#06060666] text-sm text-center">
						<div class="w-32">
							<p>Blue-chip Businesses</p>
						</div>
					</div>
					<div x-on:click="offering = 'medium'" x-bind:class="offering == 'medium' ? 'border-primary font-medium' : 'hover:border-primary text-[#0606064D]'" class="cursor-pointer w-1/3 border-b-3 pb-2 border-[#06060666] text-sm text-center">
						<div class="w-32">
							<p>Small/Medium Businesses</p>
						</div>
					</div>
					<div x-on:click="offering = 'large'" x-bind:class="offering == 'large' ? 'border-primary font-medium' : 'hover:border-primary text-[#0606064D]'" class="cursor-pointer w-1/3 border-b-3 pb-2 border-[#06060666] text-sm text-center">
						<div class="w-32">
							<p>Investors/Fund Owner</p>
						</div>
					</div>
				</div>

				<div class="mt-6 md:hidden">
					<div class="space-y-4" x-show="offering === 'small'">
						<p class="text-sm font-medium">
							We help corporates identify and connect with new investors
						</p>
						<p class="text-sm font-medium">
							Match with vetted financial service providers
						</p>
						<p class="text-sm font-medium">
							Source funding to grow your business
						</p>
						<p class="text-sm font-medium">
							Source for buyers or sellers of necessary licenses or products
						</p>
						<a href="" class="flex items-center space-x-2">
							<span class="text-sm">Learn more</span>
							<span><svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="black"/></svg></span>
						</a>
					</div>
					<div class="space-y-4" x-show="offering === 'medium'">
						<p class="text-sm font-medium">
							Source for investors
						</p>
						<p class="text-sm font-medium">
							Manage investor relationship
						</p>
						<p class="text-sm font-medium">
							Provide business starting/continuity services which include; management consulting, legal, etc
						</p>
						<a href="/services" class="flex items-center space-x-2">
							<span class="text-sm">Learn more</span>
							<span><svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="black"/></svg></span>
						</a>
					</div>
					<div class="space-y-4" x-show="offering === 'large'">
						<p class="text-sm font-medium">
							Source tailored and pre-screened deals and investment opportunities
						</p>
						<a href="/services" class="flex items-center space-x-2">
							<span class="text-sm">Learn more</span>
							<span><svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="black"/></svg></span>
						</a>
					</div>
				</div>
			</div>
			<div class="grid-cols-8 gap-10 mt-20 hidden md:grid">
				<div class="col-span-3">
					<div x-on:click="offering = 'small'" x-bind:class="offering == 'small' ? 'border-primary' : 'hover:border-primary'" class="border-l-3 pl-6 h-32 flex flex-col justify-center border-[#06060666] cursor-pointer">
						<div>
							<p class="text-[#060606] font-bold text-3xl">Blue-chip Businesses</p>
							<a href="/services" class="flex items-center space-x-2 mt-2 hover:underline" x-show="offering === 'small'">
								<span class="text-lg">Learn more</span>
								<svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="black"/></svg>
							</a>
						</div>
					</div>
					<div x-on:click="offering = 'medium'" x-bind:class="offering == 'medium' ? 'border-primary' : 'hover:border-primary'" class="border-l-3 pl-6 h-32 flex flex-col justify-center border-[#06060666] cursor-pointer">
						<div>
							<p class="text-[#060606] font-bold text-3xl">Small/Medium Businesses</p>
							<a href="/services" class="flex items-center space-x-2 mt-2 hover:underline" x-show="offering === 'medium'">
								<span class="text-lg">Learn more</span>
								<svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="black"/></svg>
							</a>
						</div>
					</div>
					<div x-on:click="offering = 'large'" x-bind:class="offering == 'large' ? 'border-primary' : 'hover:border-primary'" class="border-l-3 pl-6 h-32 flex flex-col justify-center border-[#06060666]  cursor-pointer">
						<div>
							<p class="text-[#060606] font-bold text-3xl">Investors/Fund Owners</p>
							<a href="/services" class="flex items-center space-x-2 mt-2 hover:underline" x-show="offering === 'large'">
								<span class="text-lg">Learn more</span>
								<svg width="10" height="10" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="black"/></svg>
							</a>
						</div>
					</div>
				</div>
				<div class="col-span-5" x-show="offering === 'small'">
					<div class="grid grid-cols-4 gap-32">
						<div class="col-span-2 border-t-3 border-primary">
							<p class="text-lg pt-6 font-medium">We help corporates identify and connect with new investors</p>
						</div>
						<div class="col-span-2 border-t-3 border-primary">
							<p class="text-lg pt-6 font-medium max-w-[250px]">Source funding to grow your business</p>
						</div>
						<div class="col-span-2 border-t-3 border-primary">
							<p class="text-lg pt-6 font-medium">Match with vetted financial service providers</p>
						</div>
						<div class="col-span-2 border-t-3 border-primary">
							<p class="text-lg pt-6 font-medium">Source for buyers or sellers of necessary licenses or products</p>
						</div>
					</div>
				</div>	
				<div class="col-span-5" x-show="offering === 'medium'">
					<div class="grid grid-cols-4 gap-32">
						<div class="col-span-2 border-t-3 border-primary">
							<p class="text-lg pt-6 font-medium">Source for investors</p>
						</div>
						<div class="col-span-2 border-t-3 border-primary">
							<p class="text-lg pt-6 font-medium max-w-[250px]">Manage investor relationship</p>
						</div>
						<div class="col-span-2 border-t-3 border-primary">
							<p class="text-lg pt-6 font-medium">Provide business starting/continuity services which include; management consulting, legal, etc</p>
						</div>
					</div>
				</div>	
				<div class="col-span-5" x-show="offering === 'large'">
					<div class="grid grid-cols-4 gap-32">
						<div class="col-span-2 border-t-3 border-primary">
							<p class="text-lg pt-6 font-medium">Source tailored and pre-screened deals and investment opportunities</p>
						</div>
					</div>
				</div>	
			</div>
		</div>
	</div>

	{{-- Companies --}}
	<div class="py-24">
		<div>
			<p class="text-base md:text-xl max-w-[250px] md:max-w-[250px] px-6 md:px-0 mx-auto text-center font-medium">
				Partnering with ambitious companies and people
			</p>
		</div>
		<div class="max-w-7xl mx-auto mt-10">
			<div class="flex flex-wrap items-center justify-center space-x-5 md:space-x-10">
				
				<div class="w-32 md:w-64 aspect-[3/1] flex items-center justify-center">
					<img src="{{ asset('images/company/africa_plus.svg') }}" alt="Africa Plus" class="max-h-full max-w-full object-contain" />
				</div>

				<div class="w-32 md:w-64 aspect-[3/1] flex items-center justify-center">
					<img src="{{ asset('images/company/smart_refill.svg') }}" alt="Smart Refill" class="max-h-full max-w-full object-contain" />
				</div>

				<div class="w-32 md:w-64 aspect-[3/1] flex items-center justify-center">
					<img src="{{ asset('images/company/capsa.svg') }}" alt="Capsa" class="max-h-full max-w-full object-contain" />
				</div>

				<div class="w-32 md:w-64 aspect-[3/1] flex items-center justify-center">
					<img src="{{ asset('images/company/corva.svg') }}" alt="Corva" class="max-h-full max-w-full object-contain" />
				</div>

			</div>
		</div>
	</div>
@endsection