import NavLinks from './NavLinks';

const MainNavigation = (props) => {
	return (
		<header className={props.className}>
			<NavLinks classNames='nav-link' />
		</header>
	);
};

export default MainNavigation;
