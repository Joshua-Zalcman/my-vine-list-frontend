import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'reactstrap';
import Wine from '../components/Wine';

const WinesPage = ({ wines, deleteWine,getWines }) => {
	return (
		<div>
			<div className="d-flex justify-content-between">
				<LinkContainer to="/">
					<Button>Go Back</Button>
				</LinkContainer>
				<Button>Add New Wine</Button>
			</div>
			{wines.length > 0 ? (
				<div>
					{wines.map((wine) => (
						<Wine key={wine.id} wine={wine} deleteWine={deleteWine} getWines={getWines} />
					))}
				</div>
			) : (
				<p>No wines to show</p>
			)}
		</div>
	);
};

export default WinesPage;
