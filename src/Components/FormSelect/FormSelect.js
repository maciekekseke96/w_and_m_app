import React from "react";

const FormSelect = ({
  label,
  handleChange,
  options,
  withInfoOption,
  idAndNameOption,
  ...otherProps
}) => {
  return (
    <div className="formSelectContainer">
      <select className="formSelect" onChange={handleChange} {...otherProps}>
        {withInfoOption ? (
          <option defaultValue hidden>{`Wybierz ${label}`}</option>
        ) : null}
        {options.map((option, index) =>
          idAndNameOption ? (
            <option
              key={index}
              className="formSelectOption"
              value={option.id}
            >{option.name}</option>
          ) : (
            <option key={index} className="formSelectOption">
              {option}
            </option>
          )
        )}
      </select>
      {label ? <label className="formSelectLabel">{label}</label> : null}
    </div>
  );
};

export default FormSelect;
