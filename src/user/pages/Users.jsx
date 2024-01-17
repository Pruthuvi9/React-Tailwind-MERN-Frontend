import UsersList from '../components/UsersList';
import './Users.css';

const Users = () => {
	const USERS = [
		{
			userId: 'u1',
			name: 'Pruthuvi Fernando',
			image: 'https://imgupscaler.com/images/samples/animal-after.webp',
			placeCount: 2,
		},
	];

	return <UsersList items={USERS} />;
};

export default Users;
