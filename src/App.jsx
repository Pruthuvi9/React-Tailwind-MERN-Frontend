import { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
} from 'react-router-dom';

import Users from './user/pages/Users';
import './App.css';
import UserPlaces from './places/pages/UserPlaces';

function App() {
	const userId = useParams();

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Users />}></Route>
				<Route path="/:userId/places" element={<UserPlaces />} />
			</Routes>
		</Router>
	);
}

export default App;
