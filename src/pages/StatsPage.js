import React, { useState, useEffect } from 'react';
import MapChart from '../components/MapChart';
import { Container, Row, Col, Progress } from 'reactstrap';
import ReactTooltip from 'react-tooltip';

const StatsPage = ({ wines, handleSearch, history, getWines }) => {
	useEffect(() => {
		getWines();
	}, []);
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
					handleSearch={handleSearch}
					countryList={countryList}
					setToolTip={setToolTip}
					history={history}
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
			<h2 className="mt-5 text-center">Wine Stats</h2>
			<div className="mb-5  d-flex flex-wrap justify-content-between align-items-center">
				<div className="progress-container progress-success mt-3 w-25">
					<p className="progress-badge">
						Average Wine Rating: {avgRating.toFixed(2)}
					</p>
					<Progress max="5" value={avgRating.toFixed(2)}></Progress>
				</div>
				<div className="progress-container progress-success w-25">
					<p className="progress-badge">
						Average Wine Price: {avgPrice.toFixed(2)}
					</p>
					<Progress max="100" value={avgPrice.toFixed(2)}></Progress>
				</div>
				<div className="progress-container progress-success w-25">
					<p className="progress-badge">
						Number of Countries: {Object.keys(countryList).length}
					</p>
					<Progress
						max="100"
						value={Object.keys(countryList).length}></Progress>
				</div>
			</div>
		</Container>
	);
};

export default StatsPage;
