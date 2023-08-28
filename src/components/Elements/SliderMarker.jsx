import React from 'react';

const SliderMarker = () => {
  return (
    <div className="sliderMarker-container">
      <div className="sliderMarker sliderMarker__right ">
        <i className="fa fa-caret-right text-[var(--primary)]  text-xl" aria-hidden="true"></i>
      </div>
      <div className="sliderMarker sliderMarker__left">
        <i className="fa fa-caret-left text-[var(--primary)]  text-xl" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default SliderMarker;
