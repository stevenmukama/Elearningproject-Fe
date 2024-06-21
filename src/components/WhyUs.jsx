import { useState, useEffect } from 'react';

function WhyUs() {
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
		<>
			<div className='bg-[#20B486] '>
				<section className='py-8 rounded-2xl max-md:px-0'>
					<div className='flex gap-5 text-white justify-between text-start  max-md:text-[22px] max-md:flex-col-reverse md:max-xl:flex-col-reverse'>
						<div className='max-md:flex max-md:flex-col'>
							{windowWidth <= 768 ? (
								<h2 className='font-bold font-koho text-start max-md:text-xl max-md:mb-8'>
									Why learning with Spid-Education
								</h2>
							) : (
								<h2 className='pl-0 mb-8 text-5xl font-bold font-koho text-start p-7'>
									Why you should learn with
									<br />
									Spid-Education.
								</h2>
							)}

							<div className='flex gap-3 mb-6 font-sans max-md:items-center'>
								<img
									src='/whiteStar.svg'
									className='h-7 w-7'
								/>
								<p className='text-xl max-md:text-[15px]'>
									{' '}
									Affordability: A high-quality training at reasonable
									prices
								</p>
							</div>
							<div className='flex gap-3 mb-6 font-sans max-md:items-center'>
								<img
									src='/whiteStar.svg'
									className='h-7 w-7'
								/>
								<p className='text-xl max-md:text-[15px]'>
									User-Friendly: A Smooth and enjoyable learning experience
									.
								</p>
							</div>
							<div className='flex gap-3 mb-6 font-sans max-md:items-center'>
								<img
									src='/whiteStar.svg'
									className='h-7 w-7'
								/>
								<p className='text-xl max-md:text-[15px]'>
									Job Opportunities: We help you secure employment or
									internship.
								</p>
							</div>
							<button className='p-4 pr-6 pl-6 border-none font-sans font-semibold text-xl mb-5 rounded-md  bg-[#F49406]  text-white max-md:text-sm max-md:p-3 max-md:text-center max-md:w-fit max-md:mx-auto'>
								Get Started
							</button>
						</div>

						<img
							src='/ladywithcertificate.png'
							alt='ladywithcertificate'
							className='max-md:w-full max-xl:w-4/5 xl:w-1/3'
						/>
					</div>
				</section>
			</div>
		</>
	);
}

export default WhyUs;
