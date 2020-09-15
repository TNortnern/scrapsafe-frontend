import React from "react";
import propTypes from "prop-types";

const Input = ({
  className,
  onChange,
  placeholder,
  value,
  type,
  register,
  errors,
  name,
  rule,
  errorMessage
}) => (
  <>
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      name={name}
      className={`border-b border-green-custom placeholder-black pl-1 my-5 ${className}`}
      ref={register(rule)}
    />
    {errors[name] && <span className="relative font-bold text-red-500 bottom">{ errorMessage }</span>}
  </>
);

Input.propTypes = {
  className: propTypes.string,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string,
  type: propTypes.string,
  register: propTypes.func,
  errors: propTypes.object,
  name: propTypes.string,
  rule: propTypes.object,
  errorMessage: propTypes.string
};

Input.defaultProps = {
  className: "",
  placeholder: "",
  type: "text",
  value: "",
  register: () => [],
  errors: null,
  name: (Math.random() + 5).toString(),
  errorMessage: 'Something is wrong with this input.'
};

export default Input;
