function HowItWorks() {
	const SpidProcess = [
		{
			id: 1,
			imageSrc: '/personVector.svg',
			title: ' Sign-up',
			description:
				'Create your account with Spid-Education in just a few simple steps.',
		},
		{
			id: 2,
			imageSrc: '/focusVector.svg',
			title: ' Select Your Course',
			description:
				'Browse through our course and choose the ones that best fits your learning interests.',
		},
		{
			id: 3,
			imageSrc: '/walletVector.svg',
			title: 'Select Payment',
			description:
				"Once you've selected your course, proceed to the payment step to secure your course.",
		},
	];
	return (
		<section className='max-md:flex-col max-md:text-center max-md:justify-center'>
			<h1 className='text-6xl font-bold text-[#20B486] mb-16 max-md:mb-4 max-md:text-2xl font-koho'>
				{' '}
				How Spid-Education Works
			</h1>
			<div className='flex max-md:flex-col max-md:m-0'>
				<div className='flex-col items-center justify-center h-full pt-6 mt-8 max-md:mt-2'>
					{SpidProcess.map((process) => (
						<div
							key={process.id}
							className='flex items-center gap-3 mb-10 border pl-10 border-[#21B573] border-opacity-35 rounded-md text-start p-8 max-md:p-4'>
							<div className='p-4 mr-4 rounded-full bg-[#D9ECFF] w-fit'>
								<img
									src={process.imageSrc}
									className='max-md:h-auto max-md:w-16'
								/>
							</div>
							<div>
								<h1 className='mb-4 text-xl font-bold max-md:text-[17px]'>
									{process.title}{' '}
								</h1>
								<p className='max-md:text-[16px]'>
									{process.description}{' '}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className='flex-grow'>
					<img
						src='/womanSittingVector.svg'
						className='h-full'
					/>
				</div>
			</div>
		</section>
	);
}

export default HowItWorks;
