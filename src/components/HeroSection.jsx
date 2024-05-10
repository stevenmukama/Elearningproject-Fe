import ladyimage from './../img/ladysitting.png';
import circleBg from './../img/circlesbg.svg';
import './HeroSection.css';

function HeroSection() {
	return (
		<>
			<section className='Home-section max-sm:flex-col-reverse max-sm:mt-5'>
				<img
					className='circleBg max-sm:hidden'
					src={circleBg}
					alt='circleBg'
				/>
				<img
					className='circleBg-img max-sm:hidden'
					src={circleBg}
					alt='circleBg'
				/>
				<div className='main-herosection max-sm:text-start max-sm:text-3xl'>
					<h1 className='hero-text max-sm:block max-sm:text-2xl max-sm:text-center max-sm:font-extrabold'>
						<span style={{ color: '#F49406' }}> Gain</span>{' '}
						<span style={{ color: 'black' }}> Impressive</span>
						<span style={{ color: '#20B486' }}> Skills</span>{' '}
						<span style={{ color: 'black' }}> That </span>{' '}
						<br className='max-sm:hidden'></br>
						<span style={{ color: 'black' }}> Bridges </span>{' '}
						<span style={{ color: '#20B486' }}> The Gap</span>
						<span style={{ color: 'black' }}> Between </span>{' '}
						<br className='max-sm:hidden'></br>
						<span style={{ color: '#F49406' }}>
							Personal Development
						</span>{' '}
						<span style={{ color: 'black' }}>And</span>{' '}
						<br className='max-sm:hidden'></br>
						<span style={{ color: '#20B486' }}>
							Professional Success!
						</span>{' '}
					</h1>
					<div>
						<p className='hero-description max-sm:text-xl max-sm:text-center max-sm:font-light'>
							Discover vital courses that bring about real change in both
							your personal and professional life. At SPID Education, we
							prioritize practical learning through reading, ensuring you
							acquire valuable skills that truly make a difference.
						</p>
						<div className='Home-section-buttons'>
							<button className='cta-button max-sm:text-sm max-sm:px-2 max-sm:h-14'>
								Get Started
							</button>
							<button className='contact-button max-sm:text-sm max-sm:px-2 max-sm:h-14'>
								Contact Us
							</button>
						</div>
					</div>
				</div>
				<div className='herosection-lady max-sm:flex'>
					<div className='box-herosection'></div>
					<img
						src={ladyimage}
						className='rounded-md lady-sitting-image max-sm:w-full max-sm:pt-3 max-sm:pr-5'
						alt='lady-sitting-image'
					/>
				</div>
			</section>
		</>
	);
}

export default HeroSection;
