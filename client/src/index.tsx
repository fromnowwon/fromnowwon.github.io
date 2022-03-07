import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import PromiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './_reducers';

const TRACKING_ID = process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID as string;
ReactGA.initialize(TRACKING_ID);

const enhancer = 
	process.env.NODE_ENV === "production"
		? compose(applyMiddleware(PromiseMiddleware, ReduxThunk))
		: composeWithDevTools(applyMiddleware(PromiseMiddleware, ReduxThunk, logger));

const store = createStore(rootReducer, enhancer);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
