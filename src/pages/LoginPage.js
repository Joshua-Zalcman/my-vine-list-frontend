import { useContext, useState } from 'react';
import { Container } from 'reactstrap';
import LoginForm from '../components/LoginForm';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';

const LoginPage = () => {
	const { checkForToken } = useContext(GlobalContext);
	const [message, setMessage] = useState('');

	const loginUser = async (username, password) => {
		try {
			const response = await axios.post(`${URL}auth/login`, {
				username,
				password,
			});
			if (response.data.token) {
				localStorage.setItem('token', response.data.token);
				checkForToken();
			} else {
				setMessage(response.data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Container>
			{message && <p>{message}</p>}
			<LoginForm loginUser={loginUser} />
		</Container>
	);
};

export default LoginPage;
