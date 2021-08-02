import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Jumbotron } from 'reactstrap';

const Home = () => {
	return (
		<Container className="text-center">
			<Jumbotron fluid style={{ backgroundColor: 'transparent' }}>
				<Container fluid>
					{' '}
					<h1 className="display-4">Welcome to My Vine List</h1>
					<p>
						Record your wine purchases and keep track of what you like to sip.
					</p>
					<p className="lead">
						<Link className="btn btn-primary btn-lg" to="/login" role="button">
							Login
						</Link>
					</p>
					<p className="lead">
						New User? Register <Link to="/register">here.</Link>
					</p>
				</Container>
			</Jumbotron>
		</Container>
	);
};

export default Home;
