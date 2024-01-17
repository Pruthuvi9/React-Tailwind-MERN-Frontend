import PlaceItem from './PlaceItem';

const PlacesList = (props) => {
	if (props.places.length === 0) {
		return (
			<div>
				<h2>No places found.</h2>
			</div>
		);
	}

	return (
		<ul>
			{props.places.map((place) => (
				<PlaceItem
					key={place.id}
					name={place.name}
					image={place.imageSrc}
					description={place.description}
				/>
			))}
		</ul>
	);
};

export default PlacesList;
