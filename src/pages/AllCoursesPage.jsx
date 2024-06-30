import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';
import numberImage from './../img/number.svg';
import fullStar from './../img/fullStar.svg';
import halfStar from './../img/halfStar.svg';
import '../components/CourseSection.css';
import { useState, useEffect } from 'react';

function AllCoursesPage() {
	const courses = [
		{
			title: 'Professional Cleaning Course',
			intro:
				'Enhance Your Cleaning Skills, Learn Expert Techniques and Gain Experience!',
			imageClass: 'bg-[url("/professionalcleaningcentre.svg")]',
			lessons: 10,
			price: { discounted: '$10', original: '$20' },
		},
		{
			title: 'Professional Babysitting Course',
			intro:
				'Gain skills with our Babysitting Course, Elevate your childcare abilities!',
			imageClass: 'bg-[url("/babysitting.svg")]',
			lessons: 10,
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
		{
			title: 'Professional elderly caretaker course',
			intro:
				'Gain expertise in providing compassionate support and companionship care for seniors!',
			imageClass: 'bg-[url("/professionalElderlyCourse.png")]',
			lessons: 8,
			price: { discounted: '$10', original: '$20' },
		},
		{
			title: 'Reception / Front - Desk Course',
			intro:
				'Hone receptionist skills with our course, mastering service and organization at the front desk!',
			imageClass: 'bg-[url("/receptionCourse.png")]',
			lessons: 8,
			price: { discounted: '$10', original: '$20' },
		},
		{
			title: 'Ushering Course',
			intro:
				'Elevate ushering skills with our course! Learn to provide top-notch assistance and create memorable experiences!',
			imageClass: 'bg-[url("/usheringCourse.png")]',
			lessons: 7,
			price: { discounted: '$10', original: '$20' },
		},
		{
			title: 'Public Speaking Course',
			intro:
				'Master the art of public speaking ! Build confidence and captivate any audience with your impactful presentations!',
			imageClass: 'bg-[url("/PublicSpeakingCourse.png")]',
			lessons: 6,
			price: { discounted: '$10', original: '$20' },
		},
		{
			title: 'Presentation skills',
			intro:
				'Polish your presentation skills with our tailored program! Acquire techniques and confidence for impactful communication!',
			imageClass: 'bg-[url("/PresentationSkills.png")]',
			lessons: 10,
			price: { discounted: '$10', original: '$20' },
		},
		{
			title: 'Personal Development',
			intro:
				'Explore tools and practices to unlock your full potential and achieve personal and professional fulfillment.',
			imageClass: 'bg-[url("/PersonalDevelopment.png")]',
			lessons: 8,
			price: { discounted: '$10', original: '$20' },
		},
		{
			title: 'Professional chief cook - Course',
			intro:
				'Discover your cooking talents with our Professional Chef Course! Learn to cook like a pro and love every moment of it!',
			imageClass: 'bg-[url("/professionalChiefCourse.png")]',
			lessons: 8,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Professional Story Writing Course',
			intro:
				'Craft captivating stories with expertise! Master the art of storytelling and unleash your creativity.',
			imageClass: 'bg-[url("/ProfessionalStoryWritingCourse.png")]',
			lessons: 10,
			price: { discounted: '$15', original: '$30' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Business Management',
			intro:
				'Gain essential skills and strategies for effective Business management and growth!',
			imageClass: 'bg-[url("/BusinessManagement.png")]',
			lessons: 12,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Human Resource',
			intro:
				'Unlock the power of your workforce with our HR expertise! Gain essential skills for effective management and development!',
			imageClass: 'bg-[url("/HumanResource.png")]',
			lessons: 12,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Customer Care',
			intro:
				'Acquire essential skills and strategies for exceptional customer care and retention with our expertise!',
			imageClass: 'bg-[url("/CustomerCare.png")]',
			lessons: 10,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Project Management',
			intro:
				'Excel in project management with our expert guidance and proven strategies for success!',
			imageClass: 'bg-[url("/ProjectManagement.png")]',
			lessons: 12,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Sales Management and Strategies',
			intro:
				'Unlock the secrets of successful sales with our tailored guidance and proven strategies for aspiring sales professionals!',
			imageClass: 'bg-[url("/SalesManagementStrategies.png")]',
			lessons: 10,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Supervision',
			intro:
				'Refine your supervision skills with our expert strategies for effective oversight and direction!',
			imageClass: 'bg-[url("/Supervision.png")]',
			lessons: 10,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Logistics Program',
			intro:
				'Excel in logistics with our program! Acquire essential skills and knowledge for efficient supply chain management!',
			imageClass: 'bg-[url("/LogisticsProgram.png")]',
			lessons: 15,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Social Media Management',
			intro:
				'Master social media management! Acquire essential skills and strategies for success in the digital landscape!',
			imageClass: 'bg-[url("/SocialMediaManagement.png")]',
			lessons: 15,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Operations & Supply Chain Management',
			intro:
				'Excel in planning & controlling business operations while managing the supply chain to boost efficiency in any industry.',
			imageClass: 'bg-[url("/Operations&SupplyChain.png")]',
			lessons: 12,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Healthcare Management',
			intro:
				'Master the skills to innovate, manage, and enhance healthcare systems for optimal patient care and efficiency.',
			imageClass: 'bg-[url("/HealthcareManagement.png")]',
			lessons: 25,
			price: { discounted: '$150', original: '$220' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Adult Relationship Wellness',
			intro:
				'Enhance communication, intimacy, & mutual understanding in your relationship alongside other adult education offerings.',
			imageClass: 'bg-[url("/AdultRelationshipWellness.png")]',
			lessons: 20,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Digital Marketing',
			intro:
				'Unlock the strategies and tools to thrive in the ever-evolving world of digital marketing.',
			imageClass: 'bg-[url("/DigitalMarketing.png")]',
			lessons: 12,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
		{
			title: 'Skills and Talent Monetization',
			intro:
				'Learn how to effectively monetize your skills and expertise to maximize your earning potential.',
			imageClass: 'bg-[url("/SkillsTalentMonetization.png")]',
			lessons: 10,
			price: { discounted: '$25', original: '$40' },
			courseHours: [
				'Google -Meetings',
				'Physical Classes',
				'Time | 336 Hours',
			],
		},
	];

	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(
				setIsSmallScreen(
					window.innerWidth < 768 && window.innerWidth > 1024
				)
			);
		};

		window.addEventListener('resize', handleResize);
		handleResize();

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const truncateText = (text, wordLimit) => {
		const words = text.split(' ');
		if (words.length > wordLimit) {
			return words.slice(0, wordLimit).join(' ') + '...';
		}
		return text;
	};

	const [currentPage, setCurrentPage] = useState(1);
	const coursesPerPage = 9;
	const totalPages = Math.ceil(courses.length / coursesPerPage);

	const paginate = (array, page_size, page_number) => {
		return array.slice(
			(page_number - 1) * page_size,
			page_number * page_size
		);
	};

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		scrollToTop();
	}, [currentPage]);

	const currentCourses = paginate(courses, coursesPerPage, currentPage);

	return (
		<>
			<Navbar />
			<section className='pt-16 max-sm:mx-8 '>
				<div className='bg-[#07614C] pt-10 pb-8 max-sm:py-12 flex-col rounded-[30px] mt-8 h-[689px] max-sm:h-auto'>
					<h1 className='font-koho pt-[123px] max-sm:pt-0 font-bold text-[70px] max-sm:text-[30px] text-[#F49406]'>
						Our Courses{' '}
					</h1>
					<p className='py-14 max-sm:py-6 w-[85%] max-sm:leading-[2] mx-auto text-center text-white font-medium text-[25px] max-sm:text-[15px] font-Poppins'>
						Begin Your Exciting Journey of Exploration: Dive Into Our Wide
						Selection of Courses and Find The Ideal One for Your Learning
						Adventure!
					</p>
					<div className='block w-1/2 max-sm:w-2/3  mx-auto h-[62px] max-sm:h-[40px] bg-white/50 rounded-xl '>
						<div className='flex items-center  h-[62px] max-sm:h-[40px] justify-center text-[rgba(30,30,30,0.5)]'>
							<img
								src='/searchCourses.svg'
								alt='searchCourses'
								className='w-auto pl-[10px] max-sm:h-[13px]'
							/>
							<input
								type='text'
								className='w-full p-2 outline-none text-xl max-sm:text-[12px] text- bg-transparent font-Poppins'
								placeholder='Search a course'
							/>
						</div>
					</div>
				</div>
			</section>
			<div className='bg-[#D8F6EC]'>
				<div className='flex flex-wrap mt-[62px] justify-center pt-12 gap-x-11 gap-y-[62px]  font-Poppins'>
					{currentCourses.map((course, index) => (
						<div
							key={index}
							className='w-[29%] max-lg:w-2/5 max-md:w-[90%] bg-white rounded-md max-md:flex-col max-md:my-0 max-md:mx-auto'>
							{course.courseHours && (
								<div className='py-4 bg-white rounded-lg'>
									<div className='flex px-0 leading-[2] max-sm:text-[11px] max-[375px]:text-[9px]  md:max-xl:text-[13px] max-sm:px-0 justify-center  text-[rgba(0.3,0.3,0.3,0.5)] text-[15px]  font-Poppins'>
										{course.courseHours.map((hour, index) => (
											<p
												key={index}
												className={`${
													index === 0
														? 'border-r-0 border-l rounded-l-md pl-1 mr-2 border border-[rgba(32,180,134,0.5)]'
														: index === 2
															? 'border-l-0 ml-2 px-0  border border-[rgba(32,180,134,0.5)] rounded-r-md pr-1 '
															: 'px-0 border border-[rgba(32,180,134,0.5)]  '
												} py-1`}>
												{hour}
											</p>
										))}
									</div>
								</div>
							)}

							<div
								className={`card-image-item ${course.imageClass} bg-cover  md:bg-center w-full h-[410px] max-sm:h-[214px]  max-sm:bg-cover max-sm:bg-no-repeat`}></div>
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
									style={{ height: '81px' }}>
									{isSmallScreen
										? truncateText(course.intro, 10)
										: course.intro}
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
				<div className='flex justify-center mt-[62px] pb-[62px]'>
					{Array.from({ length: totalPages }, (_, i) => (
						<button
							key={i + 1}
							className={`mx-1 cursor-pointer px-3 py-1  rounded-full ${
								currentPage === i + 1
									? 'bg-[#24D198] border-[#24D198] text-[#1E1E1E]'
									: 'bg-none border border-black '
							}`}
							onClick={() => setCurrentPage(i + 1)}>
							{i + 1}
						</button>
					))}
				</div>
				<FooterSection />
			</div>
		</>
	);
}

export default AllCoursesPage;
