import { useState, useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import logo from './../img/spidedlogo.svg';
import './Navbar.css';
// import link from react
import { Link } from 'react-router-dom';

const languages = [
	{
		value: 'English',
		label: 'English',
		flag: '/EnglishLang.svg',
	},
	{
		value: 'French',
		label: 'French',
		flag: '/FrenchLang.svg',
	},
];

const Navbar = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isOpen, setIsOpen] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
	const dropdownRef = useRef(null);
	const contactFormRef = useRef(null);
	const [isSmallScreenMenuOpen, setIsSmallScreenMenuOpen] =
		useState(false);
	const smallScreenMenuRef = useRef(null);
	const buttonRef = useRef(null);
	const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] =
		useState(false);
	const [isContactFormOpen, setIsContactFormOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			if (window.innerWidth > 768) {
				setIsSmallScreenMenuOpen(false);
			}
		};

		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
			if (buttonRef.current && !buttonRef.current.contains(event.target)) {
				setIsSmallScreenMenuOpen(false);
			}
			if (
				contactFormRef.current &&
				!contactFormRef.current.contains(event.target)
			) {
				setIsContactFormOpen(false);
			}
		};

		window.addEventListener('resize', handleResize);
		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			window.removeEventListener('resize', handleResize);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleLanguageChange = (lang) => {
		setSelectedLanguage(lang);
		setIsOpen(false);
	};

	const toggleSmallScreenMenu = () => {
		setIsSmallScreenMenuOpen(!isSmallScreenMenuOpen);
	};

	const handleNavItemClick = (section) => {
		setIsOpen(false);
		setIsSmallScreenMenuOpen(false);
		document
			.getElementById(section)
			?.scrollIntoView({ behavior: 'smooth' });
	};

	const coursesDropdownItems = [
		'Leadership',
		'House Cleaning',
		'Baby sitting',
		'Chief Cook',
		'Elderly caretaker',
		'Waiter & Waitress',
		'Receptionist',
		'Public Speaking',
		'Communication Skills',
		'Story Writing',
		'Ushering',
		'Business Management',
		'Human Resource',
		'Customer Care',
		'Project Management',
		'Sales',
		'Supervision',
		'Logistics',
		'Presentation Skills',
		'Social Media Management',
		'Operation',
		'Health care',
		'Adult Education',
		'Digital Marketing',
	];

	return (
		<>
			<nav className='Navbar border-b border-solid border-[#d6d2d2]'>
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
					<Link
						to='/'
						className='nav-item max-md:hidden'
						onClick={() => handleNavItemClick('home')}>
						Home
					</Link>
					<div
						className='relative nav-item max-md:hidden'
						onMouseEnter={() => setIsCoursesDropdownOpen(true)}
						onMouseLeave={() => setIsCoursesDropdownOpen(false)}>
						<div className='flex items-center w-full gap-4'>
							Courses
							<img
								src='/moreCoursesIcon.webp'
								alt='arrowRightUpIcon'
								className='w-auto h-auto'
							/>
						</div>
					</div>

					<Link
						to='/certificationPage'
						className='nav-item max-md:hidden'>
						Cert Verification
					</Link>
					<a
						className='nav-item max-md:hidden'
						onClick={() =>
							setIsContactFormOpen((prevState) => !prevState)
						}>
						Contact us
					</a>

					<a className='nav-item'>Sign in </a>
					{windowWidth <= 768 ? (
						<a className='button box-account'>Sign up </a>
					) : (
						<a className='button box-account'>Create account </a>
					)}
					<div
						className={` ${
							isOpen ? 'hidden max-md:block open' : 'hidden max-md:block'
						}`}>
						<button
							ref={buttonRef}
							className='border max-md:border-[#888686] max-md:mt-2 max-md:border-solid max-md:border max-md:rounded-lg'
							onClick={toggleSmallScreenMenu}>
							<img
								src='/smallScreenToggle.svg'
								className='pl-2 pr-2 max-md:w-8 max-md:h-8'
							/>
						</button>
					</div>

					<div
						className='px-4 py-3 w-max bg-[#4B4B4B] text-white rounded-md  max-md:hidden  cursor-pointer relative'
						ref={dropdownRef}>
						<div
							className='bg-[#4B4B4B] text-white flex items-center gap-2'
							onClick={(e) => {
								e.stopPropagation();
								setIsOpen(!isOpen);
							}}>
							<img
								src={selectedLanguage.flag}
								alt={selectedLanguage.label}
								className='w-6 h-6'
							/>
							<span>{selectedLanguage.label}</span>
							<img src='/downEng.svg' />
						</div>
						{isOpen && (
							<ul className='absolute left-0 bg-[#4B4B4B] text-white rounded-md mt-2 w-full z-50'>
								{languages.map((lang) => (
									<li
										key={lang.value}
										className='flex items-center px-4 py-3 gap-2 cursor-pointer hover:bg-[#3a3a3a]'
										onClick={() => handleLanguageChange(lang)}>
										<img
											src={lang.flag}
											alt={lang.label}
											className='w-6 h-6 '
										/>
										<span>{lang.label}</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</nav>
			{isContactFormOpen && (
				<div className='inset-0 z-10 flex items-center justify-center mt-16 bg-black bg-opacity-50 '>
					<div
						ref={contactFormRef}
						className='w-4/5 p-6 bg-white rounded shadow-lg max-md:w-1/2'>
						<div className='flex justify-end gap-4 pt-2 pr-16'>
							<span
								onClick={() => setIsContactFormOpen(false)}
								className='p-3 text-2xl font-bold text-gray-500 bg-black rounded-r-none cursor-pointer rounded-xl float- hover:text-black'>
								<img
									src='/closeContactVector.svg'
									alt='closeContactVector'
									className='w-auto h-auto'
								/>
							</span>
							<p
								onClick={() => setIsContactFormOpen(false)}
								className='p-3 text-white bg-black rounded-l-none font-koho rounded-xl'>
								Close
							</p>
						</div>
						<div className='z-50'>
							<ContactForm />
						</div>
					</div>
				</div>
			)}
			{isCoursesDropdownOpen && (
				<div className='absolute block mx-auto left-0 top-16 right-0 z-50 mt-4 w-3/4 rounded-md shadow-lg bg-[#F0FAF7] '>
					<div className='relative flex justify-between px-4 pt-6'>
						<span className='text-[#24D198] text-2xl font-bold font-koho'>
							Course Categories
						</span>
						<span className='flex items-center gap-1 cursor-pointer bg-white p-3 text-black hover:text-[#24D198]'>
							View All
							<img
								src='/arrowRightIcon.svg'
								alt='arrowRightUpIcon'
								className='w-auto h-auto'
							/>
						</span>
					</div>
					<ul className='py-2'>
						{[...Array(5)].map((_, rowIndex) => (
							<div
								key={rowIndex}
								className='flex items-center '>
								{[...Array(5)].map((_, colIndex) => (
									<li
										key={colIndex}
										className={`px-4 py-2 text-start items-center w-1/5 text-black hover:text-[#24D198] cursor-pointer ${coursesDropdownItems[rowIndex * 5 + colIndex] === 'Coming Soon' ? 'bg-white p-2' : ''}`}>
										{coursesDropdownItems[rowIndex * 5 + colIndex]}
									</li>
								))}
							</div>
						))}
					</ul>
				</div>
			)}
			{isSmallScreenMenuOpen && (
				<div
					ref={smallScreenMenuRef}
					className='bg-[#4B4B4B] text-white pt-[60px] px-4 rounded-lg'>
					<a
						className='block pb-2'
						onClick={() => handleNavItemClick('home')}>
						Home
					</a>
					<div className='relative block pb-2 nav-item'>
						<div className='flex items-center w-full gap-4'>
							Courses
							<img
								src='/moreCoursesIcon.webp'
								alt='arrowRightUpIcon'
								className='w-auto h-auto'
							/>
						</div>
					</div>
					<a
						className='block pb-2'
						onClick={() => handleNavItemClick('contact')}>
						Contact us
					</a>
				</div>
			)}

			<div className='border-b border-solid border-[#d6d2d2] mt-2 w-full'></div>
		</>
	);
};

export default Navbar;
