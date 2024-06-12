// import { Link } from 'react-router-dom';

// function SmallScreenMenuItems() {
// 	const handleCoursesClick = () => {
// 		console.log('Courses link clicked in SmallScreenMenuItems');
// 	};

// 	return (
// 		<>
// 			<div className='block pb-2'>Home</div>
// 			<Link
// 				to='/AllCoursesPage'
// 				className='relative flex items-center w-full gap-4 pb-2 nav-item'
// 				onClick={handleCoursesClick}>
// 				Courses
// 			</Link>

// 			<div className='block pb-2'>Contact us</div>
// 		</>
// 	);
// }

// export default SmallScreenMenuItems;

import { Link, useNavigate } from 'react-router-dom';

const SmallScreenMenuItems = () => {
	const navigate = useNavigate();

	const handleCoursesClick = (e) => {
		e.preventDefault(); // Prevent default navigation
		console.log('Courses link clicked in SmallScreenMenuItems');
		navigate('/AllCoursesPage'); // Navigate manually
	};

	return (
		<>
			<Link
				to='/'
				className='block pb-2'>
				Home
			</Link>
			<a
				href='/AllCoursesPage'
				className='relative flex items-center w-full gap-4 pb-2 nav-item'
				onClick={handleCoursesClick}>
				Courses
			</a>
			<div className='block pb-2'>Contact us</div>
		</>
	);
};

export default SmallScreenMenuItems;
