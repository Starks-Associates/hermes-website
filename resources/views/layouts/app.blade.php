<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
	<head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1">

			<title>Hermes Advisory Partner</title>

			<!-- Fonts -->
			<link rel="preconnect" href="https://fonts.bunny.net">
			<link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700,900" rel="stylesheet" />

			<!-- Styles / Scripts -->
			@vite(['resources/css/app.css', 'resources/js/app.js'])
	</head>
	<body>
		<div>
			<div class="max-w-7xl mx-auto">
				<div class="flex flex-col h-32 justify-center">
					<div class="flex items-center justify-between">
						<div>
							<img src="{{ asset('images/logo_black.svg') }}"/>
						</div>
						<div>
							<ul class="flex items-center space-x-10">
								<li class="{{ $page == 'home' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/">
										HOME
									</a>
								</li>
								<li class="{{ $page == 'services' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/services">
										SERVICES
									</a>
								</li>
								<li class="{{ $page == 'process' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/process">
										PROCESS
									</a>
								</li>

								<li class="{{ $page == 'about-us' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/about-us">
										ABOUT US
									</a>
								</li>

								<li class="{{ $page == 'contact' ? 'underline font-bold' : 'hover:underline' }} ">
									<a href="/contact">
										CONTACT
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			
			<div>
				@yield('content')
			</div>

			{{-- Footer --}}
			<div class=" bg-[#060606]">
				<div class="max-w-7xl mx-auto py-24 border-b border-[#F5F5F5]">
					<div class="flex items-center space-x-32">
						<div>
							<img src="{{ asset('images/hermes_icon.svg') }}" class="w-48" alt="">
						</div>
						<div>
							<p class="font-medium text-4xl text-white">Let’s have a conversation</p>
							<button class="flex items-center border-4 border-primary px-12 h-[72px] space-x-3 mt-6 hover:bg-primary">
								<span class="text-lg text-white font-medium">GET IN TOUCH</span>
								<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#F5F5F5"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div class="max-w-7xl mx-auto py-24 text-white">
					<div class="grid grid-cols-6 gap-6">
						<div class="col-span-2">
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
						<div class="col-span-2 flex flex-col justify-between">
							<div class="space-y-4">
								<p class="font-semibold text-lg">
									LinkedIn
								</p>
								<p class="font-semibold text-lg">
									Facebook
								</p>
								<p class="font-semibold text-lg">
									Instagram
								</p>
							</div>
							<div class="">
								<p class="font-semibold text-lg">
									HOTLINE
								</p>
								<p class="text-light mt-2">
									+234 701 3179 218
								</p>
							</div>
						</div>
						<div class="col-span-2">
							<a href="">
								<div class="border border-primary text-left h-40 p-10">
									<p class="w-32 font-semibold">
										Subscribe to our newsletter
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