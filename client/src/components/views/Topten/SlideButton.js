import React from 'react';



const SlideButton = ({ onClick, type }) => (
  <button className={`slide-button slide-button--${type}`} onClick={onClick}>
    <span>
      j
    </span>
  </button>
);

export default SlideButton;
