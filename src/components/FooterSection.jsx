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
			<div className="footerSection md:max-xl:h-[100vh] pb-9 bg-[url('/public/bgfooter.svg')] bg-no-repeat  max-md:h-[75vh] max-md:['/public/smallBgFooter.svg'] max-md:bg-cover   max-md:bg-no-repeat max-md:bg-top">
				<section className='pt-20 pb-4 max-md:mx-8 '>
					<div className='mb-11'>
						<div className='flex items-center justify-between text-white mb-11 max-md:items-center'>
							<h1 className='text-lg font-bold max-md:text-xs'>
								Get In touch with Us
							</h1>
							<div className='flex items-center gap-12'>
								<img
									src='/logoFooter.svg'
									className='h-16 max-md:h-6'
								/>
								<div className='flex gap-1 max-md:hidden'>
									<hr className='h-auto border border-solid max-md:hidden' />
									<div className='flex text-xl font-bold font-koho text-start max-md:hidden'>
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
										<span className='max-md:text-xs'> Learn with us?</span>
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
						<div className='flex items-start justify-between text-white max-md:text-xs max-md:items-center'>
							<div className='leading-5 text-start max-md:leading-normal'>
								<p className='py-2'>info.spided@gmail.com</p>
								<p className='py-2'>+250 784 673 524</p>
								<p className='py-2'>+250 789 129 482</p>
							</div>
							<div className='flex gap-2 max-md:flex-col max-md:text-start'>
								<p>Home</p>
								<p>Courses</p>
								<p>Contact us</p>
							</div>
							<div className='max-md:flex-col'>
								{windowWidth <= 768 ? (
									<>
										<div className='flex items-start gap-2'>
											<p className='text-[#F49406] font-bold text-2xl max-md:text-xs'>
												SignUp
											</p>
											<img
												src='/gosign.svg'
												alt='gosign'
												className='max-md:w-3'
											/>
										</div>
										<div className='max-md:mt-1 max-md:text-start'>
											<h1 className='max-md:mt-1'>Languages</h1>
											<p className='max-md:mt-1 max-md:hover:text-[#21B573]'>
												French
											</p>
											<p className='max-md:mt-1 max-md:hover:text-[#21B573]'>
												English
											</p>
										</div>
									</>
								) : (
									<>
										<div className='flex items-start gap-2'>
											<p className='text-[#F49406] font-bold text-xl max-md:text-xs'>
												SignUp
											</p>
											<img
												src='/gosign.svg'
												alt='gosign'
												className='max-md:w-3'
											/>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
				</section>
				<hr className='w-auto my-3 border border-solid' />
				<section>
					<div className='flex items-center content-center justify-between text-white'>
						<div className='flex items-center gap-2'>
							<img
								src='/tiktokicon.svg'
								className='max-md:h-[12px]'
							/>
							<img
								src='/linkedinicon.svg'
								className='max-md:h-[12px]'
							/>
							<img
								src='/facebookicon.svg'
								className='max-md:h-[12px]'
							/>
							<img
								src='/instagramicon.svg'
								className='max-md:h-[12px]'
							/>
							<p className='max-md:text-[12px]'> Spided</p>
						</div>

						<p className='max-md:text-[12px]'>
							© 2024{' '}
							<span className='max-md:hidden'>All-Right Reserved.</span>
						</p>
						<p className='max-md:text-[12px]'>Developed by Mayllos</p>
					</div>
				</section>
			</div>
		</>
	);
}

export default FooterSection;
