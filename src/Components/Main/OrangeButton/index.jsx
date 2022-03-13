import React from "react";
import "./OrangeButton.css";

const OrangeButton = (props) => {
  return (
    <div>
      <a className="orange-button" href="/">
        {props.children}
      </a>
    </div>
  );
};

export default OrangeButton;
