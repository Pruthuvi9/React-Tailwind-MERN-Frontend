const UserItem = (props) => {
    return (
        <li
            key={props.userId}
            class="flex justify-left w-fit max-w-sm pl-4 pr-6 py-4 bg-yellow-200 hover:bg-yellow-300 hover:cursor-pointer rounded-lg"
        >
            <div class="flex min-w-0 gap-x-4">
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
                        {props.placeCount}{" "}
                        {props.placeCount === 1 ? "place" : "places"}
                    </h3>
                </div>
            </div>
        </li>
    );
};

export default UserItem;
