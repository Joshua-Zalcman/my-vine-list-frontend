import React from 'react';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import { Switch, Route } from 'react-router-dom';

const Main = ({ URL, loginUser }) => {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route
					path="/login"
					render={(pr) => {
						return <LoginPage loginUser={loginUser} {...pr} />;
					}}
				/>
			</Switch>
		</div>
	);
};

export default Main;
