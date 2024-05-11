function CeoSection() {
	return (
		<div className="bg-center items-start flex mt-16 bg-[url('/bgblack.svg')] mb-11 p-16 gap-x-16  max-sm:flex-col  max-sm:h-full md:max-xl:h-full md:max-xl:gap-0 md:max-xl:bg-contain md:max-lg:pt-0">
			<div className='w-1/2 max-sm:w-full'>
				<h1 className='mb-8 font-bold leading-10 font-koho '>
					<span className='text-3xl text-white max-sm:text-xl'>
						Experience Unlimited Learning
					</span>
					<br className='mt-2 max-sm:hidden' />
					<span className='text-3xl text-white max-sm:text-xl'>
						Potential
					</span>
					<span className='pl-1  text-[#24D198] text-3xl max-sm:text-xl'>
						with SPidEd!
					</span>
				</h1>
				<p className='mb-8 font-sans text-xl font-light text-white max-sm:text-center max-sm:text-[15px]'>
					We know that if you&apos;re reading this, it&apos;s because
					you&apos;re eager to learn, and you&apos;re in the right place.
					Our goal is to train individuals like you and help them gain
					important and useful skills. Dive into a world of endless
					learning opportunities with SPidEd.
				</p>
				<div className='max-sm:hidden md:max-xl:hidden'>
					<button className='p-5 pb-2.5 bg-[#509f85] rounded-md'>
						<span className='flex justify-center gap-1 text-xl font-semibold text-center text-white'>
							Play Now <img src='/playbutton.svg' />
						</span>
					</button>
				</div>
			</div>
			<img
				src='/ceoimge.png'
				className='object-contain w-1/2 max-sm:w-full'
			/>
		</div>
	);
}

export default CeoSection;
