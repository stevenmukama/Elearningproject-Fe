import { useState, useEffect } from 'react';
import logo from './../img/spidedlogo.svg';
import search from './../img/search.svg';
import icon from './../img/Icon.svg';
import './Navbar.css';
const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const [isOpen, setIsOpen] = useState(false);

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
			<nav className='Navbar'>
				{windowWidth <= 768 ? (
					<img
						src='/smallLogo.svg'
						alt='Logo'
						className='h-auto'
					/>
				) : (
					<img
						src={logo}
						alt='Logo'
						className='nav-logo'
					/>
				)}
				<div className={`nav-items ${isOpen && 'open'}`}>
					<a className='nav-item max-sm:hidden'>Home</a>
					<a className='nav-item max-sm:hidden'>Courses</a>
					<a className='nav-item max-sm:hidden'>Contact us</a>
					<div className='searchbox-text max-sm:hidden'>
						<div className='search-box'>
							<img
								src={search}
								alt='search'
								className='search'
							/>
							<input
								className='search-input'
								placeholder='What do you want to learn?'
							/>
						</div>
						<div className='explore-more'>
							<p className='explore-more-text'>Explore</p>
							<img
								src={icon}
								alt='down-icon'
								className='explore-more-icon'
							/>
						</div>
					</div>
					<a className='nav-item'>Sign in </a>{' '}
					<a className='button box-account'>Sign up </a>
					<div className='hidden max-sm:block'>
						<button className='border max-sm:border-[#888686] max-sm:mt-2 max-sm:border-solid max-sm:border max-sm:rounded-lg'>
							<img
								src='/smallScreenToggle.svg'
								className='pl-2 pr-2 max-sm:w-8 max-sm:h-8'
							/>
						</button>
					</div>
				</div>
				<div
					className={`nav-toggle ${isOpen && 'open'}`}
					onClick={() => setIsOpen(!isOpen)}>
					<div className='bar'></div>
				</div>
			</nav>
			<hr className='w-auto my-3 border border-solid' />
		</>
	);
};

export default Navbar;
