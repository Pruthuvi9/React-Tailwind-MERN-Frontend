import React from '@heroicons/react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
	return (
		<>
			<NavLink className='nav-link' to='/user/places'>
				My Places
			</NavLink>
			<NavLink className='nav-link' to='/user/places/new'>
				Add Place
			</NavLink>
			<NavLink className='nav-link' to='/login'>
				Login
			</NavLink>
			<NavLink className='nav-link danger'>Logout</NavLink>
		</>
	);
};

export default NavLinks;
