import { useState } from 'react';
import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';

function CertificationPage() {
	const [showError, setShowError] = useState(false);

	const handleVerify = () => {
		setShowError(true);
	};
	return (
		<>
			<Navbar />
			<div className="bg-[url('/bgVerificationPage.webp')] bg-contain h-screen bg-[#F9F9EE]">
				<div className='px-16 mt-24 text-center'>
					<h1 className='underline-image text-[50px] font-koh font-bold'>
						CERTIFICATE{' '}
						<span className='text-[#24D198]'>VERIFICATION</span> PORTAL
					</h1>

					<p className='mt-[6rem] text-[37px]'>
						Please enter your verification number in the field provided and
						click the <span className='font-bold'>&quot;Verify&quot;</span>{' '}
						button. If you encounter any issues, feel free to
						<span className='font-bold underline ml-[6px]'>
							email us
						</span>{' '}
						for assistance
					</p>

					<div className='flex items-center mt-8'>
						<input
							placeholder='Enter verification Number|'
							className='w-full px-2 placeholder:bg-white placeholder:text-[##A6A6A6] h-12 '
						/>
						<button
							className='bg-[#000] text-white px-4 py-4 rounded-md'
							onClick={handleVerify}>
							Verify
						</button>
					</div>
					{showError && (
						<div className='mt-8'>
							<div className='flex items-center justify-between'>
								<div>
									<img
										src='/dangerIcon.svg'
										alt='dangerIcon'
										className='w-auto h-auto'
									/>
									<p className='text-xl font-bold'>
										No Corresponding record found{' '}
									</p>
								</div>
								<div>
									The given certificate number is invalid. Please contact
									spid-Education personnel for assistance.
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
			<FooterSection />
		</>
	);
}

export default CertificationPage;
