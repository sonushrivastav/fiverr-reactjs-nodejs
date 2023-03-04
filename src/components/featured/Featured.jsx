import React from 'react'
import "./featured.css"
const Featured = () => {
  return (
    <div className='featured'>
          <div className='container'>
              <div className='left'>
                  <h1>Find the perfect <i>freelance</i> services for your buisness</h1>
                  <div className='search'>
                      <div className='searchInput'>
                          <img src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/search.png" alt="" />
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
                  <img src="https://raw.githubusercontent.com/safak/youtube23/fiverr-ui/public/img/man.png" alt="" />
              </div>
      </div>
    </div>
  )
}

export default Featured
