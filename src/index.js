import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/blk-design-system-react.css';
import './assets/css/bootstrap.min.css';
import './assets/css/blk-design-system-react.min.css';
import './assets/css/nucleo-icons.css';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Router>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
