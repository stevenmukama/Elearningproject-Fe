function CertificationSection() {
	const BenefitsCourses = [
		{
			id: 1,
			text: 'Upon successful completion of courses, receive a certificate to validate your newfound knowledge and enhancing your professional credibility.',
			imgSrc: '/graduationVector.svg',
			altText: 'graduationIcon',
		},
		{
			id: 2,
			text: 'Enhances your career prospects by demonstrating your expertise to potential employers. Employers value candidates with specialized training.',
			imgSrc: '/dataVector.svg',
			altText: 'dataIcon',
		},
		{
			id: 3,
			text: "Gain a sense of achievement and confidence in your abilities- Knowing that you've mastered valuable skills will empower you to tackle new challenges with assurance and enthusiasm.",
			imgSrc: '/constructionVector.svg',
			altText: 'constructionIcon',
		},
	];

	const moreBenefits = [
		{
			id: 1,
			text: 'Gain access to our extensive network of industry partners and employers actively seeking skilled professionals like you. ',
			imgSrc: '/lightbulbVector.svg',
			altText: 'docVector',
		},
		{
			id: 2,
			text: 'Access resume writing tips, interview preparation guides, and networking strategies to stand out in the job market.',
			imgSrc: '/docVector.svg',
			altText: 'docVector',
		},
		{
			id: 3,
			text: 'Unlock exclusive job listings and internships available only to Spid-Education graduates.',
			imgSrc: '/usersVector.svg',
			altText: 'usersVector',
		},
	];
	return (
		<>
			<div className="bg-[url('/whiteBg.svg')] bg-no-repeat pt-12 pb-12 bg-cover max-md:bg-cover">
				<section>
					<div className='flex items-center gap-10 mb-16 max-md:flex-col md:max-xl:flex-col'>
						<div>
							<div className='p-2 mb-3 bg-white rounded-md w-fit'>
								<h1 className='text-start w-fit font-bold max-sm:text-[16px]  text-[#20B486] text-xl max-md:text-sm'>
									{' '}
									Benefits!
								</h1>
							</div>
							<h2
								className='font-bold text-start pb-6 w-fit
				 text-[#F49406] text-[50px] max-sm:text-[25px] font-koho max-md:text-xl md:max-xl:w-full'>
								Get Your Certificate!
							</h2>
							<div>
								{BenefitsCourses.map((courseBenefit) => (
									<div
										key={courseBenefit.id}
										className='mt-[22px] flex items-center gap-10 pb-5 leading-[1.8] text-xl max-sm:text-[14px] text-start '>
										<div className='p-4 bg-white rounded-full '>
											<img
												src={courseBenefit.imgSrc}
												className='w-full bg-white max-md:w-20'
												alt={courseBenefit.altText}
											/>
										</div>
										<p>{courseBenefit.text} </p>
									</div>
								))}
							</div>
						</div>
						<img
							src='/blurcertificate.png'
							alt='certificate'
						/>
					</div>

					<div className='flex gap-10 pb-5 text-start max-md:flex-col-reverse md:max-xl:flex-col-reverse'>
						<img
							src='/waitresslady.png'
							alt='waitresslady'
							className='object-contain'
						/>
						<div>
							<h1 className='mb-8 text-[50px] font-bold font-koho max-sm:text-[25px] text-[#20B486] md:max-xl:text-4xl'>
								Helping you Find a job!
							</h1>
							{moreBenefits.map((moreBenefit) => (
								<div
									key={moreBenefit.id}
									className='flex items-center gap-3 mb-8 max-md:gap-3'>
									<div className='p-4 bg-white rounded-full '>
										<img
											src={moreBenefit.imgSrc}
											className='bg-white'
											alt={moreBenefit.altText}
										/>
									</div>
									<p className='font-Poppins font-normal leading-[1.8] max-md:text-[14px] text-[20px]'>
										{moreBenefit.text}{' '}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>
			</div>
			<div className="pt-5 pb-5 bg-[url('/bgGroup.svg')] mb-10">
				<section className='flex justify-between text-white text-start'>
					<div className='max-md:text-center max-md:mx-3'>
						<p className='mb-10 text-5xl font-bold font-koho max-md:text-2xl '>
							Request In-Person Learning
						</p>
						<p className='mb-5 text-xl font-Poppins max-md:text-[15px] max-md:font-extralight'>
							Prefer face-to-face learning? Submit your request today for{' '}
							<br className='max-md:hidden'></br>
							engaging sessions that will elevate your skills!
						</p>
						<button className='p-3 mb-5 rounded-md  bg-[#F49406] text-white'>
							Request Now
						</button>
					</div>
					<img
						src='/groupdiscussing.png'
						alt='groupdiscussing'
						className='object-contain w-1/4 max-md:hidden'
					/>
				</section>
			</div>
		</>
	);
}

export default CertificationSection;
