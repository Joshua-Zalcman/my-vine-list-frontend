import { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

function App() {
	const [wineList, setWineList] = useState([]);
	URL = 'http://localhost:8000/api/wines/';
	useEffect(() => {
		getWines();
	}, []);

	const getWines = async () => {
		const wines = await axios.get(URL);
		console.log(wines.data);
	};

	return (
		<div className="App">
			<h1>My Vine List</h1>
		</div>
	);
}

export default App;
