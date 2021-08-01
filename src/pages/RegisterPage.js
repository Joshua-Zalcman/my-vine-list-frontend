import { useContext, useState } from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
import { GlobalContext } from '../context/GlobalState';

const RegisterPage = ({ URL,history }) => {
	const { checkForToken } = useContext(GlobalContext);
	const [message, setMessage] = useState('');
	const registerUser = async (username, email, password) => {
		try {
			const response = await axios.post(`${URL}auth/register`, {
				username,
				email,
				password,
			});
			if (response.data.token) {
				localStorage.setItem('token', response.data.token);
				checkForToken();
				history.push('/');
			} else {
				setMessage(response.data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div>
			{message && <p>{message}</p>}
			<RegisterForm registerUser={registerUser} />
		</div>
	);
};

export default RegisterPage;
