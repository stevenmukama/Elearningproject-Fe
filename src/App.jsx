import './App.css';
import Navbar from './components/Navbar';
import CertificationPage from './pages/CertificationPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Navbar />

				<Routes>
					<Route
						path='/'
						element={<LandingPage />}
					/>
					<Route
						path='/certificationPage'
						element={<CertificationPage />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
