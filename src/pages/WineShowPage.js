import React, { useEffect, useState } from 'react';
import {
	Col,
	Container,
	Row,
	Button,
	Modal,
	ModalBody,
	ModalHeader,
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import WineForm from '../components/WineForm';
import Rating from '../components/Rating';

const WineShowPage = ({ wines, match, history, updateWine }) => {
	const [wineData, setWineData] = useState(null);
	const [modal, setModal] = useState(false);

	const toggleModal = () => setModal(!modal);

	const closeBtn = (
		<button className="close" onClick={toggleModal}>
			&times;
		</button>
	);
	useEffect(() => {
		if (wines) {
			const id = match.params.id;
			const wine = wines.find((wine) => wine.id == id);
			setWineData(wine);
		} else {
			history.push('/');
		}
	}, [wines]);

	return (
		<Container>
			<div>
				<div className="d-flex justify-content-between">
					<LinkContainer to="/">
						<Button>Go Back</Button>
					</LinkContainer>
					<Button onClick={toggleModal}>Update Wine</Button>
				</div>
			</div>
			<Modal isOpen={modal} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal} close={closeBtn}>
					Update wine
				</ModalHeader>
				<ModalBody>
					<WineForm
						toggleModal={toggleModal}
						wine={wineData}
						updateWine={updateWine}
					/>
				</ModalBody>
			</Modal>
			{wineData && (
				<Row>
					<Col>
						<img src={wineData.img} alt={wineData.title} />
					</Col>
					<Col>
						<h2>{wineData.title}</h2>
						<p>Grape Variety: {wineData.variety}</p>
						<Row>
							<Col>
								<p>Country: {wineData.country}</p>
							</Col>
							<Col>
								{' '}
								<p>Region: {wineData.region}</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<p>Price: {wineData.price}</p>
							</Col>
							<Col>
								{' '}
								<p>
									Your rating: <Rating rating={wineData.rating} />
								</p>
							</Col>
						</Row>

						<p>Your thoughts: {wineData.review}</p>
						<Row>
							<Col>
								<p>Purchased at: {wineData.where_purchased}</p>
							</Col>
							<Col>
								<p>Date: {wineData.date_consumed}</p>
							</Col>
						</Row>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default WineShowPage;
