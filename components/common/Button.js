import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, className, variant, onClick, type }) => {
  return (
    <button
      className={`${variant} ${className}  hover:opacity-75`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  variant: 'btn-green',
  type: 'button',
  onClick: () => []
};

export default Button;
