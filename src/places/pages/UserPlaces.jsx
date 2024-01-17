import PlacesList from '../components/PlacesList';

const PLACES = [
	{
		id: 'p1',
		name: 'Empire State Building',
		imageSrc:
			'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
		description: "One of the world's most famour skyscrapers.",
	},
];

const UserPlaces = () => {
	return <PlacesList places={PLACES} />;
};

export default UserPlaces;
