import React from "react";
import "./WarningArea.css";

const WarningArea = (props) => {
  return (
    <div data-aos="fade-left" className="warning-area">
      <p>{props.children}</p>
    </div>
  );
};

export default WarningArea;
