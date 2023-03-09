import React from 'react'
import "./gig.css";
import Slider from "infinite-react-carousel";
import star from "../../assets/star.png"
const Gig = () => {
  return (
    <div className='gig'>
      <div className='gigcontainer'>
        <div className='gigLeft'>
          <span className='breadCrumbs'>FIVERR > GRAPHICS & DESIGN ></span>
          <h1>I will create ai generated art for you</h1>
          <div className='giguser'>
          <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <span>John Doe</span>
            <div className='gigStars'>
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
          </div>
          </div>
          <Slider slidesToShow={1} arrowScroll={1}>
          <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
        </div>
        <div className='gigRight'></div>
      </div>
    </div>
  )
}

export default Gig
