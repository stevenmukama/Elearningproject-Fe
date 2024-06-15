import { useState, useEffect } from 'react';

function CeoSection() {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	return (
		<div className="items-start flex mt-16 bg-cover mb-11 pt-[8rem] p-16 max-md:py-7 max-md:px-7 gap-16 max-md:flex-col max-md:pt-3 max-md: max-md:h-full md:max-xl:h-full md:max-xl:gap-3 bg-[url('/ceoBgImg.svg')] max-md:bg-[url('/phoneBg.svg')]">
			<div className='w-1/2 max-md:w-full max-md:pt-20'>
				{windowWidth <= 768 ? (
					<>
						<h1 className='font-bold leading-10 font-koho max-md:mb-2 max-md:text-center'>
							<span className=' text-white max-md:text-[12px]'>
								Experience Unlimited Learning
							</span>
							<span className='text-white max-md:text-[12px] max-md:pl-1'>
								Potential
							</span>
							<span className='pl-1 text-[#24D198] max-md:text-[12px]'>
								with SPidEd!
							</span>
						</h1>{' '}
					</>
				) : (
					<>
						<h1 className='mb-8 font-bold font-koho max-md:mb-2 max-md:pt-14'>
							<span className='text-3xl text-white max-md:text-[13px]'>
								Experience Unlimited Learning
							</span>
							<br className='mt-2 max-md:hidden' />
							<span className='text-3xl text-white max-md:text-[13px] max-md:pl-1'>
								Potential
							</span>
							<span className='pl-1 text-[#24D198] text-3xl max-md:text-[13px]'>
								with SPidEd!
							</span>
						</h1>
					</>
				)}

				<p className='mb-8 text-[22px] leading-[1.8] font-Poppins text-white/80 max-md:text-center max-md:text-xs max-md:pb-8'>
					We know that if you&apos;re reading this, it&apos;s because
					you&apos;re eager to learn, and you&apos;re in the right place.
					Our goal is to train individuals like you and help them gain
					important and useful skills. Dive into a world of endless
					learning opportunities with SPidEd.
				</p>
			</div>
			<img
				src='/ceoimge.png'
				className='object-contain w-[50%] max-md:w-full'
			/>
		</div>
	);
}

export default CeoSection;
