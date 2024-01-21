import React from '@heroicons/react';
import { NavLink } from 'react-router-dom';

const NavLinks = (props) => {
	return (
		<>
			<NavLink className={props.classNames} to='/user/places'>
				My Places
			</NavLink>
			<NavLink className={props.classNames} to='/user/places/new'>
				Add Place
			</NavLink>
			<NavLink className={props.classNames} to='/login'>
				Login
			</NavLink>
			<NavLink className={`${props.classNames} danger`} to='/'>
				Logout
			</NavLink>
		</>
	);
};

export default NavLinks;
