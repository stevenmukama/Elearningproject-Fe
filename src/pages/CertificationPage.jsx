import FooterSection from '../components/FooterSection';
import Navbar from '../components/Navbar';

function CertificationPage() {
	return (
		<>
			<Navbar />
			<div className="bg-[url('/bgVerificationPage.webp')] bg-contain">
				<div className='px-16 mt-24 text-center'>
					<h1 className='text-2xl font-koh'>
						CERTIFICATE{' '}
						<span className='text-[#24D198]'>VERIFICATION</span> PORTAL
					</h1>
					<p className='mt-8 text-xl'>
						Please enter your verification number in the field provided and
						click the &quot;Verify&quot; button. If you encounter any
						issues, feel free to email us for assistance
					</p>
					<div className='flex items-center mt-8'>
						<input
							placeholder='Enter verification Number|'
							className='w-full px-2 placeholder:bg-white placeholder:text-[##A6A6A6] h-12 '
						/>
						<button className='bg-[#000] text-white px-4 py-4 rounded-md'>
							Verify
						</button>
					</div>
					<div className='mt-8'>
						<div className='flex items-center justify-between'>
							<div>
								<img
									src='/dangerIcon.svg'
									alt='dangerIcon'
									className='w-auto h-auto'
								/>
								<p className='text-xl'>Certificate Verification</p>
							</div>
							<div>
								The given certificate number is invalid. Please contact
								spid-Education personnel for assistance.
							</div>
						</div>
					</div>
				</div>
			</div>
			<FooterSection />
		</>
	);
}

export default CertificationPage;
