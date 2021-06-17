import React from 'react';

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="formInputContainer">
      <input
        className="formInput"
        onChange={handleChange}
        {...otherProps}
      ></input>
      {label ? <label className="formInputLabel">{label}</label> : null}
    </div>
  );
};

export default FormInput;
