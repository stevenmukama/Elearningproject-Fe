import { useState, useEffect } from 'react';
import numberImage from './../img/number.svg';
import fullStar from './../img/fullStar.svg';
import halfStar from './../img/halfStar.svg';
import './CourseSection.css';

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
			<section className='pt-16 max-sm:mx-8 md:max-xl:pt-0 max-sm:pt-0'>
				<div className='courses-section-header '>
					<h1 className='popular-courses max-sm:text-xl'>
						Our <span className='courses-title'>Courses</span>{' '}
					</h1>

					<div className='explore-course-container max-sm:gap-0 max-sm:items-center'>
						{windowWidth <= 768 ? (
							<h2 className='Explore-courses font-koho max-sm:text-[15px] '>
								More Courses
							</h2>
						) : (
							<h2 className='Explore-courses font-koho'>
								Explore courses
							</h2>
						)}

						<img
							src='/gosign.svg'
							className='w-5 pt-5 max-sm:h-3 max-sm:pt-1 max-sm:w-fit'
							alt='go-sign'
						/>
					</div>
				</div>
				<div className='flex flex-wrap gap-3 mb-6'>
					{courseLessons.map((courseLessons) => (
						<div key={courseLessons.id}>
							<button className='px-4 py-2 border rounded-md hoverTextButton hover:bg-[#20B486] active:bg-[#20B486] flex-wrap max-sm:text-[8px] max-sm:flex '>
								{courseLessons.text}
							</button>
						</div>
					))}
				</div>

				<div className=' container-card-item max-sm:flex-col max-sm:my-0 max-sm:mx-auto'>
					<div className='card-item'>
						<div className='card-image-item'>
							<div className='card-image'></div>
						</div>

						<div className='card-info'>
							<div className='lessons-rating md:max-xl:flex-col md:max-xl:items-start'>
								<div className='lessons-count '>
									<img
										src={numberImage}
										className='number-image'
									/>
									<p className='lessons-number max-sm:text-[1rem]'>
										{' '}
										10 Lessons
									</p>
								</div>
								<div className='rates max-sm:size-auto'>
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={halfStar} />
									<img src={halfStar} />
								</div>
							</div>
							<h2 className='card-title'>
								Professional Cleaning Mastery{' '}
							</h2>
							<p className='card-intro max-sm:text-[15px]'>
								Advanced Cleaning Techniques and Equipment Usage
							</p>
							<div className='discount-section'>
								<div className='dollar-discounted md:max-xl:text-[17px]'>
									<span className='dollar-numbers-five max-sm:text-[15px]'>
										{' '}
										$ 5
									</span>
									<span className='dollar-numbers-twenty max-sm:text-[15px]'>
										{' '}
										$ 20
									</span>
								</div>
								<button className='Enroll max-sm:text-xs max-sm:pt-3 max-sm:w-auto'>
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
										className='number-image'
									/>
									<p className='lessons-number max-sm:text-[1rem]'>
										{' '}
										10 Lessons
									</p>
								</div>
								<div className='rates max-sm:size-auto'>
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={halfStar} />
									<img src={halfStar} />
								</div>
							</div>
							<h2 className='card-title'>
								Professional Cleaning Mastery{' '}
							</h2>
							<p className='card-intro max-sm:text-[15px]'>
								Advanced Cleaning Techniques and Equipment Usage
							</p>
							<div className='discount-section'>
								<div className='dollar-discounted md:max-xl:text-[17px]'>
									<span className='dollar-numbers-five max-sm:text-[15px] '>
										{' '}
										$ 5
									</span>
									<span className='dollar-numbers-twenty max-sm:text-[15px]'>
										{' '}
										$ 20
									</span>
								</div>
								<button className='Enroll max-sm:text-xs max-sm:pt-3 max-sm:w-auto'>
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
										className='number-image'
									/>
									<p className='lessons-number max-sm:text-[1rem]'>
										10 Lessons
									</p>
								</div>
								<div className='rates max-sm:size-auto'>
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={fullStar} />
									<img src={halfStar} />
									<img src={halfStar} />
								</div>
							</div>
							<h2 className='card-title max-sm:text-[15px]'>
								Professional Cleaning Mastery{' '}
							</h2>
							<p className='card-intro max-sm:text-[15px]'>
								Advanced Cleaning Techniques and Equipment Usage
							</p>
							<div className='discount-section'>
								<div className='dollar-discounted md:max-xl:text-[17px]'>
									<span className='dollar-numbers-five max-sm:text-[15px]'>
										{' '}
										$ 5
									</span>
									<span className='dollar-numbers-twenty max-sm:text-[15px]'>
										{' '}
										$ 20
									</span>
								</div>
								<button className='Enroll max-sm:text-xs max-sm:pt-3 max-sm:w-auto'>
									Enroll Now
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-between w-1/2 text-center max-sm:flex-col max-sm:my-0 max-sm:mx-auto'>
					<div className='flex gap-3 max-sm:hidden'>
						<button className='bg-[#20B486] p-3 rounded'>
							<img src='/backVector.svg' />{' '}
						</button>
						<button className='bg-[#20B486] p-3  rounded'>
							<img src='/forwardVector.svg' />{' '}
						</button>
					</div>

					<div>
						<button className='explore-all-courses-button max-sm:text-[15px] max-sm:px-6 max-sm:py-3 max-sm:w-max'>
							Explore all course
						</button>
					</div>
				</div>
			</section>
		</>
	);
}

export default CourseSection;
