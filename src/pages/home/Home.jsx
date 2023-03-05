import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slider/Slide'
import TrustedBy from '../../components/trustedby/TrustedBy'
import "./home.css"
import { cards } from '../../data'
import CategoryCard from '../../components/categoryCard/CategoryCard'
import check from "../../assets/check.png"
const Home = () => {
  return (
    <div>
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
          </div>
          <div className='item'>
            <video src="" controls></video>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
