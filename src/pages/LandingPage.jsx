import CeoSection from '../components/CeoSection';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import CertificationSection from '../components/CertificationSection';
import HowItWorks from '../components/HowItWorks';
import ReviewSection from '../components/ReviewSection';
import WhyUs from '../components/WhyUs';
import FooterSection from '../components/FooterSection';
import CourseSection from '../components/CourseSection';
import ContactForm from '../components/ContactForm';

function LandingPage() {
	return (
		<>
			<Navbar />
			<HeroSection />
			<CeoSection />
			<CourseSection />
			<CertificationSection />
			<HowItWorks />
			<ReviewSection />
			<WhyUs />
			<ContactForm />
			<FooterSection />
		</>
	);
}

export default LandingPage;
