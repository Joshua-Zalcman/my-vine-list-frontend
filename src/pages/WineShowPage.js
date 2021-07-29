import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';

const WineShowPage = ({ wines, match, history }) => {
	const [wineData, setWineData] = useState({});
	useEffect(() => {
		if (wines) {
			const id = match.params.id;
			const wineData = wines.find((wine) => wine.id == id);
			setWineData(wineData);
		} else {
			history.push('/');
		}
	}, [wines]);

	return (
		<Container>
			{wineData.title && (
				<Row>
					<Col>
						<img src={wineData.img} alt={wineData.title} />
					</Col>
					<Col>
						<h2>{wineData.title}</h2>
					</Col>
				</Row>
			)}
		</Container>
	);
};

export default WineShowPage;
