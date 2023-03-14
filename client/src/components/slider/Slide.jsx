import React from "react";
import "./slider.css";
import Slider from "infinite-react-carousel";

const Slide = ({children,slidesToShow,arrowsScroll}) => {
  return (
    <div className="slider">
      <div className="sliderContainer">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;
