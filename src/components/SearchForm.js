import { useState } from 'react';
import { Button, Input, FormGroup, Row, Col } from 'reactstrap';

const SearchForm = ({ getWines, handleSearch }) => {
	const [searchValue, setSearchValue] = useState('');
	const [searchTerm, setSearchTerm] = useState('title');

	const handleChange = (e) => {
		if (e.target.value === '') {
			getWines();
		}
		setSearchValue(e.target.value);
	};

	const handleSelect = (e) => {
		getWines();
		setSearchTerm(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		handleSearch(searchValue, searchTerm);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<FormGroup>
					<Row className=" d-flex align-items-center">
						<Col>
							{' '}
							<Input
								type="text"
								placeholder="Search..."
								value={searchValue}
								onChange={(e) => handleChange(e)}
							/>
						</Col>
						<Col>
							{' '}
							<Input
								type="select"
								value={searchTerm}
								onChange={(e) => handleSelect(e)}>
								<option value="title">Title</option>
								<option value="country">Country</option>
								<option value="variety">Grape Variety</option>
							</Input>
						</Col>
						<Col>
							{' '}
							<Button>
								<i className="fas fa-search"></i>
							</Button>
						</Col>
					</Row>
				</FormGroup>
			</form>
		</>
	);
};

export default SearchForm;
