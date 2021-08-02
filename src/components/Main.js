import { useContext, useState, useEffect } from 'react';
import LoginPage from '../pages/LoginPage';
import Home from '../pages/Home';
import WinesPage from '../pages/WinesPage';
import WineShowPage from '../pages/WineShowPage';
import { GlobalContext } from '../context/GlobalState';
import { Switch, Route, useHistory } from 'react-router-dom';
import { Container } from 'reactstrap';
import axios from 'axios';
import StatsPage from '../pages/StatsPage';
import RegisterPage from '../pages/RegisterPage';
import { getUserFromToken } from '../actions/token_actions';

const Main = ({ URL }) => {
	const history = useHistory();
	const { checkForToken, userInfo } = useContext(GlobalContext);

	const [wineList, setWineList] = useState([]);
	const [message, setMessage] = useState('');

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

	const updateWine = async (data, id) => {
		const token = localStorage.getItem('token');
		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Token ${token}`,
			},
		};
		try {
			const response = await axios.put(`${URL}wines/${id}/`, data, config);
			console.log(response.data);
			getWines();
		} catch (error) {
			console.log(error);
		}
	};

	const handleSearch = (value, term) => {
		let searchResult = wineList.filter((wine) =>
			wine[term].toLowerCase().includes(value.toLowerCase())
		);
		setWineList(searchResult);
		if (term === 'title') {
			setMessage(`Wines with '${value}' in their title`);
		} else if (term === 'country') {
			setMessage(`Wines from ${value}`);
		} else {
			setMessage(`${value} wines`);
		}
		console.log(message);
	};

	return (
		<Container className="mt-2" style={{ minHeight: '90vh' }}>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route
					path="/login"
					render={(pr) => {
						return <LoginPage {...pr} URL={URL} />;
					}}
				/>
				<Route
					path="/register"
					render={(pr) => {
						return <RegisterPage {...pr} URL={URL} />;
					}}
				/>
				<Route
					exact
					path="/wines"
					render={(pr) => {
						const token = localStorage.getItem('token');
						const user = getUserFromToken();
						if ((token && userInfo.username) || user.username) {
							return (
								<WinesPage
									{...pr}
									wines={wineList}
									deleteWine={deleteWine}
									getWines={getWines}
									addWine={addWine}
									handleSearch={handleSearch}
									message={message}
								/>
							);
						} else {
							history.push('/login');
						}
					}}
				/>
				<Route
					path="/wines/:id"
					render={(pr) => {
						const token = localStorage.getItem('token');
						const user = getUserFromToken();
						if ((token && userInfo.username) || user.username) {
							return (
								<WineShowPage
									{...pr}
									wines={wineList}
									updateWine={updateWine}
								/>
							);
						} else {
							history.push('/login');
						}
					}}
				/>
				<Route
					path="/stats"
					render={(pr) => {
						const token = localStorage.getItem('token');
						const user = getUserFromToken();
						if ((token && userInfo.username) || user.username) {
							return (
								<StatsPage
									{...pr}
									wines={wineList}
									getWines={getWines}
									handleSearch={handleSearch}
								/>
							);
						} else {
							history.push('/login');
						}
					}}
				/>
			</Switch>
		</Container>
	);
};

export default Main;
