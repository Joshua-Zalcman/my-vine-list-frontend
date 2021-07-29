import axios from 'axios';

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
	} else {
		return null;
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
			await axios.post('http://localhost:8000/api/auth/logout', null, config);
		} catch (error) {
			console.log(error);
		}

		localStorage.removeItem('token');
	}
};
