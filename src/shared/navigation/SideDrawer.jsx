import { createPortal } from 'react-dom';
import NavLinks from './NavLinks';

const element = (props) => (
	<aside className={props.className}>
		<NavLinks classNames='nav-link' />
	</aside>
);

const drawerHook = document.getElementById('drawer-hook');

const SideDrawer = (props) => {
	return createPortal(element(props), drawerHook);
};

export default SideDrawer;
