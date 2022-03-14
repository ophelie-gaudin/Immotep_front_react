import React from "react";
import "./OrangeButton.css";

const OrangeButton = (props, type) => {
  return (
    <div>
      <a className="orange-button" href="/" type={type}>
        {props.children}
      </a>
    </div>
  );
};

export default OrangeButton;
