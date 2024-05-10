import { useState, useEffect } from 'react';

import './FooterSection.css';

function FooterSection() {
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
			<div className='bg-[#1E1E1E] pb-9'>
				<section className='pb-4 pt-9 max-sm:mx-8'>
					<div className='mb-11'>
						<div className='flex justify-between text-white mb-11 max-sm:items-center'>
							<h1 className='font-bold max-sm:text-xs'>
								Get In touch with Us
							</h1>
							<div className='flex items-center gap-12'>
								<img
									src='/logoFooter.svg'
									className='max-sm:h-[17px]'
								/>
								<div className='flex gap-1 max-sm:hidden'>
									{/* <div className='bar-line' /> */}
									<hr className='h-auto border border-solid max-sm:hidden' />
									<div className='flex font-bold text-start max-sm:hidden'>
										<div>
											<span>
												{' '}
												Your{' '}
												<span className='text-[#F49406] pl-1'>
													{' '}
													Best
												</span>{' '}
												Online
											</span>
											<br></br>
											Learning Platform
										</div>
									</div>
								</div>
							</div>

							<p className='font-bold text-start'>
								{windowWidth <= 768 ? (
									<>
										<span className='max-sm:text-xs'> Learn with us?</span>
									</>
								) : (
									<>
										<span>Want to learn</span>
										<br />
										<span>with us?</span>
									</>
								)}
							</p>
						</div>
						<div className='flex items-start justify-between text-white max-sm:text-xs max-sm:items-center'>
							<div className='leading-5 text-start max-sm:leading-normal'>
								<p>info.spided@gmail.com</p>
								<p className='py-1'>+250 784 673 524</p>
								<p className='py-1'>+250 789 129 482</p>
							</div>
							<div className='flex gap-2 max-sm:flex-col max-sm:text-start'>
								<p>Home</p>
								<p>Courses</p>
								<p>Contact us</p>
							</div>
							<div className='max-sm:flex-col'>
								<div className='flex items-start gap-2'>
									<p className='text-[#F49406] font-bold text-2xl max-sm:text-xs'>
										SignUp
									</p>
									<img
										src='/gosign.svg'
										alt='gosign'
										className='max-sm:w-3'
									/>
								</div>
								<div className='max-sm:mt-1 max-sm:text-start'>
									<h1 className='max-sm:mt-1'>Languages</h1>
									<p className='max-sm:mt-1 max-sm:hover:text-[#21B573]'>
										French
									</p>
									<p className='max-sm:mt-1 max-sm:hover:text-[#21B573]'>
										English
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<hr className='w-auto my-3 border border-solid' />
				<section>
					<div className='flex items-center justify-between text-white'>
						<div className='flex items-center gap-2'>
							<img
								src='/tiktokicon.svg'
								className='max-sm:h-[12px]'
							/>
							<img
								src='/linkedinicon.svg'
								className='max-sm:h-[12px]'
							/>
							<img
								src='/facebookicon.svg'
								className='max-sm:h-[12px]'
							/>
							<img
								src='/instagramicon.svg'
								className='max-sm:h-[12px]'
							/>
							<p className='max-sm:text-[12px]'> Spided</p>
						</div>

						<p className='max-sm:text-[12px]'>
							© 2024{' '}
							<span className='max-sm:hidden'>All-Right Reserved.</span>
						</p>
						<p className='max-sm:text-[12px]'>Developed by Mayllos</p>
					</div>
				</section>
			</div>
		</>
	);
}

export default FooterSection;
