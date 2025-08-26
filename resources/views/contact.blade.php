@extends('layouts.app',['page'=>'Contact'])
@section('content')
<div class="h-[90rem] relative overflow-hidden" style="background: url('/images/contact.jpg') no-repeat; background-size: cover; background-position: top;">
	<div class="max-w-7xl px-6 md:px-0 mx-auto flex items-center justify-start">
		<div class="max-w-xl pt-24 pb-10 text-white">
			<p class="text-[#333] md:text-white font-medium text-2xl md:text-4xl">
				Would you like to meet us? Contact Us below
			</p>
		</div>
	</div>
	<div class="px-6 md:px-0">
		<div class="md:h-[90rem] bg-primary md:max-w-4xl  w-full">
			<div class="md:ml-56 md:pt-40 relative">
				<div class="flex flex-wrap flex-row md:flex-col">
					<div class="w-full md:w-auto p-6">
						<div class="md:max-w-[229px] space-y-6">
							<div>
								<p class="font-bold">Nigeria</p>
								<p class="mt-2 md:mt-4 text-light">
									Plot 4, Megamound Estate, Ikate Lekki
								</p>
							</div>
							<div>
								<p class="font-bold">Kenya</p>
								<p class="mt-2 md:mt-4 text-light">
									Woodvale Grove Building, Krishna Centre, Westlands, Nairobi, Kenya
								</p>
							</div>
							<div>
								<p class="font-bold">United Kingdom</p>
								<p class="mt-2 md:mt-4 text-light">
									71 - 75 Shelton Street, Covent Garden, Lancashire, United Kingdom
								</p>
							</div>
						</div>
					</div>
					<div class="max-w-xl bg-white w-full md:absolute md:z-50 md:-right-48 p-7 md:p-14">
						@if (session('success'))
							<div class="rounded-md bg-green-600 p-4 mb-10">
								<div class="flex">
									<div class="shrink-0">
										<svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" class="size-5 text-white">
											<path d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" fill-rule="evenodd" />
										</svg>
									</div>
									<div class="ml-3">
										<h3 class="text-sm font-medium text-white">{{ session('success') }}</h3>
									</div>
								</div>
							</div>
						@endif

						<form action="/send" method="POST" class="space-y-10">
							@csrf
							<div>
								<input value="{{ old('phone_number') }}" type="text" class="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary" placeholder="PHONE NUMBER*" name="phone_number" id="phone_number">
								@if ($errors->first('phone_number'))
									<small class="text-red-500 mt-1">{{ $errors->first('phone_number') }}</small>
								@endif
							</div>
							<div>
								<input value="{{ old('name') }}"type="text" class="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary" placeholder="NAME*" name="name" id="name">
									@if ($errors->first('name'))
										<small class="text-red-500 mt-1">{{ $errors->first('name') }}</small>
									@endif
							</div>
							<div>
								<input value="{{ old('email') }}" type="text" class="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary" placeholder="EMAIL*" name="email" id="email">
									@if ($errors->first('email'))
										<small class="text-red-500 mt-1">{{ $errors->first('email') }}</small>
									@endif
							</div>
							<div>
								<input value="{{ old('company_name') }}" type="text" class="focus:outline-none border-b w-full border-[#060606] pb-2 px-2 focus:border-primary" placeholder="COMPANY NAME*" name="company_name" id="company_name">
									@if ($errors->first('company_name'))
										<small class="text-red-500 mt-1">{{ $errors->first('company_name') }}</small>
									@endif
							</div>
							<div>
								<textarea type="text" class="focus:outline-none border w-full border-[#060606] pb-2 p-4 focus:border-primary h-32 md:h-64 resize-none" placeholder="YOUR MESSAGE*" name="message" id="message">{{ old('message') }}</textarea>
								@if ($errors->first('message'))
									<small class="text-red-500 mt-1">{{ $errors->first('message') }}</small>
								@endif
							</div>
							<div>
								<div class="flex items-center">
									<input value="1" {{ old('accept') ? 'checked' : '' }} type="checkbox" class="focus:outline-none border-b border-[#060606] pb-2 px-2 focus:border-primary" name="accept" id="accept">
									<p class="text-[#060606] text-sm md:text-base ml-2">By checking this box, I accept the Privacy Policy of this site</p>
								</div>
								@if ($errors->first('accept'))
									<small class="text-red-500 mt-1">Accept the terms</small>
								@endif
							</div>

							<button type="submit" class="flex items-center border-4 border-primary px-8 h-[55px] space-x-3 mt-10 opacity-75">
								<span class="text-lg  font-medium">SEND</span>
								<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M19 -2.26823e-07L7.84645 2.98859L16.0114 11.1536L19 -2.26823e-07ZM1.70711 18.7071L13.3431 7.07107L11.9289 5.65685L0.292893 17.2929L1.70711 18.7071Z" fill="#333"/>
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

@endsection

