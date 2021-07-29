import axios from 'axios';
//check if token is there
// export const getToken = () => {
// 	let token = localStorage.getItem('token');
// 	if (token) {
// 		// Check if expired, remove if it is
// 		const payload = JSON.parse(atob(token.split('.')[1]));
// 		// JWT's exp is expressed in seconds, not milliseconds, so convert
// 		if (payload.exp < Date.now() / 1000) {
// 			localStorage.removeItem('token');
// 			token = null;
// 		}
// 	}
// 	return token;
// };

export const getUserFromToken = async () => {
	let token = localStorage.getItem('token');
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	// If token, add to headers config
	if (token) {
		config.headers['Authorization'] = `Token ${token}`;
	} else {
		return null;
	}
	try {
		const response = await axios.get(
			'http://localhost:8000/api/auth/user',
			config
		);
		if (response.data) {
			return response.data;
		} else {
			return null;
		}
	} catch (error) {
		console.log(error);
	}
};

export const removeTokenFromStorage = async () => {
	let token = localStorage.getItem('token');
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	// If token, add to headers config and remove
	if (token) {
		config.headers['Authorization'] = `Token ${token}`;

		try {
			await axios.post('http://localhost:8000/api/auth/user', config);
		} catch (error) {
			console.log(error);
		}

		localStorage.removeItem('token');
	}
};
