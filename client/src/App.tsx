import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar'

let LandingPage = React.lazy(() => { return import('./components/views/pages/LandingPage/LandingPage') })
let AboutPage = React.lazy(() => { return import('./components/views/pages/AboutPage/AboutPage') })
let LabPage = React.lazy(() => { return import('./components/views/pages/LabPage/LabPage') })
let ContactPage = React.lazy(() => { return import('./components/views/pages/ContactPage/ContactPage') })
let LoginPage = React.lazy(() => { return import('./components/views/pages/LoginPage/LoginPage') })
let RegisterPage = React.lazy(() => { return import('./components/views/pages/RegisterPage/RegisterPage') })

const App = ():JSX.Element => {
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
		</div>
	);
}

export default App;
