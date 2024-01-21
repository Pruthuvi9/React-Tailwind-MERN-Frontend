const Button = (props) => {
	if (props.link) {
		return <a className='btn-anchor'>{props.children}</a>;
	}

	return <button className='btn'>{props.children}</button>;
};

export default Button;
