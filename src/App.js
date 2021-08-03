import {  useEffect } from 'react';

import Footer from './components/Footer';
import MainNavbar from './components/MainNavbar';
import Main from './components/Main';
import { GlobalProvider } from './context/GlobalState';

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
