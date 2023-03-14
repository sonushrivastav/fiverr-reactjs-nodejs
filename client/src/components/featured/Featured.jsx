import React from 'react'
import "./featured.css"
import searchicon from "../../assets/search.png"
import man from "../../assets/man.png"
const Featured = () => {
  return (
    <div className='featured'>
          <div className='container'>
              <div className='left'>
                  <h1>Find the perfect <i>freelance</i> services for your buisness</h1>
                  <div className='search'>
                      <div className='searchInput'>
                          <img src={ searchicon} alt="" />
                          <input type="text" placeholder='Try building mobile app'/>
                      </div>
                      <button>Search</button>
                  </div>
                  <div className='popular'>
                      <span>Popular:</span>
                      <button>Web Design</button>
                      <button>Logo Design</button>
                      <button>AI Services</button>
                      <button>Cloud Services</button>
                  </div>
              </div>
              <div className='right'>
                  <img src={man} alt="" />
              </div>
      </div>
    </div>
  )
}

export default Featured
