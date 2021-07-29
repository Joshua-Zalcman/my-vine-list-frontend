import { useContext, useEffect } from 'react';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import WinesPage from '../pages/WinesPage';
import { GlobalContext } from '../context/GlobalState';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

const Main = ({ URL }) => {
	const { checkForToken, userInfo } = useContext(GlobalContext);
	useEffect(() => {
		checkForToken();
	}, []);
	return (
		<Container className="mt-2">
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route
					path="/login"
					render={(pr) => {
						return <LoginPage {...pr} />;
					}}
				/>
				<Route
					path="/wines"
					render={(pr) => {
						return <WinesPage {...pr} />;
					}}
				/>
			</Switch>
		</Container>
	);
};

export default Main;
