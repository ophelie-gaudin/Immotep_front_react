import React from "react";
import "./PhantomButton.css";

const PhantomButton = (props) => {
  return (
    <div>
      <a className="phantom-button" href="/">
        {props.children}
      </a>
    </div>
  );
};

export default PhantomButton;
