import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

const WineShowPage = ({ wines, match, history }) => {
	const [wineData, setWineData] = useState(null);
	useEffect(() => {
		if (wines) {
			const id = match.params.id;
			const wine = wines.find((wine) => wine.id == id);
			console.log(wine);
			setWineData(wine);
		} else {
			history.push('/');
		}
	}, [wines]);

	return (
		<Container>
			{wineData && (
				<Row>
					<Col>
						<img src={wineData.img} alt={wineData.title} />
					</Col>
					<Col>
						<h2>{wineData.title}</h2>
						<p>Price: {wineData.price}</p>
						<p>Your thoughts: {wineData.review}</p>
						<p>Country: {wineData.country}</p>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default WineShowPage;
