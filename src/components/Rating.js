import React, { useEffect, useState } from 'react';

const Rating = ({ rating }) => {
	const [stars, setStars] = useState('');
	useEffect(() => {
		if (rating === 5) {
			setStars(
				<>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
				</>
			);
		} else if (rating === 0) {
			setStars(
				<>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
				</>
			);
		} else if (rating === 0.5) {
			setStars(
				<>
					<i className="fas fa-star-half-alt"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
				</>
			);
		} else if (rating === 1) {
			setStars(
				<>
					<i className="fas fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
				</>
			);
		} else if (rating === 1.5) {
			setStars(
				<>
					<i className="fas fa-star"></i>
					<i className="fas fa-star-half-alt"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
				</>
			);
		} else if (rating === 2) {
			setStars(
				<>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
				</>
			);
		} else if (rating === 2.5) {
			setStars(
				<>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star-half-alt"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
				</>
			);
		} else if (rating === 3) {
			setStars(
				<>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="far fa-star"></i>
					<i className="far fa-star"></i>
				</>
			);
		} else if (rating === 3.5) {
			setStars(
				<>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star-half-alt"></i>
					<i className="far fa-star"></i>
				</>
			);
		} else if (rating === 4) {
			setStars(
				<>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="far fa-star"></i>
				</>
			);
		} else if (rating === 4.5) {
			setStars(
				<>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star-half-alt"></i>
				</>
			);
		}
	}, []);
	return <div>{stars}</div>;
};

export default Rating;
