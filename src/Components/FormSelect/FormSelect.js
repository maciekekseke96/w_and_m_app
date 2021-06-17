import React from "react";

const FormSelect = ({
  label,
  handleChange,
  options,
  withInfoOption,
  ...otherProps
}) => {
  return (
    <div className="formSelectContainer">
      <select className="formSelect" onChange={handleChange} {...otherProps}>
        {withInfoOption ? (
          <option defaultValue hidden>{`Wybierz ${label}`}</option>
        ) : null}
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
