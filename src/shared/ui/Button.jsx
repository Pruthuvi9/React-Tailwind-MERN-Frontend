const Button = (props) => {
  const btn =
    props.type === 'anchor' ? (
      <a className='btn-anchor'>{props.label}</a> ? (
        props.type === 'submit'
      ) : (
        <button className='btn-anchor' type='submit'>
          {props.label}
        </button>
      )
    ) : (
      <button className='btn'>{props.label}</button>
    );

  return <div className='btn'>{btn}</div>;
};

export default Button;
