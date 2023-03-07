import React from 'react'
import "./gigs.css"
const Gigs = () => {
  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>FIVERR > GRAPHICS & DESIGN</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists 
        </p>
        <div className='menu'>
          <div className='left'>
            <span>Budged</span>
            <input type="text" placeholder='min'/>
            <input type="text" placeholder='max'/>
            <button>Apply</button>
          </div>
          <div className='right'>
            <span className='sortBy'>SortBy</span>
            <span className='sortType'>Best Selling</span>
            <img src="" alt="" />
            <div className='rightMenu'>
              <span>Newest</span>
              <span>Best Selling</span>
            </div>
          </div>
        </div>
    </div>
      
    </div>
  )
}

export default Gigs
