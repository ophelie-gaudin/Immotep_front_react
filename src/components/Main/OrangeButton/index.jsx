import React from 'react';
import './OrangeButton.css';

const OrangeButton = (props) => {
  return (
    <div>
      <a
        className='orange-button inline-block '
        href={props.url}
        type={props.type}
      >
        {props.children}
      </a>
    </div>
  );
};

export default OrangeButton;
