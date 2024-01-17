const PlaceItem = (props) => {
	return (
		<li
			key={props.id}
			className="rounded-xl overflow-hidden border-2 border-sky-500"
		>
			<div>
				<img src={props.image} className="h-48 w-full object-none" />
			</div>
			<div className="py-5">
				<h2 className="text-2xl font-bold text-blue-700">{props.name}</h2>
				<p>{props.description}</p>
			</div>
		</li>
	);
};

export default PlaceItem;
