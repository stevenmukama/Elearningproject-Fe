import { useState, useEffect, useCallback } from 'react';

const FormData = [
	{ textLabel: 'Full Name', placeholderText: 'Daniel', type: 'text' },
	{ textLabel: 'Phone Number', placeholderText: '+2507', type: 'Number' },
	{
		textLabel: 'Email Address',
		placeholderText: 'danielcimanuka7@',
		type: 'Email',
	},
	{
		textLabel: 'Your Message',
		placeholderText: 'Type your message',
		type: 'textarea',
	},
];

const contactSection = [
	{
		HeaderText: 'Contact Us',
		TextDescription:
			'Your satisfaction is our priority. Whether you have questions, feedback, or need assistance, please feel free to reach out to us. Our dedicated team is here to provide you with the support and assistance you need.',
	},
];

const ContactForm = () => {
	const [formValues, setFormValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isFormValid, setIsFormValid] = useState(false);
	const [touchedFields, setTouchedFields] = useState({});

	const validateForm = useCallback(() => {
		const newErrors = {};
		FormData.forEach((data) => {
			if (!formValues[data.textLabel]) {
				newErrors[data.textLabel] = 'Required';
			} else if (
				data.type === 'Email' &&
				!/\S+@\S+\.\S+/.test(formValues[data.textLabel])
			) {
				newErrors[data.textLabel] = 'Invalid email address';
			}
		});
		setErrors(newErrors);
		setIsFormValid(Object.keys(newErrors).length === 0);
	}, [formValues]);

	const handleChange = (e) => {
		const { id, value } = e.target;
		setFormValues({ ...formValues, [id]: value });
	};

	const handleBlur = (e) => {
		const { id } = e.target;
		setTouchedFields({ ...touchedFields, [id]: true });
		validateForm();
	};

	useEffect(() => {
		validateForm();
	}, [formValues, validateForm]);

	return (
		<section className='pb-20'>
			<div className='flex pt-10 pb-20'>
				<div className='mb-8 w-[45%]'>
					{contactSection.map((section, index) => (
						<div
							key={index}
							className='text-start py-16 px-4 leading-7 rounded-lg text-white bg-[#07614C] rounded-r-none rounded-x relative'>
							<h1 className='mb-2 text-3xl font-bold font-Santepheap'>
								{section.HeaderText}
							</h1>
							<p className='font-Poppins'>{section.TextDescription}</p>
						</div>
					))}
					<div className='flex gap-4 mt-11 text-start'>
						<img
							src='/lineContact.svg'
							className='w-4 h-40 pt-3'
						/>
						<div className='leading-7'>
							<h2 className='font-bold'>Phone Number</h2>
							<p className='text-[#20B486] underline'>+250 789 129 482</p>
							<h2 className='mt-4 font-bold'>Email Address:</h2>
							<p className='text-[#20B486] underline'>
								info.spided@gmail.com
							</p>
							<h2 className='mt-4 font-bold'>Social Media</h2>
							<div>
								<div className='flex items-center gap-2'>
									<img
										src='/tiktokicon.svg'
										className='max-sm:h-[12px]'
									/>
									<img
										src='/linkedinicon.svg'
										className='max-sm:h-[12px]'
									/>
									<img
										src='/facebookicon.svg'
										className='max-sm:h-[12px]'
									/>
									<img
										src='/instagramicon.svg'
										className='max-sm:h-[12px]'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='relative w-[100%] flex px-12 bg-[#F9F8EC] rounded-lg'>
					<img
						src='/lineContact.svg'
						className='w-4 pt-9 h-[61%]'
					/>
					<form className='relative w-full px-3 font-Poppins'>
						{FormData.map((data, index) => (
							<div
								key={index}
								className='pt-9 text-start'>
								<label
									className='block mb-2 text-sm font-bold text-gray-700'
									htmlFor={data.textLabel}>
									{data.textLabel}
								</label>
								{data.type === 'textarea' ? (
									<textarea
										className={`w-full px-3 py-2 leading-tight bg-[#F9F8EC] text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ml-2 ${
											touchedFields[data.textLabel] &&
											errors[data.textLabel]
												? 'border-red-500'
												: ''
										}`}
										id={data.textLabel}
										placeholder={data.placeholderText}
										rows='4'
										style={{ resize: 'none' }}
										value={formValues[data.textLabel] || ''}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								) : (
									<input
										className={`w-full px-3 py-2 leading-tight bg-[#F9F8EC] text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ml-2 ${
											touchedFields[data.textLabel] &&
											errors[data.textLabel]
												? 'border-red-500'
												: ''
										}`}
										id={data.textLabel}
										type={data.type}
										placeholder={data.placeholderText}
										value={formValues[data.textLabel] || ''}
										onChange={handleChange}
										onBlur={handleBlur}
									/>
								)}
								{touchedFields[data.textLabel] &&
									errors[data.textLabel] && (
										<p className='text-xs italic text-red-500'>
											{errors[data.textLabel]}
										</p>
									)}
							</div>
						))}
						<div className='flex items-end justify-end py-4'>
							<button
								className={`px-4 py-4 font-bold rounded focus:outline-none focus:shadow-outline flex gap-3 items-center ${
									isFormValid
										? 'bg-[#07614C] text-white'
										: 'bg-[#7d8d89] text-white'
								}`}
								type='button'
								disabled={!isFormValid}>
								Send
								<img src='/sendIcon.svg' />
							</button>
						</div>
					</form>
				</div>
				<div className='border w-1/6 h-[312px] bg-[#07614C] rounded-lg rounded-l-none'></div>
			</div>
			<div className='flex justify-between'>
				<h2 className='text-3xl font-Santepheap'>
					Prefer to chat with us via Whats-app?
				</h2>
				<button className='flex items-center gap-2 px-4 py-2 font-semibold border rounded font-Poppins'>
					<span>Let&apos;s Chat</span>
					<img src='/whatsappIcon.svg' />
				</button>
			</div>
		</section>
	);
};

export default ContactForm;
