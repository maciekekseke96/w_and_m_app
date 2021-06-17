import React from 'react';

const FormSelect = ({ label, handleChange, options, ...otherProps }) => {
  return (
    <div className="formSelectContainer">
      <select className="formSelect" onChange={handleChange} {...otherProps}>
        {options.map((option, index) => (
          <option key={index} className="formSelectOption">
            {option}
          </option>
        ))}
      </select>
      {label ? <label className="formSelectLabel">{label}</label> : null}
    </div>
  );
};

export default FormSelect;
