import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import SearchForm from '../components/SearchForm';
import Wine from '../components/Wine';
import WineForm from '../components/WineForm';

const WinesPage = ({
	wines,
	deleteWine,
	handleSearch,
	getWines,
	addWine,
	message,
}) => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => setModal(!modal);

	const closeBtn = (
		<button className="close" onClick={toggleModal}>
			&times;
		</button>
	);

	return (
		<div>
			<div className="d-flex flex-wrap justify-content-between mb-4">
				<LinkContainer to="/">
					<Button>Go Back</Button>
				</LinkContainer>
				<SearchForm getWines={getWines} handleSearch={handleSearch} />
				<Button onClick={toggleModal}>Add New Wine</Button>
			</div>
			<Modal isOpen={modal} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal} close={closeBtn}>
					Add new wine
				</ModalHeader>
				<ModalBody>
					<WineForm toggleModal={toggleModal} addWine={addWine} />
				</ModalBody>
			</Modal>
			{message && <h4 className="text-center my-3">{message}</h4>}
			{wines.length > 0 ? (
				<div>
					{wines.map((wine) => (
						<Wine
							key={wine.id}
							wine={wine}
							deleteWine={deleteWine}
							getWines={getWines}
						/>
					))}
				</div>
			) : (
				<p>No wines to show</p>
			)}
		</div>
	);
};

export default WinesPage;
