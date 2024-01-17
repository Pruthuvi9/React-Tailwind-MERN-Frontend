import { Link } from 'react-router-dom';

import UserItem from './UserItem';

const UsersList = (props) => {
	if (props.items.length === 0) {
		return (
			<div>
				<h2>No users found.</h2>
			</div>
		);
	}

	return (
		<ul className="flex justify-center">
			{props.items.map((user) => (
				<UserItem
					key={user.userId}
					id={user.userId}
					name={user.name}
					image={user.image}
					description={user.description}
					placeCount={user.placeCount}
				/>
			))}
		</ul>
	);
};

export default UsersList;
