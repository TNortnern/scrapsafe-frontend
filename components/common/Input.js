import React from 'react';
import propTypes from 'prop-types';

const Input = ({ className, onChange, placeholder, value, type }) => (
  <input
    placeholder={placeholder}
    type={type}
    onChange={onChange}
    value={value}
    className={`border-b border-green-custom placeholder-black pl-1 ${className}`}
  />
);

Input.propTypes = {
  className: propTypes.string,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string,
  type: propTypes.string,
};

Input.defaultProps = {
  className: '',
  placeholder: '',
  type: 'text',
  value: '',
};

export default Input;
