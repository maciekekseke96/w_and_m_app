import React from 'react';

const FormTextarea = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="formTextareaContainer">
      <textarea
        className="formTextarea"
        onChange={handleChange}
        {...otherProps}
      ></textarea>
      {label ? <label className="formTextareaLabel">{label}</label> : null}
    </div>
  );
};

export default FormTextarea;
