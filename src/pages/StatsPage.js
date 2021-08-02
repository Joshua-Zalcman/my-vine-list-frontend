import React, { useState } from 'react';
import MapChart from '../components/MapChart';
import { Container, Row, Col } from 'reactstrap';
import ReactTooltip from 'react-tooltip';

const StatsPage = ({ wines }) => {
	const [tooltip, setToolTip] = useState('');
	const avgPrice =
		wines.reduce((acc, wine) => acc + wine.price, 0) / wines.length;
	const avgRating =
		wines.reduce((acc, wine) => acc + wine.rating, 0) / wines.length;
	let countryList = {};
	wines.forEach((wine) => {
		if (countryList[wine.country]) {
			countryList[wine.country]++;
		} else {
			countryList[wine.country] = 1;
		}
	});

	return (
		<Container>
			<h2 className="text-center mt-4">Wine Map</h2>
			<div style={{ backgroundColor: 'grey' }}>
				<MapChart
					wines={wines}
					countryList={countryList}
					setToolTip={setToolTip}
				/>
				<ReactTooltip>{tooltip}</ReactTooltip>
			</div>
			<Row style={{ padding: '0px 15px' }}>
				<Col style={{ backgroundColor: '#f9e7f9' }}> 0 Bottles</Col>
				<Col style={{ backgroundColor: '#e897e8' }}> 1 Bottle</Col>
				<Col style={{ backgroundColor: '#d646d6' }}> 2 Bottles</Col>
				<Col style={{ backgroundColor: '#992199' }}> 3 Bottles</Col>
				<Col style={{ backgroundColor: '#491049' }}> 4 Bottles</Col>
				<Col style={{ backgroundColor: '#210721' }}> 5+ Bottles</Col>
			</Row>
			<div className=" mt-5 d-flex flex-column justify-content-around align-items-center">
				<h2>Average Wine Rating: {avgRating.toFixed(2)}</h2>
				<h2>Average Wine Price: ${avgPrice.toFixed(2)}</h2>
			</div>
		</Container>
	);
};

export default StatsPage;
