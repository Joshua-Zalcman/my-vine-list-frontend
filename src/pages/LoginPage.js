import React from 'react';
import { Container } from 'reactstrap';
import LoginForm from '../components/LoginForm';

const LoginPage = ({ loginUser }) => {
	return (
		<Container>
			<LoginForm loginUser={loginUser} />
		</Container>
	);
};

export default LoginPage;
