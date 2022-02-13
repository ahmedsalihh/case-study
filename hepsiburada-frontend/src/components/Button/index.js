import './index.css';

const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button className={`${buttonType}-button`} type='button' {...otherProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  buttonType: 'orange',
};

export default Button;
