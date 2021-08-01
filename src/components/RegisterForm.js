import React, { useState } from 'react';
import { FormGroup, Label, Input, Button, Card, CardBody } from 'reactstrap';


const RegisterForm = ({ registerUser }) => {
	const [formState, setFormState] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	});
	const [message, setMessage] = useState('');

	const handleChange = (e) => {
		setFormState((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleSubmitRegister = (e) => {
		e.preventDefault();
		//check feilds are not blank
		const { username, email, password, confirmPassword } = formState;
		if (password === confirmPassword) {
			registerUser(username, email, password);
			setFormState({
				username: '',
				email: '',
				password: '',
				confirmPassword: '',
			});
		} else {
			setMessage('passwords do not match!');
		}
	};
	return (
		<div>
			{message && <p>{message}</p>}
			<Card>
				<CardBody>
					<form onSubmit={handleSubmitRegister}>
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
							<Label> Email</Label>
							<Input
								type="email"
								name="email"
								placeholder="Enter email"
								value={formState.email}
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
						<FormGroup>
							<Label>Confirm Password</Label>
							<Input
								type="password"
								name="confirmPassword"
								placeholder="Confirm password"
								autoComplete="off"
								value={formState.confirmPassword}
								onChange={handleChange}
							/>
						</FormGroup>
						<Button color="primary" type="submit">
							Register
						</Button>
					</form>
				</CardBody>
			</Card>
		</div>
	);
};

export default RegisterForm;
