// import { useState, useEffect, useRef } from 'react';
// import logo from './../img/spidedlogo.svg';
// import './Navbar.css';

// const languages = [
// 	{
// 		value: 'English',
// 		label: 'English',
// 		flag: '/EnglishLang.svg',
// 	},
// 	{
// 		value: 'French',
// 		label: 'French',
// 		flag: '/FrenchLang.svg',
// 	},
// ];

// const Navbar = () => {
// 	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// 	const [isOpen, setIsOpen] = useState(false);
// 	const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
// 	const dropdownRef = useRef(null);
// 	const [isSmallScreenMenuOpen, setIsSmallScreenMenuOpen] =
// 		useState(false);
// 	const smallScreenMenuRef = useRef(null);

// 	useEffect(() => {
// 		const handleResize = () => {
// 			setWindowWidth(window.innerWidth);
// 		};

// 		const handleClickOutside = (event) => {
// 			if (
// 				dropdownRef.current &&
// 				!dropdownRef.current.contains(event.target) &&
// 				smallScreenMenuRef.current &&
// 				!smallScreenMenuRef.current.contains(event.target)
// 			) {
// 				setIsSmallScreenMenuOpen(false);
// 			}
// 		};

// 		window.addEventListener('resize', handleResize);
// 		document.addEventListener('mousedown', handleClickOutside);

// 		return () => {
// 			window.removeEventListener('resize', handleResize);
// 			document.removeEventListener('mousedown', handleClickOutside);
// 		};
// 	}, []);

// 	const handleLanguageChange = (lang) => {
// 		setSelectedLanguage(lang);
// 		// setIsOpen(false);
// 		setIsOpen(!isOpen);
// 	};

// 	const toggleSmallScreenMenu = () => {
// 		setIsSmallScreenMenuOpen(!isSmallScreenMenuOpen);
// 		setIsOpen(false); // Close the dropdown menu if open
// 	};

// 	const handleNavItemClick = (section) => {
// 		setIsSmallScreenMenuOpen(false);
// 		// Add your navigation logic here, for example:
// 		document
// 			.getElementById(section)
// 			?.scrollIntoView({ behavior: 'smooth' });
// 	};

// 	return (
// 		<>
// 			<nav className='Navbar'>
// 				{windowWidth <= 768 ? (
// 					<img
// 						src='/smallLogo.svg'
// 						alt='Logo'
// 						className='h-auto'
// 					/>
// 				) : (
// 					<img
// 						src={logo}
// 						alt='Logo'
// 						className='nav-logo'
// 					/>
// 				)}
// 				<div className={`nav-items ${isOpen && 'open'}`}>
// 					<a
// 						className='nav-item max-md:hidden'
// 						onClick={() => handleNavItemClick('home')}>
// 						Home
// 					</a>
// 					<a
// 						className='nav-item max-md:hidden'
// 						onClick={() => handleNavItemClick('courses')}>
// 						Courses
// 					</a>
// 					<a
// 						className='nav-item max-md:hidden'
// 						onClick={() => handleNavItemClick('contact')}>
// 						Contact us
// 					</a>
// 					<a className='nav-item'>Sign in </a>
// 					{windowWidth <= 768 ? (
// 						<a className='button box-account'>Sign up </a>
// 					) : (
// 						<a className='button box-account'>Create account </a>
// 					)}
// 					<div className='hidden max-md:block'>
// 						<button
// 							className='border max-md:border-[#888686] max-md:mt-2 max-md:border-solid max-md:border max-md:rounded-lg'
// 							onClick={toggleSmallScreenMenu}>
// 							<img
// 								src='/smallScreenToggle.svg'
// 								className='pl-2 pr-2 max-md:w-8 max-md:h-8'
// 							/>
// 						</button>
// 					</div>
// 					<div
// 						className='px-4 py-3 bg-[#4B4B4B] text-white rounded-md relative max-md:hidden'
// 						ref={dropdownRef}>
// 						<button
// 							className='bg-[#4B4B4B] text-white flex items-center gap-2 '
// 							onClick={() => setIsOpen(!isOpen)}>
// 							<img
// 								src={selectedLanguage.flag}
// 								alt={selectedLanguage.label}
// 								className='w-6 h-6 mr-2'
// 							/>
// 							<span>{selectedLanguage.label}</span>
// 							<img src='/downEng.svg' />
// 						</button>
// 						{isOpen && (
// 							<ul className='absolute bg-[#4B4B4B] text-white rounded-md mt-2 w-full z-50'>
// 								{languages.map((lang) => (
// 									<li
// 										key={lang.value}
// 										className='flex items-center p-2 cursor-pointer hover:bg-[#3a3a3a]'
// 										onClick={() => handleLanguageChange(lang)}>
// 										<img
// 											src={lang.flag}
// 											alt={lang.label}
// 											className='w-6 h-6 mr-2'
// 										/>
// 										<span>{lang.label}</span>
// 									</li>
// 								))}
// 							</ul>
// 						)}
// 					</div>
// 				</div>
// 				<div
// 					className={`nav-toggle ${isOpen && 'open'}`}
// 					onClick={toggleSmallScreenMenu}>
// 					<div className='bar'></div>
// 				</div>
// 			</nav>
// 			{isSmallScreenMenuOpen && (
// 				<div
// 					ref={smallScreenMenuRef}
// 					className='bg-[#4B4B4B] text-white p-4 rounded-lg'>
// 					<a
// 						className='block mb-2'
// 						onClick={() => handleNavItemClick('home')}>
// 						Home
// 					</a>
// 					<a
// 						className='block mb-2'
// 						onClick={() => handleNavItemClick('courses')}>
// 						Courses
// 					</a>
// 					<a
// 						className='block mb-2'
// 						onClick={() => handleNavItemClick('contact')}>
// 						Contact us
// 					</a>
// 					<a className='block mb-2'>Sign in</a>
// 					<a className='block button box-account'>Sign up</a>
// 				</div>
// 			)}
// 			<hr className='w-auto my-3 border border-solid' />
// 		</>
// 	);
// };

// export default Navbar;

import { useState, useEffect, useRef } from 'react';
import logo from './../img/spidedlogo.svg';
import './Navbar.css';

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
	const [isSmallScreenMenuOpen, setIsSmallScreenMenuOpen] =
		useState(false);
	const smallScreenMenuRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		const handleClickOutside = (event) => {
			if (
				(dropdownRef.current &&
					!dropdownRef.current.contains(event.target)) ||
				(smallScreenMenuRef.current &&
					!smallScreenMenuRef.current.contains(event.target))
			) {
				setIsSmallScreenMenuOpen(false);
				setIsOpen(false);
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
		setIsOpen(false); // Close the dropdown menu if open
		// setIsSmallScreenMenuOpen(false);
	};

	const handleNavItemClick = (section) => {
		setIsSmallScreenMenuOpen(false);
		// Add your navigation logic here, for example:
		document
			.getElementById(section)
			?.scrollIntoView({ behavior: 'smooth' });
	};

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
					<a
						className='nav-item max-md:hidden'
						onClick={() => handleNavItemClick('home')}>
						Home
					</a>
					<a
						className='nav-item max-md:hidden'
						onClick={() => handleNavItemClick('courses')}>
						Courses
					</a>
					<a
						className='nav-item max-md:hidden'
						onClick={() => handleNavItemClick('contact')}>
						Contact us
					</a>
					<a className='nav-item'>Sign in </a>
					{windowWidth <= 768 ? (
						<a className='button box-account'>Sign up </a>
					) : (
						<a className='button box-account'>Create account </a>
					)}
					<div className='hidden max-md:block'>
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
						className='px-4 py-3 bg-[#4B4B4B] text-white rounded-md relative max-md:hidden'
						ref={dropdownRef}>
						<button
							className='bg-[#4B4B4B] text-white flex items-center gap-2 '
							onClick={() => setIsOpen(!isOpen)}>
							<img
								src={selectedLanguage.flag}
								alt={selectedLanguage.label}
								className='w-6 h-6 mr-2'
							/>
							<span>{selectedLanguage.label}</span>
							<img src='/downEng.svg' />
						</button>
						{isOpen && (
							<ul className='absolute bg-[#4B4B4B] text-white rounded-md mt-2 w-full z-50'>
								{languages.map((lang) => (
									<li
										key={lang.value}
										className='flex items-center p-2 cursor-pointer hover:bg-[#3a3a3a]'
										onClick={() => handleLanguageChange(lang)}>
										<img
											src={lang.flag}
											alt={lang.label}
											className='w-6 h-6 mr-2'
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
					className='bg-[#4B4B4B] text-white p-4 rounded-lg'>
					<a
						className='block mb-2'
						onClick={() => handleNavItemClick('home')}>
						Home
					</a>
					<a
						className='block mb-2'
						onClick={() => handleNavItemClick('courses')}>
						Courses
					</a>
					<a
						className='block mb-2'
						onClick={() => handleNavItemClick('contact')}>
						Contact us
					</a>
					<a className='block mb-2'>Sign in</a>
					<a className='block button box-account'>Sign up</a>
				</div>
			)}
			<hr className='w-auto my-3 border border-solid' />
		</>
	);
};

export default Navbar;
