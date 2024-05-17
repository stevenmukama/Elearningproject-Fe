// function CeoSection() {
// 	return (
// 		<div className=" items-start flex mt-16 bg-[url('/public/ceoBgImg.svg')] mb-11 pt-[8rem] p-16 gap-x-16  max-sm:flex-col  max-sm:h-full md:max-xl:h-full md:max-xl:gap-0 md:max-xl:bg-cover md:max-lg:pt-0">
// 			<div className='w-1/2 max-sm:w-full'>
// 				<h1 className='mb-8 font-bold leading-10 font-koho '>
// 					<span className='text-3xl text-white max-sm:text-xl'>
// 						Experience Unlimited Learning
// 					</span>
// 					<br className='mt-2 max-sm:hidden' />
// 					<span className='text-3xl text-white max-sm:text-xl'>
// 						Potential
// 					</span>
// 					<span className='pl-1  text-[#24D198] text-3xl max-sm:text-xl'>
// 						with SPidEd!
// 					</span>
// 				</h1>
// 				<p className='mb-8 font-sans text-xl font-light text-white max-sm:text-center max-sm:text-[15px]'>
// 					We know that if you&apos;re reading this, it&apos;s because
// 					you&apos;re eager to learn, and you&apos;re in the right place.
// 					Our goal is to train individuals like you and help them gain
// 					important and useful skills. Dive into a world of endless
// 					learning opportunities with SPidEd.
// 				</p>
// 			</div>
// 			<img
// 				src='/ceoimge.png'
// 				className='object-contain w-[46%] max-sm:w-full'
// 			/>
// 		</div>
// 	);
// }

// export default CeoSection;
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
		<div className="items-start flex mt-16 bg-cover mb-11 pt-[8rem] p-16 gap-x-16 max-sm:flex-col max-sm:pt-3 max-sm: max-sm:h-full md:max-xl:h-full md:max-xl:gap-0 md:max-xl:pt-0 bg-[url('/ceoBgImg.svg')] max-sm:bg-[url('/phoneBg.svg')]">
			<div className='w-1/2 max-sm:w-full max-sm:pt-20'>
				{windowWidth <= 768 ? (
					<>
						<h1 className='font-bold leading-10 font-koho max-sm:mb-2'>
							<span className=' text-white max-sm:text-[12px]'>
								Experience Unlimited Learning
							</span>
							<span className='text-white max-sm:text-[12px] max-sm:pl-1'>
								Potential
							</span>
							<span className='pl-1 text-[#24D198] max-sm:text-[12px]'>
								with SPidEd!
							</span>
						</h1>{' '}
					</>
				) : (
					<>
						<h1 className='mb-8 font-bold font-koho max-sm:mb-2 max-sm:pt-14'>
							<span className='text-3xl text-white max-sm:text-[13px]'>
								Experience Unlimited Learning
							</span>
							<br className='mt-2 max-sm:hidden' />
							<span className='text-3xl text-white max-sm:text-[13px] max-sm:pl-1'>
								Potential
							</span>
							<span className='pl-1 text-[#24D198] text-3xl max-sm:text-[13px]'>
								with SPidEd!
							</span>
						</h1>
					</>
				)}

				<p className='mb-8 font-sans text-xl font-light text-white max-sm:text-center max-sm:text-xs max-sm:pb-8'>
					We know that if you&apos;re reading this, it&apos;s because
					you&apos;re eager to learn, and you&apos;re in the right place.
					Our goal is to train individuals like you and help them gain
					important and useful skills. Dive into a world of endless
					learning opportunities with SPidEd.
				</p>
			</div>
			<img
				src='/ceoimge.png'
				className='object-contain w-[46%] max-sm:w-full'
			/>
		</div>
	);
}

export default CeoSection;
