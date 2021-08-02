import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Footer from './components/Footer';
import MainNavbar from './components/MainNavbar';
import Main from './components/Main';
import { GlobalContext, GlobalProvider } from './context/GlobalState';

function App() {
	URL = 'https://my-vine-list-backend.herokuapp.com/api/';

	useEffect(() => {}, []);

	return (
		<GlobalProvider>
			<div>
				<MainNavbar />
				<Main URL={URL} />
				<Footer />
			</div>
		</GlobalProvider>
	);
}

export default App;
