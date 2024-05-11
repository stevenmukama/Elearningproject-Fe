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
		<section className='max-sm:flex-col max-sm:text-center'>
			<h1 className='text-6xl font-bold text-[#21B573] mb-16 max-sm:text-xl font-koho'>
				{' '}
				How Spid-Education Work
			</h1>
			<div className='flex gap-10 max-sm:flex-col max-sm:m-0'>
				<div className='flex-col items-center justify-center h-full pt-6 mt-8 max-sm:mt-2'>
					{SpidProcess.map((process) => (
						<div
							key={process.id}
							className='flex items-center gap-3 mb-10 border pl-10 border-[#21B573] border-opacity-35 rounded-md text-start p-8 max-sm:p-4'>
							<div className='p-4 mr-4 rounded-full bg-[#D9ECFF] w-fit'>
								<img
									src={process.imageSrc}
									className='max-sm:h-auto max-sm:w-16'
								/>
							</div>
							<div>
								<h1 className='mb-4 text-xl font-bold max-sm:text-[17px]'>
									{process.title}{' '}
								</h1>
								<p className='max-sm:text-[16px]'>
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
