import './App.css';
import AllCoursesPage from './pages/AllCoursesPage';
import CertificationPage from './pages/CertificationPage';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route
						path='/'
						element={<LandingPage />}
					/>
					<Route
						path='/certificationPage'
						element={<CertificationPage />}
					/>
					<Route
						path='/AllCoursesPage'
						element={<AllCoursesPage />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
