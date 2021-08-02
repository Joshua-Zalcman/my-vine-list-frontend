import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import {
	Card,
	CardImg,
	CardTitle,
	CardText,
	CardBody,
	Button,
} from 'reactstrap';
import Rating from './Rating';

const Wine = ({ wine, deleteWine, getWines }) => {
	const handleDelete = (id) => {
		deleteWine(id);
	};
	return (
		<div >
			<Card className="w-50 mx-auto">
				<CardImg top width="100px" src={wine.img} alt="Card image cap" />
				<CardBody>
					<CardTitle tag="h5">
						{wine.title}, {wine.variety}
					</CardTitle>
					<CardText>Winery: {wine.winery}</CardText>
					<CardText>Country: {wine.country}</CardText>

					<CardText>Price: {wine.price}</CardText>

					<CardText>
						Rating: <Rating rating={wine.rating} />
					</CardText>
					<CardText>
						<small className="text-muted">
							Entry from {wine.created_at.split('T')[0]}
						</small>
					</CardText>
					<div className="d-flex justify-content-between">
						<LinkContainer to={`wines/${wine.id}`}>
							<Button>Details</Button>
						</LinkContainer>
						<Button onClick={() => handleDelete(wine.id)}>Delete</Button>
					</div>
				</CardBody>
			</Card>
		</div>
	);
};

export default Wine;
