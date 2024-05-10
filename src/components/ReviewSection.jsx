import { useState } from 'react';

const reviews = [
	{
		id: 1,
		comment:
			'Courses was fantastic! Spid-education is a master platform for \nthose looking to start a new career, or need a refresher.',
		imgSrc: '/ceoreviewimg.png',
		name: 'Danader - Nisral',
		role: 'Employee, Mayllos',
	},
	{
		id: 2,
		comment:
			'hi there! Spid-education is a master platform for \nthose looking to start a new career, or need a refresher.',
		imgSrc: '/ceoreviewimg.png',
		name: 'Danader - Nisral',
		role: 'Employee, Mayllos',
	},
];

function ReviewSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const handleDotClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<>
			<div className='bg-[#F0FAF7]'>
				<section className='p-8 mb-11 mt-11 max-sm:text-center'>
					{/* <h1 className='p-12 text-4xl text-center'>
						{reviews[activeIndex].comment}
					</h1> */}
					{reviews[activeIndex].comment.split('\n').map((line, index) => (
						<h1
							key={index}
							className='p-2 text-5xl text-center text-[#101828] max-sm:text-[22px]'>
							{line}
						</h1>
					))}

					<div className='relative items-center'>
						<div className='w-full p-4 transition-opacity duration-300 ease-in-out'>
							<img
								src={reviews[activeIndex].imgSrc}
								className='object-contain w-20 h-20 mx-auto mb-1 border rounded-full'
							/>
							<h2 className='mb-2 text-lg font-bold'>
								{reviews[activeIndex].name}
							</h2>
							<p className='text-gray-700'>{reviews[activeIndex].role}</p>
						</div>
						<div className='flex justify-center mt-4'>
							{reviews.map((_, index) => (
								<button
									key={index}
									className={`w-4 h-4 mx-1 rounded-full transition duration-300 ${
										index === activeIndex ? 'bg-[#20B486]' : 'bg-gray-300'
									}`}
									onClick={() => handleDotClick(index)}></button>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default ReviewSection;
