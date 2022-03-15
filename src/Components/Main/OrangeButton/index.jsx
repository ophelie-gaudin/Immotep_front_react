import React from "react";
import "./OrangeButton.css";

const OrangeButton = (props, type, url) => {
  return (
    <div>
      <a className="orange-button" href={url} type={type}>
        {props.children}
      </a>
    </div>
  );
};

export default OrangeButton;
