import { useState, useEffect } from 'react';
import numberImage from './../img/number.svg';
import fullStar from './../img/fullStar.svg';
import halfStar from './../img/halfStar.svg';
import './CourseSection.css';
import { Link } from 'react-router-dom';

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
				<div className=' container-card-item max-md:flex-col max-md:my-0 max-md:mx-auto'>
					<div className='card-item'>
						<div className='card-image-item'>
							<div className='card-image'></div>
						</div>

						<div className='card-info'>
							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
								<div className='lessons-count '>
									<img
										src={numberImage}
										className='number-image max-md:w-5 max-md:h-5'
									/>
									<p className='lessons-number text-[16.68px] max-md:text-xs'>
										{' '}
										5 Modules
									</p>
								</div>
								<div className='rates max-md:size-auto'>
									<img
										src={fullStar}
										className='max-md:w-[13px] max-md:h-[13px]'
										alt='rating-star'
									/>
									<img
										src={fullStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={fullStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={halfStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={halfStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
								</div>
							</div>
							<h2 className='card-title max-sm:text-[15px] py-3'>
								Professional Cleaning Course{' '}
							</h2>
							<p className='card-intro max-md:text-[15px] max-sm:text-[14px]'>
								Enhance Your Cleaning Skills, Learn Expert Techniques and
								Gain Experience!{' '}
							</p>
							<div className='discount-section'>
								<div className='dollar-discounted md:max-xl:text-[17px]'>
									<span className='mr-2 text-3xl max-sm:text-[20px] dollar-numbers-five'>
										{' '}
										$ 10
									</span>
									<span className='max-sm:text-[17px] dollar-numbers-twenty'>
										{' '}
										$ 20
									</span>
								</div>
								<button className='Enroll max-md:text-xs max-md:pt-3 max-md:w-auto'>
									Enroll Now
								</button>
							</div>
						</div>
					</div>

					<div className='card-item'>
						<div className='card-image-item'>
							<div className='card-image-2'></div>
						</div>

						<div className='card-info'>
							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
								<div className='lessons-count '>
									<img
										src={numberImage}
										className='number-image max-md:w-5 max-md:h-5'
									/>
									<p className='lessons-number text-[16.68px] max-md:text-xs'>
										{' '}
										8 Modules
									</p>
								</div>
								<div className='rates max-md:size-auto'>
									<img
										src={fullStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={fullStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={fullStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={halfStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={halfStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
								</div>
							</div>
							<h2 className='card-title max-sm:text-[15px] py-3'>
								Professional Babysitting Course
							</h2>
							<p className='card-intro max-md:text-[15px]'>
								Gain skills with our Babysitting Course, Elevate your
								childcare abilities!{' '}
							</p>
							<div className='discount-section'>
								<div className='dollar-discounted md:max-xl:text-[17px]'>
									<span className='mr-2 text-3xl max-sm:text-[20px] dollar-numbers-five'>
										{' '}
										$ 10
									</span>
									<span className='max-sm:text-[17px] dollar-numbers-twenty'>
										{' '}
										$ 20
									</span>
								</div>
								<button className='Enroll max-md:text-xs max-md:pt-3 max-md:w-auto'>
									Enroll Now
								</button>
							</div>
						</div>
					</div>

					<div className='card-item'>
						<div className='card-image-item'>
							<div className='card-image-3'></div>
						</div>

						<div className='card-info'>
							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
								<div className='lessons-count'>
									<img
										src={numberImage}
										className='number-image max-md:w-5 max-md:h-5'
									/>
									<p className='lessons-number text-[16.68px] max-md:text-xs'>
										10 Modules
									</p>
								</div>
								<div className='rates max-md:size-auto'>
									<img
										src={fullStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={fullStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={fullStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={halfStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
									<img
										src={halfStar}
										alt='rating-star'
										className='max-md:w-[13px] max-md:h-[13px]'
									/>
								</div>
							</div>
							<h2 className='card-title max-sm:text-[15px] py-3'>
								Waiter and Waitress Course{' '}
							</h2>
							<p className='card-intro max-md:text-[15px]'>
								Refine your service expertise and master hospitality with
								our Waits Courses!{' '}
							</p>
							<div className='discount-section'>
								<div className='dollar-discounted md:max-xl:text-[17px]'>
									<span className='mr-2 text-3xl max-sm:text-[20px] dollar-numbers-five'>
										{' '}
										$ 10
									</span>
									<span className='max-sm:text-[17px] dollar-numbers-twenty'>
										{' '}
										$ 20
									</span>
								</div>
								<button className='Enroll max-md:text-xs max-md:pt-3 max-md:w-auto'>
									Enroll Now
								</button>
							</div>
						</div>
					</div>
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
