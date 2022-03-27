import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar';
import ScrollToTop from './components/views/commons/ScrollToTop';
import { useLocation } from 'react-router';
import { modeHandler } from './_actions/mode_actions';
import { useDispatch, useSelector } from "react-redux";
import RouteChangeTracker from './components/RouteChangeTracker';
import Loader from '../src/components/views/commons/Loader';

let LandingPage = React.lazy(() => { return import('./components/views/pages/LandingPage/LandingPage') })
let AboutPage = React.lazy(() => { return import('./components/views/pages/AboutPage/AboutPage') })
let LabPage = React.lazy(() => { return import('./components/views/pages/LabPage/LabPage') })
let ContactPage = React.lazy(() => { return import('./components/views/pages/ContactPage/ContactPage') })
let LoginPage = React.lazy(() => { return import('./components/views/pages/LoginPage/LoginPage') })
let RegisterPage = React.lazy(() => { return import('./components/views/pages/RegisterPage/RegisterPage') })
let NotFound = React.lazy(() => { return import('./components/views/pages/NotFound/NotFound') })

const App = ():JSX.Element => {
	const location = useLocation();
	const dispatch = useDispatch();
	const mode = useSelector<any>(state => state.mode.pageMode) as string;

	RouteChangeTracker();

	useEffect(() => {
		console.log("지금 환경은?", process.env.NODE_ENV);
		dispatch(modeHandler());
	}, [ location ])

	useEffect(() => {
		const $App = document.querySelector('.App');
		console.log("Mode: ", mode)

		if($App) {
			$App.classList.remove('default-mode');
			$App.classList.remove('dark-mode');
			$App.classList.remove('pink-mode');

			if(mode !== undefined) {
				$App.classList.add(mode);
			}
			
		}
	}, [ mode ])

	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={ 
					<React.Suspense fallback={ <Loader /> }>
						<LandingPage /> 
					</React.Suspense>
				}/>
				<Route path="/about" element={ 
					<React.Suspense fallback={ <Loader /> }>
						<AboutPage /> 
					</React.Suspense>
				}/>
				<Route path="/lab" element={
					<React.Suspense fallback={ <Loader /> }>
						<LabPage /> 
					</React.Suspense>
				}/>
				<Route path="/contact" element={ 
					<React.Suspense fallback={ <Loader /> }>
						<ContactPage />
					</React.Suspense>
				}/>
				<Route path="/login" element={ 
					<React.Suspense fallback={ <Loader /> }>
						<LoginPage />
					</React.Suspense>
				}/>
				<Route path="/register" element={ 
					<React.Suspense fallback={ <Loader /> }>
						<RegisterPage />
					</React.Suspense>
				}/>
				<Route 
					path="*"
					element={ 
						<React.Suspense fallback={ <div className="fallback-message">Loading...</div> }>
							<NotFound />
						</React.Suspense>
					}
				/>
			</Routes>
			<Footer />
			<ScrollToTop />
		</div>
	);
}

export default App;
