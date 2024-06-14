import { useState, useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import logo from './../img/spidedlogo.svg';
import './Navbar.css';
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
	const buttonRef = useRef(null);
	const smallScreenMenuRef = useRef(null);
	const coursesDropdownRef = useRef(null);
	const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] =
		useState(false);
	const [isContactFormOpen, setIsContactFormOpen] = useState(false);
	const ItemRef = useRef(null);

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
			if (
				smallScreenMenuRef.current &&
				!smallScreenMenuRef.current.contains(event.target)
			) {
				setIsSmallScreenMenuOpen(false);
			}

			if (
				smallScreenMenuRef.current &&
				!smallScreenMenuRef.current.contains(event.target) &&
				buttonRef.current &&
				!buttonRef.current.contains(event.target)
			) {
				setIsSmallScreenMenuOpen(false);
			}
			if (
				contactFormRef.current &&
				!contactFormRef.current.contains(event.target)
			) {
				setIsContactFormOpen(false);
			}
			if (ItemRef.current && ItemRef.current.contains(event.target)) {
				setIsSmallScreenMenuOpen(false);
			}
			if (
				coursesDropdownRef.current &&
				!coursesDropdownRef.current.contains(event.target)
			) {
				setIsCoursesDropdownOpen(false);
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

	const closeSmallScreenMenu = () => {
		setIsSmallScreenMenuOpen(false);
	};

	const toggleSmallScreenMenu = () => {
		setIsSmallScreenMenuOpen((prevState) => !prevState);
		console.log('clicked', isSmallScreenMenuOpen);
	};
	useEffect(() => {
		console.log('clicked', isSmallScreenMenuOpen);
	}, [isSmallScreenMenuOpen]);

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
			<nav className='flex justify-between py-2 px-[60px] max-md:px-[30px] items-center bg-white max-xl:text-[15px] fixed top-0 w-full z-[999] border-b border-solid border-[#d6d2d2] '>
				{windowWidth <= 768 ? (
					<>
						<Link to='/'>
							<img
								src='/smallLogo.svg'
								alt='Logo'
								className='h-auto'
							/>
						</Link>
					</>
				) : (
					<>
						<Link to='/'>
							<img
								src={logo}
								alt='Logo'
								className='max-xl:w-[140px] max-xl:h-[52px]'
							/>
						</Link>
					</>
				)}
				<div
					className={`flex gap-3 items-center max-lg:flex max-lg:gap-3 max-lg:text-[12px] ${isOpen && 'open'}`}>
					<Link
						to='/'
						className='nav-item max-md:hidden'>
						Home
					</Link>
					<div
						ref={coursesDropdownRef}
						className='relative nav-item max-md:hidden'
						onMouseEnter={() => setIsCoursesDropdownOpen(true)}>
						<div className='flex items-center w-full gap-2'>
							Courses
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2.5}
								stroke='currentColor'
								className='size-6'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='m19.5 8.25-7.5 7.5-7.5-7.5'
								/>
							</svg>
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
			{isSmallScreenMenuOpen && (
				<div
					ref={smallScreenMenuRef}
					className='relative top-16'>
					<div className='bg-[#4B4B4B] flex justify-between h-screen'>
						<div className='relative flex flex-col flex-wrap w-full px-[30px] text-white rounded-lg pt-7'>
							<Link
								onClick={() => {
									closeSmallScreenMenu();
								}}
								to='/'
								className='pb-5 text-sm'>
								Home
							</Link>
							<Link
								onClick={() => {
									closeSmallScreenMenu();
								}}
								to='/AllCoursesPage'
								className='pb-5 text-sm'>
								Courses
							</Link>
							<Link
								onClick={() => {
									closeSmallScreenMenu();
								}}
								to='/certificationPage'
								className='pb-5 text-sm'>
								Cert Verification
							</Link>
							<div
								className='pb-5 text-sm'
								onClick={() => {
									setIsContactFormOpen((prevState) => !prevState);
									closeSmallScreenMenu();
								}}>
								Contact us
							</div>
							<div
								className=' py-3 w-max bg-[#4B4B4B] text-white rounded-md cursor-pointer relative'
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
						<img
							src='closeScreenButton.svg'
							alt='closeScreenButton'
							className='h-fit pt-[40px] pr-[30px]'
							onClick={closeSmallScreenMenu}
						/>
					</div>
				</div>
			)}

			{isCoursesDropdownOpen && (
				<div className='absolute block mx-auto left-0 top-16 right-0 z-50 w-3/4 rounded-md shadow-lg bg-[#F0FAF7] '>
					<div className='relative flex justify-between pt-6 pl-4 pr-8'>
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
					<div className='py-2'>
						{Array.from({ length: 5 }).map((_, rowIndex) => (
							<div
								key={rowIndex}
								className='flex'>
								{Array.from({ length: 5 }).map((_, colIndex) => {
									const course =
										coursesDropdownItems[rowIndex * 5 + colIndex];
									return (
										<div
											key={colIndex}
											className={`px-4 py-2 text-start w-1/5 text-black hover:text-[#24D198] cursor-pointer ${
												course === 'Coming Soon' ? 'bg-white p-2' : ''
											}`}>
											{course}
										</div>
									);
								})}
							</div>
						))}
					</div>
				</div>
			)}

			{isContactFormOpen && (
				<div className='inset-0 z-10 flex items-center justify-center mt-16 bg-black bg-opacity-50 '>
					<div
						ref={contactFormRef}
						className='w-4/5 p-6 bg-white rounded shadow-lg '>
						<div className='flex justify-end gap-4 pt-2 pr-16 max-md:gap-8'>
							<span
								onClick={() => setIsContactFormOpen(false)}
								className='p-3 text-xl font-bold text-gray-500 bg-black rounded-r-none cursor-pointer rounded-xl hover:text-black'>
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

			<div className='border-b border-solid border-[#d6d2d2] mt-2 w-full'></div>
		</>
	);
};

export default Navbar;
