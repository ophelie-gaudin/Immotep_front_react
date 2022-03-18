import React from "react";
import "./Input.css";

const Input = ({ label, type, name, setValue }) => {
  
  return (
    <div>
      <label>
        {label}
        <input className="form-input" name={name} type={type} />
      </label>
    </div>
  );
};

export default Input;
