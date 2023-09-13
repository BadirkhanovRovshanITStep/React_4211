import './Button.css';

function Button({children, clickHandler}) {

  return (
    <button onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
