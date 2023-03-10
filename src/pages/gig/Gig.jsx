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
          <h2>About This Gig</h2>
          <p>I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.</p>
          
          <div className='seller'>
         <h2>About The Seller</h2>
            <div className='user'>
            <img src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
              <div className='info'>
                <span>Anna Bell</span>
              </div>
         </div>
          </div>
        </div>
        <div className='gigRight'></div>
      </div>
    </div>
  )
}

export default Gig
