import React from 'react'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slider/Slide'
import TrustedBy from '../../components/trustedby/TrustedBy'
import "./home.css"
import { cards } from '../../data'
import CategoryCard from '../../components/categoryCard/CategoryCard'
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
    </div>
  )
}

export default Home
