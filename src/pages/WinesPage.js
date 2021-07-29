import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Modal, ModalFooter, ModalBody, ModalHeader } from 'reactstrap';
import Wine from '../components/Wine';
import AddWineForm from '../components/AddWineForm';

const WinesPage = ({ wines, deleteWine, getWines,addWine }) => {
	const [modal, setModal] = useState(false);

	const toggleModal = () => setModal(!modal);

	const closeBtn = (
		<button className="close" onClick={toggleModal}>
			&times;
		</button>
	);

	return (
		<div>
			<div className="d-flex justify-content-between">
				<LinkContainer to="/">
					<Button>Go Back</Button>
				</LinkContainer>
				<Button onClick={toggleModal}>Add New Wine</Button>
			</div>
			<Modal isOpen={modal} toggle={toggleModal}>
				<ModalHeader toggle={toggleModal} close={closeBtn}>
					Add new wine
				</ModalHeader>
				<ModalBody>
					<AddWineForm toggleModal={toggleModal} addWine={addWine}/>
				</ModalBody>
				
			</Modal>
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
