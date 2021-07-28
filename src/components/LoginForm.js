import { useState } from 'react';

import {
	FormGroup,
	Label,
	Input,
	FormText,
	Button,
	Card,
	CardBody,
} from 'reactstrap';

const LoginForm = ({ loginUser }) => {
	const [formState, setFormState] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormState((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleSubmitLogin = (e) => {
		e.preventDefault();
		//check feilds are not blank
		const { username, password } = formState;
		loginUser(username, password);
		setFormState({
			username: '',
			password: '',
		});
	};

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmitLogin}>
					<FormGroup>
						<Label> Username</Label>
						<Input
							type="text"
							name="username"
							placeholder="Enter username"
							value={formState.username}
							onChange={handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label>Password</Label>
						<Input
							type="password"
							name="password"
							placeholder="Password"
							autoComplete="off"
							value={formState.password}
							onChange={handleChange}
						/>
					</FormGroup>
					<Button color="primary" type="submit">
						Login
					</Button>
				</form>
			</CardBody>
		</Card>
	);
};

export default LoginForm;
