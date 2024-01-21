import { Link, useParams } from 'react-router-dom';

const UserItem = (props) => {
	return (
		<li
			key={props.id}
			className="flex justify-left w-fit max-w-sm pl-4 pr-6 py-4 bg-blue hover:bg-green hover:cursor-pointer rounded-lg"
		>
			<Link to={`/${props.id}/places`}>
				<div className="flex min-w-0 gap-x-4">
					<img
						className="h-20 w-20 rounded-full"
						src={props.image}
						alt={props.name}
					/>
					<div className="ml-3">
						<h2 className="text-lg font-semibold text-gray-900">
							{props.name}
						</h2>
						<h3 className="mt-2 text-md text-gray-600">
							{props.placeCount} {props.placeCount === 1 ? 'place' : 'places'}
						</h3>
					</div>
				</div>
			</Link>
		</li>
	);
};

export default UserItem;
