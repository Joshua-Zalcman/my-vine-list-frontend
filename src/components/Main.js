import { useContext, useState, useEffect } from 'react';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import WinesPage from '../pages/WinesPage';
import { GlobalContext } from '../context/GlobalState';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'reactstrap';
import axios from 'axios';

const Main = ({ URL }) => {
	const { checkForToken, userInfo } = useContext(GlobalContext);

	const [wineList, setWineList] = useState([]);

	useEffect(() => {
		checkForToken();
		const token = localStorage.getItem('token');
		if (token && userInfo.username) {
			getWines();
		}
	}, [userInfo.username]);

	const getWines = async () => {
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${token}`,
			},
		};
		try {
			const response = await axios.get(`${URL}wines/`, config);
			console.log(response.data);
			if (response.data) {
				setWineList(response.data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const deleteWine = async (id) => {
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${token}`,
			},
		};
		try {
			await axios.delete(`${URL}wines/${id}/`, config);
			getWines();
		} catch (error) {
			console.log(error);
		}
	};

	const addWine = async (data) => {
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${token}`,
			},
		};
		try {
			const response = await axios.post(`${URL}wines/`, data, config);
			console.log(response.data);
			getWines();
		} catch (error) {
			console.log(error);
		}
	};

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
						return (
							<WinesPage
								{...pr}
								wines={wineList}
								deleteWine={deleteWine}
								getWines={getWines}
								addWine={addWine}
							/>
						);
					}}
				/>
			</Switch>
		</Container>
	);
};

export default Main;
