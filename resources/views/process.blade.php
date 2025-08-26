@extends('layouts.app',['page'=>'Process'])
@section('content')
<div class="h-[500px] md:h-[700px] flex flex-col justify-end relative" style="background: url('/images/process.svg') no-repeat; background-size: cover; background-position: top;">
		<div class="max-w-7xl px-6 md:px-0 md:mx-0 text-white">
			<div class="max-w-4xl md:pl-52 pb-72 md:pb-64">
				<p class="font-bold text-3xl md:text-7xl">
					Our <br/> Process
				</p>
			</div>
		</div>
	</div>
	<div class=" -mt-48 z-10 relative">
		<div class="bg-white rounded-tr-[200px]">
			<div class="max-w-7xl px-6 md:px-0 mx-auto  pt-24 pb-32">
				<div class="flex flex-col md:flex-row md:items-center space-x-[70px]">
					<div>
						<img src="/images/process1.jpg" class="w-[699px]"/>
					</div>
					<div class="max-w-xs md:max-w-sm mt-10 md:mt-0">
						<p class="text-3xl md:text-5xl font-bold">Stellar process holds the key</p>
						<p class="mt-3">
							We strive to bring stellar services to all clients, and we have simplified our transaction phases into multiple simple steps to help guide our client and partners along.
						</p>
					</div>
				</div>
				<div class="grid grid-cols-8 mt-12 md:mt-20">
					<div class="col-span-8 grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-8">
						<div class="md:max-w-md col-span-2 md:col-span-6">
							<p class="text-2xl md:text-3xl font-semibold">Deep Africa-linked relationships</p>
						</div>
						<div class="flex items-center col-span-2 space-x-4 mt-6">
							<div class="flex items-center">
								<svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="76" height="76.5614" rx="38" fill="#DFC72F"/>
									<path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/>
								</svg>
							</div>
							<div>
								<p class="text-xl">
									ONBOARDING
								</p>
								<p class="mt-1">
									This is where we learn about your business and get to understand your needs.
								</p>
							</div>
						</div>
						<div class="flex items-center col-span-2 space-x-4 mt-6">
							<div class="flex items-center">
								<svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="76" height="76.5614" rx="38" fill="#DFC72F"/>
									<path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/>
								</svg>
							</div>
							<div>
								<p class="text-xl">
									TRANSACTION INFO
								</p>
								<p class="mt-1">
									Based on information gathered from the onboarding we begin to advise on necessary documents required to carry out the transaction.
								</p>
							</div>
						</div>
						<div class="flex items-center col-span-2 space-x-4 mt-6">
							<div class="flex items-center">
								<svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="76" height="76.5614" rx="38" fill="#DFC72F"/>
									<path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/>
								</svg>
							</div>
							<div>
								<p class="text-xl">
									NETWORKING
								</p>
								<p class="mt-1">
									We begin to seek out possible partners with aligning goals
								</p>
							</div>
						</div>
						<div class="flex items-center col-span-2 space-x-4 mt-6">
							<div class="flex items-center">
								<svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="76" height="76.5614" rx="38" fill="#DFC72F"/>
									<path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/>
								</svg>
							</div>
							<div>
									<p class="text-xl">
									OUTREACH
								</p>
								<p class="mt-1">
									Company transaction information is sent out for vetting and possible partnerships.
								</p>
							</div>
						</div>
						<div class="flex items-center col-span-2 space-x-4 mt-6">
							<div class="flex items-center">
								<svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect width="76" height="76.5614" rx="38" fill="#DFC72F"/>
									<path d="M34.167 47.6511L26.501 39.9851L29.91 36.5761L34.167 40.8452L46.0899 28.9102L49.4989 32.3192L34.167 47.6511Z" fill="#F3F0E1"/>
								</svg>
							</div>
							<div>
									<p class="text-xl">
									FUND RAISING
								</p>
								<p class="mt-1">
									Secure investments and grow your business
								</p>
							</div>
						</div>
					</div>
			</div>

		</div>
	</div>
@endsection