import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';

function App() {
	const [wineList, setWineList] = useState([]);
	URL = 'http://localhost:8000/api/';
	useEffect(() => {}, []);

	const getWines = async () => {
		const wines = await axios.get(URL);
		console.log(wines.data);
	};
	const loginUser = async (username, password) => {
		try {
			const user = await axios.post(`${URL}auth/login`, {
				username,
				password,
			});
			console.log(user.data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			{/* <Navbar /> */}
			<Main URL={URL} loginUser={loginUser} />
			<Footer />
		</div>
	);
}

export default App;
