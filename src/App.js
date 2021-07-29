import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';

function App() {
	const [wineList, setWineList] = useState([]);
	URL = 'http://localhost:8000/api/';
	useEffect(() => {}, []);

	const getWines = async () => {
		const wines = await axios.get(URL);
		console.log(wines.data);
	};

	return (
		<GlobalProvider>
			<div>
				{/* <Navbar /> */}
				<Main URL={URL} />
				<Footer />
			</div>
		</GlobalProvider>
	);
}

export default App;
