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
		<div className="items-start flex mt-16 max-md:mt-[6rem] bg-cover mb-11 pt-[8rem] p-16 max-md:py-7 max-md:px-7 gap-16 max-md:flex-col max-md:pt-3 max-md: max-md:h-full md:max-xl:h-full md:max-xl:gap-3 bg-[url('/ceoBgImg.svg')] max-md:bg-[url('/phoneBg.svg')] max-md:bg-center">
			<div className='w-1/2 max-md:w-full max-md:pt-20'>
				{windowWidth <= 768 ? (
					<>
						<h1 className='font-bold font-koho max-md:mb-2 max-md:text-center'>
							<span className=' text-white max-md:text-[15px] leading-[1.6]'>
								Experience Unlimited Learning
							</span>
							<span className='text-white max-md:text-[15px] max-md:pl-1 leading-[1.6]'>
								Potential
							</span>
							<span className='pl-1 text-[#24D198] max-md:text-[15px] leading-[1.6]'>
								with SPidEd!
							</span>
						</h1>{' '}
					</>
				) : (
					<>
						<h1 className='mb-8 font-koho max-md:mb-2 max-md:pt-14'>
							<span className='text-[40px] text-white max-md:text-[15px]'>
								Experience Unlimited Learning
							</span>
							<br className='mt-2 max-md:hidden' />
							<span className='text-[40px] text-white max-md:text-[15px] max-md:pl-1'>
								Potential
							</span>
							<span className='pl-1 text-[#24D198] text-[40px] max-md:text-[15px]'>
								with SPidEd!
							</span>
						</h1>
					</>
				)}

				<div className='mb-8 text-[22px] font-Poppins text-white/80 max-md:text-center max-md:text-[15px] leading-[1.8] max-md:pb-8'>
					{windowWidth <= 768 ? (
						<p>
							We know that if you&apos;re reading this, it&apos;s because
							you&apos;re eager to learn. Our goal is to train individuals
							like you and help them gain important and useful skills.
						</p>
					) : (
						<p>
							We know that if you&apos;re reading this, it&apos;s because
							you&apos;re eager to learn, and you&apos;re in the right
							place. Our goal is to train individuals like you and help
							them gain important and useful skills. Dive into a world of
							endless learning opportunities with SPidEd.
						</p>
					)}
				</div>
			</div>
			<video
				src='/joinSpided.mp4'
				className='object-contain w-[50%] max-md:w-full'
				controls
				playsInline
				preload='metadata'
			/>
		</div>
	);
}

export default CeoSection;
