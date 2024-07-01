import { useState, useEffect } from 'react';
import numberImage from './../img/number.svg';
import fullStar from './../img/fullStar.svg';
import halfStar from './../img/halfStar.svg';
import './CourseSection.css';
import { Link } from 'react-router-dom';

const Courses = [
	{
		title: 'Professional Cleaning Course',
		intro:
			'Enhance Your Cleaning Skills, Learn Expert Techniques and Gain Experience!',
		imageClass: 'bg-[url("/professionalcleaningcentre.svg")]',
		lessons: 5,
		price: { discounted: '$10', original: '$20' },
	},
	{
		title: 'Professional Babysitting Course',
		intro:
			'Gain skills with our Babysitting Course, Elevate your childcare abilities!',
		imageClass: 'bg-[url("/babysitting.svg")]',
		lessons: 8,
		price: { discounted: '$10', original: '$20' },
	},
	{
		title: 'Waiter and Waitress Course',
		intro:
			'Refine your service expertise and master hospitality with our Waitress Courses!',
		imageClass: 'bg-[url("/waitercourse.svg")]',
		lessons: 10,
		price: { discounted: '$10', original: '$20' },
	},
];

const courseLessons = [
	{
		id: 1,
		text: 'All courses',
	},
	{
		id: 2,
		text: 'Leadership',
	},
	{
		id: 3,
		text: 'Language',
	},
	{
		id: 4,
		text: 'House Cleaning',
	},
	{
		id: 5,
		text: 'Baby-sitting',
	},
	{
		id: 6,
		text: 'Chief cook',
	},
	{
		id: 7,
		text: 'Elderly caretaker',
	},
	{
		id: 8,
		text: 'Waiter and Waitress',
	},
	{
		id: 9,
		text: 'Ushering',
	},
];

function CourseSection() {
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
			<section className='pt-16 max-md:mx-8 md:max-xl:pt-0 max-md:pt-0'>
				<div className='courses-section-header '>
					<h1 className='popular-courses max-md:text-xl'>
						Our <span className='courses-title'>Courses</span>{' '}
					</h1>
					<div className='explore-course-container max-md:gap-0 max-md:items-center max-md:w-1/3'>
						{windowWidth <= 768 ? (
							<Link to='/AllCoursesPage'>
								<h2 className='Explore-courses font-koho max-md:text-[15px] font-bold '>
									More Courses
								</h2>
							</Link>
						) : (
							<Link to='/AllCoursesPage'>
								<h2 className='Explore-courses font-koho'>
									Explore courses
								</h2>
							</Link>
						)}

						<img
							src='/gosign.svg'
							className='w-5 pt-5 max-md:h-3 max-md:pt-1 max-md:w-fit'
							alt='go-sign'
						/>
					</div>
				</div>
				<div
					className='flex overflow-hidden group'
					data-animated='true'>
					<div className='flex gap-4 animate-scroll group-hover:paused'>
						{courseLessons
							.concat(courseLessons)
							.map((courseLesson, index) => (
								<div
									key={index}
									className='inline-block mb-6 whitespace-nowrap'>
									<button className='px-4 py-2 inline-block border rounded-md hoverTextButton hover:bg-[#20B486] active:bg-[#20B486] max-md:text-[8px]'>
										{courseLesson.text}
									</button>
								</div>
							))}
					</div>
					<div
						aria-hidden='true'
						className='flex gap-4 group-hover:paused'>
						{courseLessons.map((courseLessons) => (
							<div
								key={courseLessons.id}
								className='inline-block mb-6 whitespace-nowrap'>
								<button className='px-4 py-2 inline-block border rounded-md hoverTextButton hover:bg-[#20B486] active:bg-[#20B486]  max-md:text-[8px]  '>
									{courseLessons.text}
								</button>
							</div>
						))}
					</div>
				</div>
				<div className='flex flex-wrap  justify-center pt-12 gap-x-10 gap-y-[62px]  font-Poppins'>
					{Courses.map((course, index) => (
						<div
							key={index}
							className='w-[31%] max-lg:w-2/5 max-md:w-[90%] bg-white rounded-md max-md:flex-col max-md:my-0 max-md:mx-auto'>
							<div
								className={`card-image-item ${course.imageClass} bg-cover  md:bg-center w-full h-[410px] max-sm:h-[214px]  max-sm:bg-cover max-sm:bg-no-repeat rounded-t-md`}></div>
							<div className='card-info max-md:h-435px max-md:h-auto max-sm:gap-2 '>
								<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
									<div className='flex items-center mb-2 lessons-count'>
										<img
											src={numberImage}
											className='number-image max-md:w-5 max-md:h-5 '
										/>
										<p className='text-[16.68px] font-Poppins font-medium max-md:text-xs'>{`${course.lessons} Modules`}</p>
									</div>
									<div className='flex rates'>
										{Array(3)
											.fill()
											.map((_, i) => (
												<img
													key={i}
													src={fullStar}
													alt='rating-star'
													className='max-md:w-3.5 max-md:h-3.5'
												/>
											))}
										{Array(2)
											.fill()
											.map((_, i) => (
												<img
													key={i}
													src={halfStar}
													alt='rating-star'
													className='max-md:w-3.5 max-md:h-3.5'
												/>
											))}
									</div>
								</div>
								<h2 className='font-bold py-3 font-Poppins md:h-[66px] max-sm:text-[15px] card-title'>
									{course.title}
								</h2>
								<p
									className='card-intro max-sm:text-[14px] overflow-hidden'
									style={{ height: '90px' }}>
									{course.intro}
								</p>
								<div className='discount-section max-lg:text-[15px]'>
									<div className='flex items-center dollar-discounted'>
										<span className='mr-2 text-3xl max-sm:text-[20px] dollar-numbers-five  '>
											{course.price.discounted}
										</span>
										<span className='max-sm:text-[17px] dollar-numbers-twenty'>
											{course.price.original}
										</span>
									</div>
									<button className='px-4 py-2 mt-2 max-sm:font-semibold max-sm:py-0  max-sm:h-[30px] max-sm:w-[83px] max-sm:px-0 max-sm:text-[12px] text-white rounded Enroll max-md:pt-3 max-md:w-auto'>
										Enroll Now
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				<div className='flex items-center justify-center text-center max-md:flex-col max-md:my-0 max-md:mx-auto'>
					<Link
						to='/AllCoursesPage'
						className='explore-all-courses-button max-md:text-[15px] max-md:px-6 max-md:py-3 max-md:w-max'>
						Explore all course
					</Link>
				</div>
			</section>
		</>
	);
}

export default CourseSection;
