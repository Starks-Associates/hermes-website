<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">

			<title>{{ $page }} - Hermes Advisory Partner</title>
			<meta name="twitter:card" content="summary_large_image">
			<meta name="twitter:site" content="@hermesadvisorypartners">
			<meta name="twitter:title" content="Hermes Advisory Partners">
			<meta name="twitter:description" content="Hermes Advisory is an African-focused financial and investment advisory company. We handle the end-end process of building successful African ventures for both business owners and investors alike.">
			<meta name="twitter:image" content="https://hermesadvisorypartners.co/images/logo_icon.png">
			<meta name="twitter:creator" content="@hermesadvisorypartners">
			<link rel="icon" href="/images/logo_icon.png" type="image/x-icon">

			<!-- Fonts -->
			<link rel="preconnect" href="https://fonts.bunny.net">
			<link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700,900" rel="stylesheet" />

			<!-- Styles / Scripts -->
			@vite(['resources/css/app.css'])
			<script src="//unpkg.com/alpinejs" defer></script>

	</head>
	<body>
		<div x-data="{ offering: 'small', openNav:false }">
			<div class="max-w-7xl mx-auto px-6 lg:px-0">
				<div class="flex flex-col h-24 md:h-32 justify-center">
					<div class="flex items-center justify-between">
						<div>
							<a href="/">
								<img src="{{ asset('images/logo_black.svg') }}"/>
							</a>
						</div>
						<div class="block md:hidden">
							<button x-on:click="openNav = !openNav">
								<svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M32 2H0V0H32V2Z" fill="#303030"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M32 8H0V6H32V8Z" fill="#303030"/>
									<path fill-rule="evenodd" clip-rule="evenodd" d="M32 14H0V12H32V14Z" fill="#303030"/>
								</svg>
							</button>
						</div>
						<div class="hidden md:block">
							<ul class="flex items-center space-x-10">
								<li class="{{ $page == 'Home' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/">
										HOME
									</a>
								</li>
								<li class="{{ $page == 'Services' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/services">
										SERVICES
									</a>
								</li>
								<li class="{{ $page == 'Process' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/process">
										PROCESS
									</a>
								</li>

								<li class="{{ $page == 'About us' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/about-us">
										ABOUT US
									</a>
								</li>

								<li class="{{ $page == 'Contact' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/contact">
										CONTACT
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="bg-white md:hidden pb-8" x-show='openNav == true'>
					<ul class="flex flex-col space-y-4">
						<li class="{{ $page == 'Home' ? 'underline font-bold' : 'hover:underline' }} ">
							<a href="/">
								HOME
							</a>
						</li>
						<li class="{{ $page == 'Services' ? 'underline font-bold' : 'hover:underline' }} ">
							<a href="/services">
								SERVICES
							</a>
						</li>
						<li class="{{ $page == 'Process' ? 'underline font-bold' : 'hover:underline' }} ">
							<a href="/process">
								PROCESS
							</a>
						</li>

						<li class="{{ $page == 'About-us' ? 'underline font-bold' : 'hover:underline' }} ">
							<a href="/about-us">
								ABOUT US
							</a>
						</li>

						<li class="{{ $page == 'Contact' ? 'underline font-bold' : 'hover:underline' }} ">
							<a href="/contact">
								CONTACT
							</a>
						</li>
					</ul>
				</div>
			</div>
			
			<div>
				@yield('content')
			</div>

			{{-- Footer --}}
			<div class=" bg-[#060606] pb-8">
				<div class="max-w-7xl px-6 md:px-0 mx-auto py-16 md:py-24 md:border-b border-[#F5F5F5]">
					<div class="flex flex-col md:flex-row items-center space-x-32">
						<div class="flex items-center space-x-6 md:space-x-0">
							<img src="{{ asset('images/hermes_icon.svg') }}" class="w-20 md:w-48" alt="">
							<div class="max-w-sm md:hidden">
								<p class="font-medium text-3xl text-white md:hidden">Let’s have a conversation</p>
							</div>
						</div>
						<div class="w-full md:w-auto">
							<p class="font-medium text-4xl text-white hidden md:block">Let’s have a conversation</p>
							<a href="/contact" class="w-full">
								<button class="flex items-center justify-center border-4 border-primary w-full md:w-auto px-12 h-[72px] space-x-3 mt-8 md:mt-6 hover:bg-primary">
									<span class="text-lg text-white font-medium">GET IN TOUCH</span>
									<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#F5F5F5"/>
									</svg>
								</button>
							</a>
						</div>
					</div>
				</div>
				<div class="max-w-7xl px-6 md:px-0 mx-auto md:py-24 text-white">
					<div class="grid grid-cols-2 md:grid-cols-6 gap-6">
						<div class="col-span-2 order-2 md:order-1">
							<div class="max-w-[229px] space-y-6">
								<div>
									<p class="font-bold">Nigeria</p>
									<p>
										Plot 4, Megamound Estate, Ikate Lekki
									</p>
								</div>
								<div>
									<p class="font-bold">Kenya</p>
									<p>
										Woodvale Grove Building, Krishna Centre, Westlands, Nairobi, Kenya
									</p>
								</div>
								<div>
									<p class="font-bold">United Kingdom</p>
									<p>
										71 - 75 Shelton Street, Covent Garden, Lancashire, United Kingdom
									</p>
								</div>
							</div>
						</div>
						<div class="col-span-2 flex flex-col justify-between order-3 md:order-2">
							<div class="space-y-4">
								<div>
									<a target="_blank" href="https://www.linkedin.com/company/hermes-advisory-partners-africa/">
										<p class="font-semibold text-lg">
											LinkedIn
										</p>
									</a>
								</div>
								{{-- <div>
									<a href="">
										<p class="font-semibold text-lg">
											Facebook
										</p>
									</a>
								</div> --}}
								<div>
									<a target="_blank" href="https://www.instagram.com/hermes_advisory_partners">
										<p class="font-semibold text-lg">
											Instagram
										</p>
									</a>
								</div>
							</div>
							<div class="mt-4 md:mt-0">
								<p class="font-semibold text-lg">
									HOTLINE
								</p>
								<p class="text-light mt-2">
									+234 701 3179 218
								</p>
							</div>
						</div>
						<div class="col-span-2 order-1 md:order-3">
							<a href="/contact">
								<div class="border hover:bg-primary hover:text-white border-primary text-left h-20 md:h-40 p-4 md:p-10">
									<p class="w-32 font-semibold">
										Contact us
									</p>
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>