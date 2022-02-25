import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar';
import ScrollToTop from './components/views/commons/ScrollToTop';
import { useLocation } from 'react-router';

let LandingPage = React.lazy(() => { return import('./components/views/pages/LandingPage/LandingPage') })
let AboutPage = React.lazy(() => { return import('./components/views/pages/AboutPage/AboutPage') })
let LabPage = React.lazy(() => { return import('./components/views/pages/LabPage/LabPage') })
let ContactPage = React.lazy(() => { return import('./components/views/pages/ContactPage/ContactPage') })
let LoginPage = React.lazy(() => { return import('./components/views/pages/LoginPage/LoginPage') })
let RegisterPage = React.lazy(() => { return import('./components/views/pages/RegisterPage/RegisterPage') })

const App = ():JSX.Element => {
	const location = useLocation();

	const pathnameChecker = () => {
		if (location) {
			let path = location.pathname;
			let currentName = path.split('/')[1];
			modeHandler(currentName);
		}
	}

	const modeHandler = (name : string) => {
		const $App = document.querySelector('.App');
		if($App) {
			$App.classList.remove('dark-mode');
			$App.classList.remove('pink-mode');

			if (name === "lab") {
				$App.classList.add('dark-mode');
			} else if (name === "contact") {
				$App.classList.add('pink-mode');
			}
		}
	}

	useEffect(() => {
		pathnameChecker();
	}, [ location ])

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={ 
					<React.Suspense fallback={ <div className="fallback-message">Loading...</div> }>
						<LandingPage /> 
					</React.Suspense>
				}/>
				<Route path="/about" element={ 
					<React.Suspense fallback={ <div className="fallback-message">Loading...</div> }>
						<AboutPage /> 
					</React.Suspense>
				}/>
				<Route path="/lab" element={
					<React.Suspense fallback={ <div className="fallback-message">Loading...</div> }>
						<LabPage /> 
					</React.Suspense>
				}/>
				<Route path="/contact" element={ 
					<React.Suspense fallback={ <div className="fallback-message">Loading...</div> }>
						<ContactPage />
					</React.Suspense>
				}/>
				<Route path="/login" element={ 
					<React.Suspense fallback={ <div className="fallback-message">Loading...</div> }>
						<LoginPage />
					</React.Suspense>
				}/>
				<Route path="/register" element={ 
					<React.Suspense fallback={ <div className="fallback-message">Loading...</div> }>
						<RegisterPage />
					</React.Suspense>
				}/>
			</Routes>
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
