import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slider/Slide'
import TrustedBy from '../../components/trustedby/TrustedBy'
import "./home.css"
import { cards } from '../../data'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import check from "../../assets/check.png"
import video from "../../assets/video.mp4"
const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={4} arrowsScroll={3}>
        {
          cards?.map(card => (
            <CategoryCard key={card?.id} item={ card} />
          ))
        }
      </Slide>
      <div className='features'>
        <div className='Fcontainer'>
          <div className='item'>
            <h1>A Whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing
            </p>
            <div className="title">
              <img src={check} alt="" />
              Quality work done quickly
            </div>
            <p>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title">
              <img src={check} alt="" />
              Protected payments, every time
            </div>
            <p>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title">
              <img src={check} alt="" />
              24/7 support
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src={check} alt="" />
              The best for every budget
            </div>
            <p>
              Find high-quality services at every price point. No hourly rates, just project-based pricing
            </p>
          </div>
          <div className='item'>
            <video src={video} typeof="video/mp4" loop autoPlay controls></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
