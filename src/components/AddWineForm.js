import { useState } from 'react';

import {
	FormGroup,
	Label,
	Input,
	FormText,
	Button,
	Card,
	Row,
	Col,
	CardBody,
} from 'reactstrap';

const AddWineForm = ({ toggleModal,addWine }) => {
	const [formState, setFormState] = useState({
		title: '',
		winery: '',
		img: '',
		price: 0,
		date: null,
		review: '',
		rating: 5,
		variety: '',
		country: '',
		region: '',
		where_purchased: '',
	});

	const handleChange = (e) => {
		setFormState((prevState) => {
			return { ...prevState, [e.target.name]: e.target.value };
		});
	};

	const handleSubmitAdd = (e) => {
		e.preventDefault();
		//check feilds are not blank
		addWine(formState)
		setFormState({
			title: '',
			winery: '',
			img: '',
			price: 0,
			date: null,
			review: '',
			rating: 5,
			variety: '',
			country: '',
			region: '',
			where_purchased: '',
		})
		toggleModal()
	};

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmitAdd}>
					<Row>
						<Col>
							{' '}
							<FormGroup>
								<Label>Title</Label>
								<Input
									type="text"
									name="title"
									placeholder="Enter title"
									value={formState.title}
									onChange={handleChange}
								/>
							</FormGroup>
						</Col>
						<Col>
							{' '}
							<FormGroup>
								<Label>Winery</Label>
								<Input
									type="text"
									name="winery"
									placeholder="Winery name"
									value={formState.winery}
									onChange={handleChange}
								/>
							</FormGroup>
						</Col>
					</Row>

					<FormGroup>
						<Label>Image</Label>
						<Input
							type="text"
							name="img"
							placeholder="Image"
							value={formState.img}
							onChange={handleChange}
						/>
					</FormGroup>
					<Row>
						<Col>
							<FormGroup>
								<Label>Price</Label>
								<Input
									type="number"
									name="price"
									placeholder="Price"
									value={formState.price}
									onChange={handleChange}
								/>
							</FormGroup>
						</Col>
						<Col>
							{' '}
							<FormGroup>
								<Label>Date</Label>
								<Input
									type="date"
									name="date"
									placeholder="Date consumed"
									value={formState.date}
									onChange={handleChange}
								/>
							</FormGroup>
						</Col>
					</Row>

					<FormGroup>
						<Label>Review</Label>
						<Input
							type="textarea"
							name="review"
							placeholder="Review"
							value={formState.review}
							onChange={handleChange}
						/>
					</FormGroup>
					<FormGroup>
						<Label>Rating</Label>
						<Input
							type="select"
							name="rating"
							placeholder="Rating"
							value={formState.rating}
							onChange={handleChange}>
							<option value={1}>1</option>
							<option value={1.5}>1.5</option>
							<option value={2}>2</option>
							<option value={2.5}>2.5</option>
							<option value={3}>3</option>
							<option value={3.5}>3.5</option>
							<option value={4}>4</option>
							<option value={4.5}>4.5</option>
							<option value={5}>5</option>
						</Input>
					</FormGroup>

					<Row>
						<Col>
							<FormGroup>
								<Label>Grape Variety</Label>
								<Input
									type="text"
									name="variety"
									placeholder="Grape variety"
									value={formState.variety}
									onChange={handleChange}
								/>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Country</Label>
								<Input
									type="text"
									name="country"
									placeholder="Country"
									value={formState.country}
									onChange={handleChange}
								/>
							</FormGroup>
						</Col>
					</Row>
					<Row>
						{' '}
						<Col>
							{' '}
							<FormGroup>
								<Label>Region</Label>
								<Input
									type="text"
									name="region"
									placeholder="Region"
									value={formState.region}
									onChange={handleChange}
								/>
							</FormGroup>
						</Col>
						<Col>
							<FormGroup>
								<Label>Purchased At</Label>
								<Input
									type="text"
									name="where_purchased"
									placeholder="Purchased at"
									value={formState.where_purchased}
									onChange={handleChange}
								/>
							</FormGroup>
						</Col>
					</Row>

					<div className="d-flex justify-content-between">
						<Button color="primary" type="submit">
							Add Wine
						</Button>
						<Button color="secondary" onClick={toggleModal}>
							Cancel
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	);
};

export default AddWineForm;
