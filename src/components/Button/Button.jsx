import './Button.css';

export const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  label, 
  onClick 
}) => {
  return (
    <button
      type="button"
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
