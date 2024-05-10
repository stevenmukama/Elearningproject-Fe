import CeoSection from './components/CeoSection';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import CertificationSection from './components/CertificationSection';
import HowItWorks from './components/HowItWorks';
import ReviewSection from './components/ReviewSection';
import WhyUs from './components/WhyUs';
import FooterSection from './components/FooterSection';
import CourseSection from './components/CourseSection';
import './App.css';

function App() {
	return (
		<div>
			<Navbar />
			<HeroSection />
			<CeoSection />
			<CourseSection />
			<CertificationSection />
			<HowItWorks />
			<ReviewSection />
			<WhyUs />
			<FooterSection />
		</div>
	);
}

export default App;
