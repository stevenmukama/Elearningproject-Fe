import { useState, useRef } from 'react';

const reviews = [
	{
		id: 1,
		comment:
			'Courses were fantastic! Spid-education is a master platform for \nthose looking to start a new career, or need a refresher.',
		imgSrc: '/ceoreviewimg.png',
		name: 'Danader - Nisral',
		role: 'Employee, Mayllos',
	},
	{
		id: 2,
		comment:
			'Hi there! Spid-education is a master platform for \nthose looking to start a new career, or need a refresher.',
		imgSrc: '/ceoreviewimg.png',
		name: 'Danader - Nisral',
		role: 'Employee, Mayllos',
	},
	{
		id: 3,
		comment:
			'Spid-education helped me gain new skills and advance in my career. Highly recommended!',
		imgSrc: '/ceoreviewimg.png',
		name: 'Samira - Keel',
		role: 'Manager, TechCorp',
	},
];

function ReviewSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [clickedIndex, setClickedIndex] = useState(null);
	const touchStartX = useRef(0);
	const touchEndX = useRef(0);

	const handleTouchStart = (e) => {
		touchStartX.current = e.targetTouches[0].clientX;
	};

	const handleTouchMove = (e) => {
		touchEndX.current = e.targetTouches[0].clientX;
	};

	const handleTouchEnd = () => {
		const deltaX = touchStartX.current - touchEndX.current;
		if (deltaX > 50 && activeIndex < reviews.length - 1) {
			handleSwipe(activeIndex + 1);
		} else if (deltaX < -50 && activeIndex > 0) {
			handleSwipe(activeIndex - 1);
		}
	};

	const handleSwipe = (index) => {
		setActiveIndex(index);
		setClickedIndex(index);
		setTimeout(() => setClickedIndex(null), 300); // Reset clickedIndex after 300ms
	};

	const handleDotClick = (index) => {
		setActiveIndex(index);
		setClickedIndex(index);
		setTimeout(() => setClickedIndex(null), 300); // Reset clickedIndex after 300ms
	};

	return (
		<>
			<div className='bg-[#F0FAF7]'>
				<section
					className='p-8 mb-11 mt-11 max-md:text-center max-md:p-0'
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}>
					{reviews[activeIndex].comment
						.split('\n')
						.map((comment, index) => (
							<h1
								key={index}
								className='p-2 text-4xl text-center text-[#101828] max-md:text-[22px]'>
								{comment}
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
									className={`mx-1 rounded-full transition-all duration-300 ${
										index === activeIndex
											? 'bg-[#20B486] w-12 h-4'
											: 'bg-gray-300 w-4 h-4'
									} ${index === clickedIndex ? 'w-12' : ''}`}
									onClick={() => handleDotClick(index)}
									style={{
										width:
											index === activeIndex || index === clickedIndex
												? '48px'
												: '16px',
										height: '16px',
									}}></button>
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export default ReviewSection;
