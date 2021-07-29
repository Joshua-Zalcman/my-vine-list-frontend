import { useContext, useEffect } from 'react';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import { GlobalContext } from '../context/GlobalState';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';

const Main = ({ URL }) => {
	const { checkForToken } = useContext(GlobalContext);
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
			</Switch>
		</Container>
	);
};

export default Main;
