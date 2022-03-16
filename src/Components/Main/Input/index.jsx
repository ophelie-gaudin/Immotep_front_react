import React from "react";
import "./Input.css";

const Input = ({ label = "", type, name }) => {
  return (
    <div>
      <label>{label} </label>
      <input className="form-input" name={name} type={type} />
    </div>
  );
};

export default Input;
